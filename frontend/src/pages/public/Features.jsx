export default function FeaturesPage() {
  const features = [
    {
      icon: "🧠",
      title: "AI Roadmap Generation",
      description:
        "Generate personalized learning paths based on your career goals, skill level, and available learning time.",
    },
    {
      icon: "🎯",
      title: "Career Guidance",
      description:
        "Receive AI-powered suggestions for career paths, technologies, and industry-relevant skills.",
    },
    {
      icon: "📚",
      title: "Smart Resource Recommendations",
      description:
        "Discover curated courses, YouTube videos, documentation, and practice resources tailored to your roadmap.",
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      description:
        "Track completed topics, milestones, and learning streaks to stay consistent and motivated.",
    },
    {
      icon: "💬",
      title: "AI Learning Chat",
      description:
        "Ask learning-related questions and get instant AI guidance like having a personal mentor available 24/7.",
    },
    {
      icon: "⚡",
      title: "Skill Gap Analysis",
      description:
        "Identify missing skills required for your dream career and receive recommendations to improve.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <span className="bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm tracking-wide">
          Powerful AI Features
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold mt-8 leading-tight">
          Features of <span className="text-blue-400">LearnAI</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg mt-8 leading-relaxed">
          LearnAI combines artificial intelligence, personalized learning,
          and progress tracking to help students and learners achieve their
          goals faster and smarter.
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/10"
            >
              <div className="text-5xl mb-6">
                {feature.icon}
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {feature.title}
              </h2>

              <p className="text-gray-400 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Why Choose LearnAI?
          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Most learners struggle because they don't know what to learn next.
            LearnAI removes confusion by creating structured and adaptive
            learning journeys.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-3xl">🚀</div>

              <div>
                <h3 className="text-xl font-semibold">
                  Faster Skill Growth
                </h3>

                <p className="text-gray-400 mt-2">
                  Learn important skills in the correct order without wasting time.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-3xl">🧩</div>

              <div>
                <h3 className="text-xl font-semibold">
                  Personalized Experience
                </h3>

                <p className="text-gray-400 mt-2">
                  AI adapts roadmaps and recommendations to your learning level.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-3xl">📊</div>

              <div>
                <h3 className="text-xl font-semibold">
                  Progress Visibility
                </h3>

                <p className="text-gray-400 mt-2">
                  Stay motivated with clear progress tracking and milestone achievements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">
              Learn Smarter with AI
            </h2>

            <div className="space-y-6">
              <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
                <h3 className="font-semibold text-xl">
                  AI-Powered Suggestions
                </h3>

                <p className="text-gray-400 mt-2 leading-relaxed">
                  Get intelligent recommendations based on your goals and interests.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
                <h3 className="font-semibold text-xl">
                  Structured Learning Paths
                </h3>

                <p className="text-gray-400 mt-2 leading-relaxed">
                  Follow a roadmap designed to maximize efficiency and clarity.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
                <h3 className="font-semibold text-xl">
                  Continuous Guidance
                </h3>

                <p className="text-gray-400 mt-2 leading-relaxed">
                  AI mentor support available anytime during your learning journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-xl shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Start Your Learning Journey Today 🚀
          </h2>

          <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            Build skills faster, stay focused, and achieve your career goals
            with AI-powered learning guidance.
          </p>

          <button className="mt-10 bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-500/20">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
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
