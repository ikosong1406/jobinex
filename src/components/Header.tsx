import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo1.png";

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (path: string) =>
    `px-4 py-2 font-medium transition-colors ${
      pathname === path
        ? "text-[var(--color-primary)]"
        : "text-white hover:text-[var(--color-accent)]"
    }`;

  return (
    <nav className="w-full bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left - Logo */}
        <Link to="/">
          <img src={logo} alt="" className="w-[90px]" />
        </Link>

        {/* Center - Desktop Nav Links */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <a href="#pricing" className={linkClass("/features")}>
            Pricing
          </a>
        </div>

        {/* Right - Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.jobbinex.com/"
            className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Login
          </a>
          <a
            href="https://app.jobbinex.com/signup"
            className="px-4 py-2 bg-[var(--color-primary)] text-black font-semibold rounded-lg transition"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:text-[var(--color-accent)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700 animate-slide-down">
          <div className="flex flex-col gap-2 px-4 py-3">
            <Link
              to="/"
              className={linkClass("/")}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={linkClass("/about")}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="#pricing"
              className={linkClass("/features")}
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </a>

            <div className="border-t border-gray-700 mt-3 pt-3 flex flex-col gap-2">
              <a
                href="https://app.jobbinex.com/login"
                className="text-white border border-white rounded-md text-center py-2 hover:bg-white hover:text-black transition"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </a>
              <a
                href="https://app.jobbinex.com/signup"
                className="bg-[var(--color-primary)] text-black font-semibold rounded-md text-center py-2 hover:bg-[var(--color-accent)] transition"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
