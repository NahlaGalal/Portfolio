import React, { useState } from "react";

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
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
