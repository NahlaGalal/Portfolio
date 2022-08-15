import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
