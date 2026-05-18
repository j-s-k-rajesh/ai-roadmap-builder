import { Outlet, NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import { encodeRouteParam } from "../lib/api";
import BrandLogo from "../components/BrandLogo";

const StudentLayout = () => {
  const { gmail } = useParams();
  const routeEmail = encodeRouteParam(gmail);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 font-medium
    ${isActive
      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
      : "text-gray-400 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <div className="flex min-h-screen bg-black text-white overflow-hidden">

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:relative z-50 h-screen
          bg-linear-to-b from-[#0B0B0F] to-[#111827]
          border-r border-white/10
          transition-all duration-300 ease-in-out
          backdrop-blur-2xl
          ${sidebarOpen ? "w-72" : "w-20"}
        `}
      >

        {/* Top Logo + Toggle */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">

          <BrandLogo compact={!sidebarOpen} subtitle={sidebarOpen} />

          {/* Hamburger Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
          >

            <div className="space-y-1">

              <div className="w-5 h-0.5 bg-white rounded"></div>
              <div className="w-5 h-0.5 bg-white rounded"></div>
              <div className="w-5 h-0.5 bg-white rounded"></div>

            </div>

          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3 p-4 mt-4">

          <NavLink
            to={`/student/${routeEmail}/dashboard`}
            className={navLinkStyles}
          >
            <span className="text-xl">📊</span>

            {sidebarOpen && <span>Dashboard</span>}
          </NavLink>

          <NavLink
            to={`/student/${routeEmail}/ai-roadmap`}
            className={navLinkStyles}
          >
            <span className="text-xl">🧠</span>

            {sidebarOpen && <span>AI Roadmap</span>}
          </NavLink>

          <NavLink
            to={`/student/${routeEmail}/my-learning`}
            className={navLinkStyles}
          >
            <span className="text-xl">📚</span>

            {sidebarOpen && <span>My Learning</span>}
          </NavLink>

          <NavLink
            to={`/student/${routeEmail}/progress`}
            className={navLinkStyles}
          >
            <span className="text-xl">📈</span>

            {sidebarOpen && <span>Progress</span>}
          </NavLink>

          <NavLink
            to={`/student/${routeEmail}/profile`}
            className={navLinkStyles}
          >
            <span className="text-xl">U</span>

            {sidebarOpen && <span>Profile</span>}
          </NavLink>


          <NavLink
            to={`/student/${routeEmail}/career-guidance`}
            className={navLinkStyles}
          >
            <span className="text-xl">🚀</span>

            {sidebarOpen && <span>Career Guidance</span>}
          </NavLink>

          <NavLink
            to={`/student/${routeEmail}/learning-chat`}
            className={navLinkStyles}
          >
            <span className="text-xl">💬</span>

            {sidebarOpen && <span>Learning Chat</span>}
          </NavLink>

        </nav>

        {/* Bottom Card */}
        {/* {sidebarOpen && (
          <div className="absolute bottom-5 left-4 right-4">

            <div className="bg-linear-to-r from-blue-500/20 to-purple-500/20 border border-white/10 p-5 rounded-3xl backdrop-blur-xl">

              <h2 className="font-semibold text-lg">
                Keep Learning 🚀
              </h2>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Complete your roadmap and level up your skills daily.
              </p>

              <div className="mt-4 flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

                <p className="text-sm text-gray-300">
                  Free access for all early users
                </p>

              </div>

            </div>
          </div>
        )} */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 transition-all duration-300">

        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-black/70 backdrop-blur-xl border-b border-white/10 px-8 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="text-gray-400 mt-1">
              Continue your AI-powered learning journey
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 rounded-2xl transition">
              🔔
            </button>

            <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">

              <p className="text-sm text-gray-300">
                🚀 Early Access User
              </p>

            </div>

          </div>
        </header>

        {/* Content */}
        <div className="p-8">

          <div className="bg-[#111827]/70 border border-white/10 rounded-4xl min-h-[85vh] p-8 backdrop-blur-2xl shadow-2xl">

            <Outlet />

          </div>

        </div>
      </main>
    </div>
  );
};

export default StudentLayout;
