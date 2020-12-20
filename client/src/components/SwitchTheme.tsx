import React, { useState, useEffect } from "react";

const SwitchTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.style.setProperty("--main-color", "#9DBCBC");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#006666"
      );
      document.documentElement.style.setProperty("--text-color", "#B7B7B7");
      document.documentElement.style.setProperty("--back-color", "#6B6B6B");
    } else {
      document.documentElement.style.setProperty("--main-color", "#006666");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#9DBCBC"
      );
      document.documentElement.style.setProperty("--text-color", "#6B6B6B");
      document.documentElement.style.setProperty("--back-color", "#B7B7B7");
    }
  }, [theme]);

  return (
    <div className="Theme">
      <span className={`Theme__current ${theme}`}>{theme}</span>
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
