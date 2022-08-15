import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProject } from "./Types";

const Projects = () => {
  const [page, setPage] = useState<number>(1);
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    axios.get("api").then((res) => setProjects(res.data));
  }, []);

  const generatePages = () => {
    let pagesListItems = [];
    for (let i = 1; i <= Math.ceil(projects.length / 3); i++) {
      pagesListItems.push(
        <li
          key={i}
          className="w-6 h-6 text-center custom-transition mr-2 last-of-type:mr-0 group"
        >
          <button
            className={`
              border-0 rounded-full box-content cursor-pointer
              [ w-full h-full ]
              [ py-0.5 px-0 ] 
              [ group-hover:bg-darkGreen dark:group-hover:bg-lightGreen ]
              [ group-hover:text-lightGrey dark:group-hover:text-darkGrey ] 
              ${
                i === page
                  ? "bg-darkGreen dark:bg-lightGreen text-lightGrey dark:text-darkGrey"
                  : "bg-transparent text-darkGrey dark:text-lightGrey"
              }`}
            onClick={() => setPage(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return pagesListItems;
  };

  return (
    <section className="sm:grid sm:grid-cols-[repeat(3,_1fr)] sm:gap-x-10">
      <h2 className="heading sm:col-[1/4]">My Projects</h2>
      <span className="heading-border sm:col-[1/4]"></span>

      {/* Projects */}
      {projects.slice(0, 3).map((project) => (
        <figure className="my-6 w-full" key={project._id}>
          <div
            className="h-[389px] overflow-hidden group"
            style={{ backgroundColor: project.backcolor }}
          >
            <img
              src={`http://localhost:5000/${project.main_image}`}
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
      ))}

      {/* Paging */}
      <ul className="flex col-[1/4]">{generatePages()}</ul>
    </section>
  );
};

export default Projects;
