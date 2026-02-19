import { NavLink } from "react-router-dom";
import { activeStyle, linkStyle } from "../common/utils";
import logo from "../assets/images/Buildify-logo1.png";

const Header = () => {
  return (
    <header className="bg-blue-600 px-8  relative">

      <div className="flex items-center">
        <img
          src={logo}
          alt="Buildify Logo"
          className="h-20 w-auto object-contain"
        />
      </div>

      <nav className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center space-x-10">
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

    </header>
  );
};

export default Header;