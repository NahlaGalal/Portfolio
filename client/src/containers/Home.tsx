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

  const getCurrentSection = () => {
    switch (section) {
      case "Home":
        return <HomeSection />;
      case "About":
        return <About />;
      case "Resume":
        return <Resume />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <Sidebar onClick={onChangeSecHandler} />
      <main className="[ px-[5%] sm:px-[10%] my-10 ] [ min-h-[calc(100vh-80px)] w-full ]">
        {getCurrentSection()}
      </main>
    </>
  );
};

export default Home;
