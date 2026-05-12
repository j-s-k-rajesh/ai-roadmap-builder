export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="bg-white/10 text-sm px-4 py-2 rounded-full border border-white/10">
            AI Powered Learning Guidance Platform
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-6">
            About <span className="text-blue-400">LearnAI</span>
          </h1>

          <p className="text-gray-300 text-lg mt-8 leading-relaxed">
            LearnAI helps students and learners discover personalized learning
            paths using artificial intelligence. Instead of wasting time
            figuring out what to learn next, users receive structured roadmaps,
            career guidance, and smart recommendations tailored to their goals.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-blue-500/20">
              Start Learning
            </button>

            <button className="border border-gray-700 hover:border-gray-500 transition px-6 py-3 rounded-2xl font-semibold">
              Explore Features
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black/40 p-6 rounded-2xl border border-white/10">
                <h2 className="text-4xl font-bold text-blue-400">AI</h2>
                <p className="text-gray-400 mt-2">Smart Learning Guidance</p>
              </div>

              <div className="bg-black/40 p-6 rounded-2xl border border-white/10">
                <h2 className="text-4xl font-bold text-green-400">24/7</h2>
                <p className="text-gray-400 mt-2">Always Available Mentor</p>
              </div>

              <div className="bg-black/40 p-6 rounded-2xl border border-white/10 col-span-2">
                <h2 className="text-3xl font-bold text-purple-400">
                  Personalized Roadmaps
                </h2>
                <p className="text-gray-400 mt-3 leading-relaxed">
                  Get customized learning plans based on your goals, skill level,
                  and interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-lg">
            We believe learning should be guided, personalized, and accessible
            for everyone. LearnAI helps users stay focused with AI-driven
            learning paths and progress tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-semibold">Goal Focused</h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Learn only what matters for your career goals and avoid
              unnecessary confusion.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-semibold">AI Driven</h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Artificial intelligence generates structured and adaptive learning
              roadmaps.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-2xl font-semibold">Track Progress</h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Stay motivated by monitoring achievements and learning progress.
            </p>
          </div>
        </div>
      </section>

      {/* Team / Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Building the Future of Personalized Learning
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            LearnAI is designed to act like an intelligent mentor that guides
            learners step-by-step. From beginners to advanced learners, the
            platform adapts to different skill levels and learning goals.
          </p>

          <p className="text-gray-400 mt-4 text-lg leading-relaxed">
            Our vision is to remove confusion from learning journeys and help
            students build careers with confidence.
          </p>
        </div>

        <div className="bg-linear-to-br from-blue-500/20 to-purple-500/20 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-2xl">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-gray-300">Roadmaps Generated</span>
              <span className="font-bold text-2xl">10K+</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-gray-300">Learning Resources</span>
              <span className="font-bold text-2xl">5K+</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-gray-300">AI Recommendations</span>
              <span className="font-bold text-2xl">Smart & Adaptive</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-300">Focus</span>
              <span className="font-bold text-2xl">Career Growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-blue-400">
            LearnAI
          </h2>

          <p className="text-gray-500 text-sm">
            © 2026 LearnAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
