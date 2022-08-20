import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsCloudDownload } from "react-icons/bs";
import {FaHackerrank} from "react-icons/fa"
import { Link } from "react-router-dom";
import profile from "../../images/profile.jpg";

const HomeSection = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      {/* Avatar */}
      <div className="[ border-4 border-lightGreen ] [ w-max ] rounded-full mb-4">
        <img
          src={profile}
          alt="Nahla personal avatar"
          className="[ h-32 w-32 sm:w-full sm:h-[400px] lg:w-64 lg:h-64 ] object-cover rounded-full"
        />
      </div>

      <h1 className="text-6xl font-bold text-darkGreen mb-3">Nahla Galal</h1>
      <p className="text-2xl text-darkGrey">Front-end developer</p>

      {/* Social icons */}
      <div className="flex gap-4 mt-5">
        <a
          href={"https://www.linkedin.com/in/nahla-galal/"}
          title={"Linkedin profile"}
          className="rounded-md bg-darkGreen h-8 w-8 [ flex justify-center items-center ]"
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillLinkedin size={20} color="#EEEEEE" />
        </a>
        <a
          href={"https://github.com/NahlaGalal"}
          title={"Github profile"}
          className="rounded-md bg-darkGreen h-8 w-8 [ flex justify-center items-center ]"
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillGithub size={20} color="#EEEEEE" />
        </a>
        <a
          href={"https://www.hackerrank.com/nahlaglal?hr_r=1"}
          title={"Hacker rank profile profile"}
          className="rounded-md bg-darkGreen h-8 w-8 [ flex justify-center items-center ]"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaHackerrank size={20} color="#EEEEEE" />
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
        <BsCloudDownload size={24} color="#EEEEEE" />
        Download CV
      </Link>
    </section>
  );
};

export default HomeSection;
