import React from "react";
import { ISkills } from "./Types";

const Skills: React.FC<ISkills> = ({ skills, text, code, link }) => {
  return (
    <div>
      <h2 className="ml-12 heading text-3xl after:-right-10 before:-left-10">
        Skills
      </h2>
      <span className="ml-[46px] heading-border"></span>
      <ul className="[ flex flex-wrap justify-center gap-6 ] [ mt-4 mb-6 ]">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="last-of-type:mr-0 w-20 h-20 bg-darkGreen dark:bg-lightGreen"
            style={{
              mask: `url(/${skill.image}) no-repeat center / contain`,
              WebkitMask: `url(/${skill.image}) no-repeat center / contain`,
            }}
            title={skill.name}
          />
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
