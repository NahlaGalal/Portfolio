import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SwitchTheme from "../components/Theme";
// import AddSkill from "./AddSkill";
// import AddExperience from "./AddExperience";
// import AddProject from "./AddProject";
import Home from "./Home";
import Project from "./Project";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <BrowserRouter basename="/">
      <SwitchTheme setTheme={setTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />

        {/* Routes for adding data  */}
        {/* <Route path="/add-project" element={<AddProject />} /> */}
        {/* <Route path="/add-experience" element={<AddExperience />} /> */}
        {/* <Route path="/add-skill" element={<AddSkill />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
