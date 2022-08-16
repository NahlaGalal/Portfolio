import React from "react";
import { ISkills } from "./Types";

const Skills: React.FC<ISkills> = ({ skills, text, code, link }) => {
  return (
    <div>
      <h2 className="ml-12 heading">Skills</h2>
      <span className="ml-[46px] heading-border"></span>
      <ul className="[ flex flex-wrap justify-center ] [ mt-4 mb-6 ]">
        {skills.map((skill) => (
          <li key={skill.name} className="mr-6 last-of-type:mr-0">
            <img
              src={`http://localhost:5000/${skill.image}`}
              alt={skill.name}
              title={skill.name}
              className="w-20 h-20"
            />
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap">
        {link && (
          <a
            href={link}
            className="
              btn w-40
              [ my-6 mx-auto ]
              [ flex justify-center items-center ]"
            target="_blank"
            rel="noreferrer"
          >
            {text}
            <span>GO!</span>
          </a>
        )}
        {code && (
          <a
            href={code}
            className="
              btn w-40
              [ my-6 mx-auto ]
              [ flex justify-center items-center ]"
            target="_blank"
            rel="noreferrer"
          >
            View code<span>GO!</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Skills;
