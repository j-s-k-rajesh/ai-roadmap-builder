import { NavLink } from "react-router-dom";

export default function HomePage() {
  // eslint-disable-next-line no-unused-vars
  const features = [
    {
      icon: "🧠",
      title: "AI Learning Paths",
      description:
        "Generate personalized roadmaps based on your goals and skill level.",
    },
    {
      icon: "📚",
      title: "Smart Resources",
      description:
        "Get curated videos, docs, and courses recommended by AI.",
    },
    {
      icon: "📈",
      title: "Track Progress",
      description:
        "Monitor completed topics and stay consistent with learning.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-950 to-gray-900 text-white overflow-hidden">

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-44 pb-32 text-center">

        <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 px-5 py-2 rounded-full backdrop-blur-xl">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

          <span className="text-sm text-gray-300 tracking-wide">
            Personalized AI Learning Experience
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mt-10 max-w-5xl mx-auto">
          Stop Guessing

          <span className="block mt-4 bg-linear-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Start Learning Smarter
          </span>
        </h1>

        <p className="text-gray-400 text-xl leading-relaxed mt-10 max-w-3xl mx-auto">
          LearnAI creates personalized roadmaps, AI-powered guidance,
          and curated learning resources to help students and developers
          achieve their goals faster.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-14">

          <NavLink
            to="/register"
            className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-10 py-5 rounded-2xl text-lg font-semibold shadow-2xl shadow-blue-500/20 hover:scale-105"
          >
            Start Your Journey
          </NavLink>

          <NavLink
            to="/features"
            className="bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 px-10 py-5 rounded-2xl text-lg font-semibold"
          >
            Explore Platform
          </NavLink>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition duration-300">
            <h2 className="text-5xl font-bold text-blue-400">10K+</h2>
            <p className="text-gray-400 mt-4 text-lg">AI Roadmaps Generated</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition duration-300">
            <h2 className="text-5xl font-bold text-green-400">24/7</h2>
            <p className="text-gray-400 mt-4 text-lg">Learning Mentor Support</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition duration-300">
            <h2 className="text-5xl font-bold text-purple-400">100+</h2>
            <p className="text-gray-400 mt-4 text-lg">Career Learning Paths</p>
          </div>

        </div>
      </section>

      {/* Showcase Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">

        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Your AI Powered
            <span className="block text-blue-400 mt-3">
              Learning Companion
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-2xl">
            LearnAI guides learners step-by-step with intelligent recommendations,
            adaptive learning paths, and progress tracking.
          </p>

          <div className="space-y-6 mt-12">

            <div className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <div className="text-4xl">🧠</div>

              <div>
                <h3 className="text-2xl font-semibold">AI Generated Roadmaps</h3>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  Get structured learning paths tailored to your goals.
                </p>
              </div>
            </div>

            <div className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <div className="text-4xl">📚</div>

              <div>
                <h3 className="text-2xl font-semibold">Curated Resources</h3>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  Discover videos, courses, and docs recommended by AI.
                </p>
              </div>
            </div>

            <div className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <div className="text-4xl">📈</div>

              <div>
                <h3 className="text-2xl font-semibold">Track Your Progress</h3>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  Stay consistent by tracking completed milestones.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

          <div className="relative bg-white/5 border border-white/10 rounded-4xl p-8 backdrop-blur-2xl shadow-2xl">

            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold">Full Stack Developer</h3>
                <p className="text-gray-400 mt-2">Personalized Learning Roadmap</p>
              </div>

              <span className="text-5xl">🚀</span>
            </div>

            <div className="space-y-6">

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">HTML & CSS</span>
                  <span className="text-green-400">Completed</span>
                </div>

                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div className="bg-green-400 h-full w-full rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">JavaScript</span>
                  <span className="text-blue-400">In Progress</span>
                </div>

                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div className="bg-blue-400 h-full w-2/3 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">React</span>
                  <span className="text-purple-400">Upcoming</span>
                </div>

                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div className="bg-purple-400 h-full w-1/4 rounded-full"></div>
                </div>
              </div>

            </div>

            <div className="mt-10 bg-linear-to-r from-blue-500/20 to-purple-500/20 border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold">AI Recommendation</h3>

              <p className="text-gray-300 mt-3 leading-relaxed">
                Focus on JavaScript fundamentals before moving into React projects.
              </p>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
}
