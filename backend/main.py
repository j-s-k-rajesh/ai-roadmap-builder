import json
from typing import List, Dict

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, ValidationError

import google.generativeai as genai


# ======================================================
# FASTAPI APP
# ======================================================

app = FastAPI(
    title="AI Roadmap Generator API",
    description="Generate AI-powered learning roadmaps",
    version="1.0.0"
)


# ======================================================
# GEMINI CONFIGURATION
# ======================================================

API_KEY = "AIzaSyD6ye1d6ChI8a5pedZ0fnUUSJ71t-e4Xi4"

genai.configure(api_key=API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")
# model = genai.GenerativeModel("gemini-1.5-flash")

# ======================================================
# REQUEST MODEL
# ======================================================

class UserGoalRequest(BaseModel):
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
# GET ROUTE
# ======================================================

@app.get("/")
def home():

    return {
        "message": "AI Roadmap Generator API is running"
    }


# ======================================================
# POST ROUTE
# ======================================================

@app.post("/generate-roadmap")
def create_roadmap(request: UserGoalRequest):

    roadmap = generate_roadmap(request.question)

    return {
        "success": True,
        "data": roadmap
    }
