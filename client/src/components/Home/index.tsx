import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiCloudDownload } from "react-icons/hi";
import {FaHackerrank} from "react-icons/fa"
import { Link } from "react-router-dom";
import profile from "../../images/profile.jpg";

const HomeSection = () => {
  return (
    <section className="flex flex-col justify-center items-center h-full">
      {/* Avatar */}
      <div className="[ border-4 border-darkGrey dark:border-lightGrey ] [ w-max ] rounded-full mb-4">
        <img
          src={profile}
          alt="Nahla personal avatar"
          className="[ h-32 w-32 sm:w-64 sm:h-64 ] object-cover rounded-full"
          loading="lazy"
        />
      </div>

      <h1 className="text-center text-4xl sm:text-6xl font-bold [ text-darkGreen dark:text-lightGreen ]  mb-3">
        Nahla Galal
      </h1>
      <p className="text-center text-lg sm:text-2xl [ text-darkGrey dark:text-lightGrey ]">
        Front-end developer
      </p>

      {/* Social icons */}
      <div className="flex gap-4 mt-5">
        <a
          href={"https://www.linkedin.com/in/nahla-galal/"}
          title={"Linkedin profile"}
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillLinkedin
            size={32}
            className="text-darkGreen dark:text-lightGreen"
          />
        </a>
        <a
          href={"https://github.com/NahlaGalal"}
          title={"Github profile"}
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillGithub
            size={32}
            className="text-darkGreen dark:text-lightGreen"
          />
        </a>
        <a
          href={"https://www.hackerrank.com/nahlaglal?hr_r=1"}
          title={"Hacker rank profile profile"}
          target={"_blank"}
          rel="noreferrer"
        >
          <FaHackerrank
            size={32}
            className="text-darkGreen dark:text-lightGreen"
          />
        </a>
      </div>

      {/* Download CV */}
      <Link
        to="Nahla_Resume.pdf"
        target="_blank"
        download
        className="
            btn font-medium w-max 
            [ flex items-center gap-2 ] 
            [ px-4 mt-8 ] 
            [ bg-darkGreen dark:bg-lightGreen ]"
      >
        <HiCloudDownload
          size={24}
          className="text-lightGrey dark:text-darkGrey"
        />
        Download CV
      </Link>
    </section>
  );
};

export default HomeSection;
