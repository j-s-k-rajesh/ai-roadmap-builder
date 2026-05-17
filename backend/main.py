import json
import os

from typing import List, Dict

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel, ValidationError

from dotenv import load_dotenv

from pymongo import MongoClient

from bson import ObjectId

import google.generativeai as genai

# ======================================================
# LOAD ENV
# ======================================================

load_dotenv()

# ======================================================
# FASTAPI APP
# ======================================================

app = FastAPI(
    title="AI Roadmap Generator API",
    description="Generate AI-powered learning roadmaps",
    version="1.0.0"
)

# ======================================================
# CORS
# ======================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ======================================================
# MONGODB CONFIGURATION
# ======================================================

MONGO_URI = os.getenv("MONGO_URI")

client = MongoClient(MONGO_URI)

db = client["learnai"]

users_collection = db["users"]

roadmaps_collection = db["roadmaps"]

print("✅ MongoDB Connected Successfully")

# ======================================================
# GEMINI CONFIGURATION
# ======================================================

API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")

# ======================================================
# REQUEST MODELS
# ======================================================

class UserGoalRequest(BaseModel):
    question: str


class SaveRoadmapRequest(BaseModel):
    email: str
    goal: str
    roadmap: dict


class GoogleUser(BaseModel):
    name: str
    email: str
    picture: str

class RoadmapQuestionRequest(BaseModel):
    roadmap: dict
    question: str

# ======================================================
# ROADMAP SCHEMA
# ======================================================

class Resources(BaseModel):
    youtube: List[str]
    courses: List[str]
    documentation: List[str]
    practice_platforms: List[str]
    github_repositories: List[str]


class Step(BaseModel):
    step_number: int
    title: str
    description: str
    skills_to_learn: List[str]
    tools_and_frameworks: List[str]
    resources: Resources
    mini_projects: List[str]
    advanced_projects: List[str]
    estimated_time: str
    common_mistakes: List[str]
    interview_preparation: List[str]


class Roadmap(BaseModel):
    goal: str
    total_estimated_time: str
    steps: List[Step]
    best_tips: List[str]
    job_ready_tips: List[str]

# ======================================================
# GENERATE ROADMAP FUNCTION
# ======================================================

def generate_roadmap(user_goal: str) -> Dict:

    prompt = f"""
    Create a COMPLETE learning roadmap for:

    "{user_goal}"

    Return ONLY valid JSON.

    JSON Structure:

    {{
      "goal": "string",
      "total_estimated_time": "string",
      "steps": [
        {{
          "step_number": 1,
          "title": "string",
          "description": "string",
          "skills_to_learn": [],
          "tools_and_frameworks": [],
          "resources": {{
            "youtube": [],
            "courses": [],
            "documentation": [],
            "practice_platforms": [],
            "github_repositories": []
          }},
          "mini_projects": [],
          "advanced_projects": [],
          "estimated_time": "string",
          "common_mistakes": [],
          "interview_preparation": []
        }}
      ],
      "best_tips": [],
      "job_ready_tips": []
    }}

    Rules:
    - Beginner friendly
    - Detailed roadmap
    - Include resources
    - No markdown
    - No explanations outside JSON
    """

    response = model.generate_content(
        prompt,
        generation_config=genai.GenerationConfig(
            response_mime_type="application/json",
            temperature=0.7
        )
    )

    raw_text = response.text.strip()

    try:

        roadmap_data = json.loads(raw_text)

        validated_data = Roadmap(**roadmap_data)

        return validated_data.model_dump()

    except json.JSONDecodeError:

        raise HTTPException(
            status_code=500,
            detail="Invalid JSON returned by Gemini"
        )

    except ValidationError as e:

        raise HTTPException(
            status_code=500,
            detail=f"Schema validation failed: {e}"
        )

# ======================================================
# ASK QUESTIONS ON ROADMAP
# ======================================================

def ask_roadmap_question(
    roadmap: dict,
    question: str
):

    prompt = f"""
    You are an AI learning assistant.

    Answer the user's question ONLY based on this roadmap.

    ROADMAP:

    {json.dumps(roadmap, indent=2)}

    USER QUESTION:
    {question}

    Rules:
    - Answer clearly
    - Beginner friendly
    - Use roadmap context only
    - Keep answer concise
    """

    response = model.generate_content(
        prompt
    )

    return response.text
# ======================================================
# HOME ROUTE
# ======================================================

@app.get("/")
def home():

    return {
        "message": "AI Roadmap Generator API is running"
    }

# ======================================================
# GOOGLE LOGIN
# ======================================================

@app.post("/google-login")
def google_login(user: GoogleUser):

    existing_user = users_collection.find_one({
        "email": user.email
    })

    if not existing_user:

        users_collection.insert_one({
            "name": user.name,
            "email": user.email,
            "picture": user.picture
        })

    return {
        "success": True,
        "user": {
            "name": user.name,
            "email": user.email,
            "picture": user.picture
        }
    }

# ======================================================
# GENERATE ROADMAP ONLY
# ======================================================

@app.post("/generate-roadmap")
def create_roadmap(request: UserGoalRequest):

    roadmap = generate_roadmap(request.question)

    return {
        "success": True,
        "data": roadmap
    }

# ======================================================
# SAVE ROADMAP
# ======================================================

@app.post("/save-roadmap")
def save_roadmap(request: SaveRoadmapRequest):

    result = roadmaps_collection.insert_one({

        "user_email": request.email,

        "goal": request.goal,

        "roadmap": request.roadmap
    })

    return {
        "success": True,
        "message": "Roadmap Saved Successfully",
        "roadmap_id": str(result.inserted_id)
    }

# ======================================================
# GET ALL USER ROADMAPS
# ======================================================

@app.get("/user-roadmaps/{email}")
def get_user_roadmaps(email: str):

    roadmaps = list(
        roadmaps_collection.find(
            {
                "user_email": email
            }
        )
    )

    formatted_roadmaps = []

    for roadmap in roadmaps:

        formatted_roadmaps.append({

            "id": str(roadmap["_id"]),

            "user_email": roadmap["user_email"],

            "goal": roadmap["goal"],

            "roadmap": roadmap["roadmap"]
        })

    return {
        "success": True,
        "roadmaps": formatted_roadmaps
    }

# ======================================================
# GET SINGLE ROADMAP
# ======================================================

@app.get("/roadmap/{roadmap_id}")
def get_single_roadmap(roadmap_id: str):

    roadmap = roadmaps_collection.find_one({
        "_id": ObjectId(roadmap_id)
    })

    if not roadmap:

        raise HTTPException(
            status_code=404,
            detail="Roadmap Not Found"
        )

    return {

        "id": str(roadmap["_id"]),

        "user_email": roadmap["user_email"],

        "goal": roadmap["goal"],

        "roadmap": roadmap["roadmap"]
    }

# ======================================================
# DELETE ROADMAP
# ======================================================

@app.delete("/delete-roadmap/{roadmap_id}")
def delete_roadmap(roadmap_id: str):

    result = roadmaps_collection.delete_one({
        "_id": ObjectId(roadmap_id)
    })

    if result.deleted_count == 0:

        raise HTTPException(
            status_code=404,
            detail="Roadmap Not Found"
        )

    return {
        "success": True,
        "message": "Roadmap Deleted Successfully"
    }

# ======================================================
# ASK QUESTIONS ABOUT ROADMAP
# ======================================================

@app.post("/ask-roadmap")

def ask_question(request: RoadmapQuestionRequest):

    answer = ask_roadmap_question(
        request.roadmap,
        request.question
    )

    return {

        "success": True,

        "question": request.question,

        "answer": answer
    }