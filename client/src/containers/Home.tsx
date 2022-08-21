import React, { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import HomeSection from "../components/Home";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [section, setSection] = useState<string>("Home");

  const onChangeSecHandler = (sec: string) => setSection(sec);

  return (
    <>
      <Sidebar onClick={onChangeSecHandler} />
      <main className="[ px-[5%] sm:px-[10%] my-10 ] [ min-h-[calc(100vh-80px)] w-full ] flex">
        <div
          className={
            section === "Home"
              ? "w-full transition-all duration-300"
              : "transition-all duration-300 w-0 h-0 overflow-hidden"
          }
        >
          <HomeSection />
        </div>
        <div
          className={
            section === "About"
              ? "w-full transition-all duration-300"
              : "transition-all duration-300 w-0 h-0 overflow-hidden"
          }
        >
          <About />
        </div>
        <div
          className={
            section === "Resume"
              ? "w-full transition-all duration-300"
              : "transition-all duration-300 w-0 h-0 overflow-hidden"
          }
        >
          <Resume />
        </div>
        <div
          className={
            section === "Projects"
              ? "w-full transition-all duration-300"
              : "transition-all duration-300 w-0 h-0 overflow-hidden"
          }
        >
          <Projects />
        </div>
        <div
          className={
            section === "Contact"
              ? "w-full transition-all duration-300"
              : "transition-all duration-300 w-0 h-0 overflow-hidden"
          }
        >
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Home;
