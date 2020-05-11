import React, { useState, useEffect } from "react";

const SwitchTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if(theme === "light") {
      document.documentElement.style.setProperty("--main-color", "#4e3c51");
      document.documentElement.style.setProperty("--secondary-color", "#8D818F");
      document.documentElement.style.setProperty("--text-color", "#292B2C");
      document.documentElement.style.setProperty("--back-color", "#E3E3E3");
    }else {
      document.documentElement.style.setProperty("--main-color", "#8D818F");
      document.documentElement.style.setProperty("--secondary-color", "#4e3c51");
      document.documentElement.style.setProperty("--text-color", "#E3E3E3");
      document.documentElement.style.setProperty("--back-color", "#292B2C");
    }
  }, [theme])

  return (
    <div className="Theme">
      <span className={`Theme__current ${theme}`}>
        {theme}
      </span>
      <button onClick={() => setTheme("light")} className={`Theme__${theme}`}>
        <span>Light</span>
      </button>
      <button onClick={() => setTheme("dark")} className={`Theme__${theme}`}>
        <span>Dark</span>
      </button>
    </div>
  );
};

export default SwitchTheme;
