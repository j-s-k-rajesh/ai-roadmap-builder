import { useState } from "react";
import { useParams } from "react-router-dom";
import api, { decodeRouteParam } from "../../lib/api";

const AIRoadmap = () => {

  const { gmail } = useParams();
  const userEmail = decodeRouteParam(gmail);

  const [question, setQuestion] = useState("");

  const [roadmap, setRoadmap] = useState(null);

  const [loading, setLoading] = useState(false);


  // =========================================
  // Generate Roadmap
  // =========================================

  const generateRoadmap = async () => {

    try {

      setLoading(true);

      const response = await api.post(
        "/generate-roadmap",
        {
          question: question
        }
      );

      setRoadmap(response.data.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  };


  // =========================================
  // Save Roadmap
  // =========================================

  const saveRoadmap = async () => {

    try {

      await api.post(
        "/save-roadmap",
        {
          email: userEmail,
          goal: roadmap.goal,
          roadmap: roadmap
        }
      );

      alert("Roadmap Saved Successfully");

    } catch (error) {

      console.error(error);
    }
  };


  return (

    <div>

      <h1 className="text-4xl font-bold mb-8">
        AI Roadmap Generator
      </h1>


      {/* Input */}

      <div className="flex gap-4 mb-8">

        <input
          type="text"
          placeholder="Enter your goal..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-5 py-4"
        />

        <button
          onClick={generateRoadmap}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-4 rounded-2xl"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>


      {/* Roadmap Preview */}

      {roadmap && (

        <div className="bg-black/30 border border-white/10 rounded-3xl p-6">

          <h2 className="text-3xl font-bold mb-4">
            {roadmap.goal}
          </h2>

          <p className="text-gray-400 mb-8">
            Total Time: {roadmap.total_estimated_time}
          </p>


          {/* Steps */}

          <div className="space-y-6">

            {roadmap.steps.map((step) => (

              <div
                key={step.step_number}
                className="bg-white/5 p-5 rounded-2xl"
              >

                <h3 className="text-2xl font-semibold mb-3">
                  Step {step.step_number}: {step.title}
                </h3>

                <p className="text-gray-400">
                  {step.description}
                </p>

              </div>
            ))}
          </div>


          {/* Confirm Save */}

          <button
            onClick={saveRoadmap}
            className="mt-8 bg-green-500 hover:bg-green-600 px-6 py-4 rounded-2xl"
          >
            Confirm & Save Roadmap
          </button>

        </div>
      )}
    </div>
  );
};

export default AIRoadmap;
