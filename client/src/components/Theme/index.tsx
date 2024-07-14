import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ITheme } from "./Types";

const SwitchTheme: React.FC<ITheme> = ({ theme, setTheme }) => {
  const Icon = theme === "light" ? FaMoon : FaSun;

  return (
    <button
      className="[ fixed top-10 right-0 ] [ bg-darkGreen ] p-4 rounded-l-md z-50"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      title={`Change theme to ${theme === "light" ? "dark" : "light"}`}
      type="button"
    >
      <Icon size={24} color="#EEE" />
    </button>
  );
};

export default SwitchTheme;
