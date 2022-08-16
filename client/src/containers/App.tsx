import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AddProject from "./AddProject";
import Home from "./Home";
import Project from "./Project";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />

        {/* Routes for adding data */}
        <Route path="/add-project" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
