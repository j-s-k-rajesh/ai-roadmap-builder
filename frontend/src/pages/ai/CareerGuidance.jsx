import { useNavigate, useParams } from "react-router-dom";
import { encodeRouteParam } from "../../lib/api";

const CareerGuidance = () => {

  const navigate = useNavigate();

  const { gmail } = useParams();
  const routeEmail = encodeRouteParam(gmail);


  return (

    <div className="text-white">

      {/* Heading */}

      <h1 className="text-4xl font-bold mb-4">
        Career Guidance 🚀
      </h1>


      <p className="text-gray-400 text-lg mb-10">
        This page is currently under development.
        More AI-powered career guidance features will be added soon.
      </p>


      {/* Simple Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-3">
            💰 Salary Insights
          </h2>

          <p className="text-gray-400">
            Explore salary ranges for different tech careers.
          </p>
        </div>


        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-3">
            🛣️ Career Paths
          </h2>

          <p className="text-gray-400">
            Learn step-by-step paths for different roles.
          </p>
        </div>


        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-3">
            🎤 Interview Prep
          </h2>

          <p className="text-gray-400">
            Practice technical interview questions.
          </p>
        </div>


        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-3">
            📄 Resume Tips
          </h2>

          <p className="text-gray-400">
            Improve your resume and portfolio.
          </p>
        </div>
      </div>


      {/* Buttons */}

      <div className="flex flex-wrap gap-4">

        <button
          onClick={() =>
            navigate(`/student/${routeEmail}/dashboard`)
          }

          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-2xl transition"
        >
          Back to Dashboard
        </button>


        <button
          onClick={() =>
            navigate(`/student/${routeEmail}/ai-roadmap`)
          }

          className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-2xl transition"
        >
          Generate Roadmap
        </button>
      </div>
    </div>
  );
};

export default CareerGuidance;
