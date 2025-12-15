import logo from "../assets/logo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <a href="#">
          <img
            src={logo}
            alt="Fluxo Logo"
            className="w-7 h-7"
          />
          </a>
          
          <span className="text-2xl font-bold text-blue-900">
            <a href="#">
            Fluxo
            </a>
          </span>
        </div>

        <nav className="hidden md:flex gap-10 font-inter text-sm items-center text-gray-600">
          <a href="#services" className="hover:text-blue-900 font-semibold transition">
            Services
          </a>
          <a href="#process" className="hover:text-blue-900 font-semibold transition">
            Process
          </a>
          <a href="#contact" className="hover:text-blue-900 font-semibold transition">
            Contact
          </a>
          {/* Onboarding Button */}
          <a
            href="/onboarding"
            className="ml-4 bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-900 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4">
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-gray-900"
          >
            Services
          </a>
          <a
            href="#process"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-gray-900"
          >
            Process
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-gray-900"
          >
            Contact
          </a>

          {/* Mobile Onboarding Button */}
          <a
            href="/onboarding"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Get Started
          </a>

      </div>
      )}
    </header>
  );
};

export default Navbar;
