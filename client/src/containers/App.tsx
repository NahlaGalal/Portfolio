import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import AddSkill from "./AddSkill";
// import AddExperience from "./AddExperience";
// import AddProject from "./AddProject";
import Home from "./Home";
import Project from "./Project";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />

        {/* Routes for adding data */}
        {/* <Route path="/add-project" element={<AddProject />} /> */}
        {/* <Route path="/add-experience" element={<AddExperience />} /> */}
        {/* <Route path="/add-skill" element={<AddSkill />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
