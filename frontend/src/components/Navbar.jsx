import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navStyles = ({ isActive }) =>
    `transition duration-300 font-medium px-4 py-2 rounded-xl ${
      isActive
        ? "bg-white text-black"
        : "text-gray-300 hover:text-white hover:bg-white/10"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-extrabold tracking-wide text-white"
        >
          Learn<span className="text-blue-400">AI</span>
        </NavLink>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-2 rounded-2xl">
          <NavLink to="/" className={navStyles}>
            Home
          </NavLink>

          <NavLink to="/about" className={navStyles}>
            About
          </NavLink>

          <NavLink to="/features" className={navStyles}>
            Features
          </NavLink>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/login"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2.5 rounded-2xl text-white font-semibold shadow-lg shadow-blue-500/20"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
