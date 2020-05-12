import React, { useState } from "react";
import {NavLink} from "react-router-dom"

const Navbar = () => {
  const [navigationMenu, setNavigationMenu] = useState(false);

  const toggleNavigationMenu = () => setNavigationMenu(!navigationMenu);

  return (
    <nav className="Navbar">
      <a href="/" className="Navbar__logo">
        Nahla Galal
      </a>
      <button
        className={`Navbar__hamburger${navigationMenu ? " active" : ""}`}
        onClick={toggleNavigationMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`Navbar__links${navigationMenu ? " active" : ""}`}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/#projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/#contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
