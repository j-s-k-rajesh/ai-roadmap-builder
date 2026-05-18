
import { useNavigate, useParams } from "react-router-dom";
import { encodeRouteParam } from "../../lib/api";

const Dashboard = () => {

  const navigate = useNavigate();

  const { gmail } = useParams();
  const routeEmail = encodeRouteParam(gmail);


  // =========================================
  // FEATURE CARDS
  // =========================================

  const features = [

    {
      title: "AI Roadmap Generator",

      description:
        "Generate personalized AI-powered learning roadmaps for any career or skill.",

      icon: "🧠",

      color:
        "from-blue-500/20 to-cyan-500/20 border-blue-500/20",

      button: "Generate Roadmap",

      path: `/student/${routeEmail}/ai-roadmap`
    },


    {
      title: "My Learning",

      description:
        "Access your saved learning roadmaps, resources, projects, and progress.",

      icon: "📚",

      color:
        "from-purple-500/20 to-pink-500/20 border-purple-500/20",

      button: "Open Learning",

      path: `/student/${routeEmail}/my-learning`
    },


    {
      title: "Progress Tracker",

      description:
        "Track your completed steps, learning streaks, and roadmap progress.",

      icon: "📈",

      color:
        "from-green-500/20 to-emerald-500/20 border-green-500/20",

      button: "Track Progress",

      path: `/student/${routeEmail}/progress`
    },


    {
      title: "Profile",

      description:
        "Manage your profile, learning preferences, and account information.",

      icon: "👤",

      color:
        "from-orange-500/20 to-yellow-500/20 border-orange-500/20",

      button: "View Profile",

      path: `/student/${routeEmail}/profile`
    },


    {
      title: "Career Guidance",

      description:
        "Explore career paths, salary insights, and industry guidance.",

      icon: "🚀",

      color:
        "from-red-500/20 to-pink-500/20 border-red-500/20",

      button: "Explore Careers",

      path: `/student/${routeEmail}/career-guidance`
    },


    {
      title: "AI Learning Chat",

      description:
        "Chat with AI to clarify doubts, get explanations, and learn faster.",

      icon: "💬",

      color:
        "from-indigo-500/20 to-violet-500/20 border-indigo-500/20",

      button: "Start Chat",

      path: `/student/${routeEmail}/learning-chat`
    }
  ];


  return (

    <div className="text-white">

      {/* ========================================= */}
      {/* HERO SECTION */}
      {/* ========================================= */}

      <div className="mb-12">

        <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-4xl p-10 backdrop-blur-xl overflow-hidden relative">

          {/* Glow Effects */}

          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>


          <div className="relative z-10">

            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Welcome to <span className="text-blue-400">LearnAI</span> 🚀
            </h1>


            <p className="text-gray-300 text-xl leading-relaxed max-w-4xl">
              Your personalized AI-powered learning assistant to help you learn,
              build projects, track progress, and become job-ready faster.
            </p>


            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={() =>
                  navigate(`/student/${routeEmail}/ai-roadmap`)
                }
                className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Start Learning
              </button>


              <button
                onClick={() =>
                  navigate(`/student/${routeEmail}/my-learning`)
                }
                className="bg-white/10 hover:bg-white/20 border border-white/10 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
              >
                My Learning
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* ========================================= */}
      {/* PLATFORM GUIDE */}
      {/* ========================================= */}

      <div className="mb-12">

        <h2 className="text-4xl font-bold mb-8">
          Platform Guide ✨
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}

              className={`
                bg-linear-to-br
                ${feature.color}
                border
                rounded-4xl
                p-8
                backdrop-blur-xl
                hover:scale-[1.03]
                hover:border-white/20
                transition-all
                duration-300
                shadow-2xl
              `}
            >

              {/* Icon */}

              <div className="text-6xl mb-6">
                {feature.icon}
              </div>


              {/* Title */}

              <h3 className="text-3xl font-bold mb-4">
                {feature.title}
              </h3>


              {/* Description */}

              <p className="text-gray-300 leading-relaxed mb-8 min-h-25">
                {feature.description}
              </p>


              {/* Button */}

              <button
                onClick={() => navigate(feature.path)}

                className="
                  w-full
                  bg-white/10
                  hover:bg-white/20
                  border border-white/10
                  py-4
                  rounded-2xl
                  font-semibold
                  transition-all duration-300
                "
              >
                {feature.button}
              </button>
            </div>
          ))}
        </div>
      </div>


      {/* ========================================= */}
      {/* HOW IT WORKS */}
      {/* ========================================= */}

      <div className="mb-12">

        <h2 className="text-4xl font-bold mb-8">
          How LearnAI Works ⚡
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <div className="text-5xl mb-4">🎯</div>

            <h3 className="text-2xl font-bold mb-3">
              1. Set Goal
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Enter your learning goal like Full Stack Developer or AI Engineer.
            </p>
          </div>


          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <div className="text-5xl mb-4">🧠</div>

            <h3 className="text-2xl font-bold mb-3">
              2. Generate AI Roadmap
            </h3>

            <p className="text-gray-400 leading-relaxed">
              AI creates a detailed roadmap with resources and projects.
            </p>
          </div>


          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <div className="text-5xl mb-4">📚</div>

            <h3 className="text-2xl font-bold mb-3">
              3. Learn Daily
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Follow roadmap steps, complete projects, and explore resources.
            </p>
          </div>


          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <div className="text-5xl mb-4">🚀</div>

            <h3 className="text-2xl font-bold mb-3">
              4. Become Job Ready
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Build portfolio projects and prepare for interviews confidently.
            </p>
          </div>
        </div>
      </div>


      {/* ========================================= */}
      {/* QUICK TIPS */}
      {/* ========================================= */}

      <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-4xl p-10">

        <h2 className="text-4xl font-bold mb-8">
          Quick Success Tips 💡
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-black/20 border border-white/10 rounded-3xl p-6">
            <h3 className="text-2xl font-semibold mb-3">
              Build Projects
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Learning becomes faster when you build real-world applications.
            </p>
          </div>


          <div className="bg-black/20 border border-white/10 rounded-3xl p-6">
            <h3 className="text-2xl font-semibold mb-3">
              Stay Consistent
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Even 1-2 hours daily can create huge improvements over time.
            </p>
          </div>


          <div className="bg-black/20 border border-white/10 rounded-3xl p-6">
            <h3 className="text-2xl font-semibold mb-3">
              Practice Daily
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Hands-on coding and project work are more important than tutorials.
            </p>
          </div>


          <div className="bg-black/20 border border-white/10 rounded-3xl p-6">
            <h3 className="text-2xl font-semibold mb-3">
              Follow Your Roadmap
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Focus on one roadmap at a time to avoid confusion and burnout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

