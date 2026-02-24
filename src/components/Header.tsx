import { NavLink } from "react-router-dom";
import { activeStyle, linkStyle } from "../common/utils";
import logo from "../assets/images/Buildify-logo1.png";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-blue-600 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* LEFT SIDE (Logo + Desktop Menu) */}
        <div className="flex items-center gap-10">
          <img
            src={logo}
            alt="Buildify Logo"
            className="h-14 md:h-16 w-auto object-contain"
          />

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Contact Us
            </NavLink>
          </nav>
        </div>

        {/* HAMBURGER RIGHT SIDE */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-blue-700 pb-4">
          <nav className="flex flex-col items-center gap-4 text-white font-medium">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
