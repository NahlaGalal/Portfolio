import React, { useState } from "react";
import About from "../components/About";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [section, setSection] = useState<string>("Home");

  const onChangeSecHandler = (sec: string) => setSection(sec);

  const getCurrentSection = () => {
    switch (section) {
      case "Home":
        return <About />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <Sidebar onClick={onChangeSecHandler} />
      <main
        className="[ px-[5%] sm:px-[10%] my-10 ] [ min-h-[calc(100vh-80px)] ]"
      >
        {getCurrentSection()}
      </main>
    </>
  );
};

export default Home;
