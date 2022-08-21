import React from "react";
import { Link } from "react-router-dom";
import { IProjectBox } from "./Types";

const ProjectBox: React.FC<IProjectBox> = ({ project }) => {
  return (
    <figure className="my-6 w-full">
      <div
        className="h-[389px] overflow-hidden group"
        style={{ backgroundColor: project.backcolor }}
      >
        <img
          src={`${window.location.origin}/${project.main_image}`}
          alt={`${project.name} page screenshot`}
          className="w-full object-cover transition-all duration-[1.5s] group-hover:translate-y-[calc(-100%+389px)]"
        />
      </div>
      <figcaption
        className="
            [ text-2xl font-bold text-center ]
            [ -mt-9 mx-[10%] ]
            h-20  rounded-3xl custom-box-shadow relative
            [ bg-lightGrey dark:bg-darkGrey ]"
      >
        <Link
          to={`/project/${project._id}`}
          className="text-darkGreen dark:text-lightGreen w-full h-full flex justify-center items-center"
        >
          {project.name}
        </Link>
      </figcaption>
    </figure>
  );
};

export default ProjectBox;
