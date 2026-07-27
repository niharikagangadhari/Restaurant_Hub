import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          RestaurantHub
        </h1>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-gray-300">

          <a href="#" className="hover:text-green-400 duration-300">
            Home
          </a>

          <a href="#about" className="hover:text-green-400 duration-300">
            About
          </a>

          <Link
            to="/dashboard"
            className="hover:text-green-400 duration-300"
          >
            Dashboard
          </Link>

          <a href="#faq" className="hover:text-green-400 duration-300">
            FAQ
          </a>

          <a href="#contact" className="hover:text-green-400 duration-300">
            Contact
          </a>
        </div>

        {/* Right Side */}
        <div className="flex gap-3 items-center">

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" size={20} />
            ) : (
              <Moon className="text-white" size={20} />
            )}
          </button>

          <Link to="/login">
            <button className="text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-green-500 hover:bg-green-600 transition px-5 py-2 rounded-xl font-semibold">
              Sign Up
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
}