import axios from "axios";
import { useEffect, useState } from "react";
import Paging from "./Paging";
import ProjectBox from "./ProjectBox";
import { IProject } from "./Types";

const Projects = () => {
  const [page, setPage] = useState<number>(1);
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    axios.get("api").then((res) => setProjects(res.data));
  }, []);

  return (
    <section className="sm:grid sm:grid-cols-[repeat(3,_1fr)] sm:gap-x-10">
      <h2 className="heading sm:col-[1/4]">My Projects</h2>
      <span className="heading-border sm:col-[1/4]"></span>

      {/* Projects */}
      {projects.slice((page - 1) * 3, page * 3).map((project) => (
        <ProjectBox project={project} key={project._id} />
      ))}

      {/* Paging */}
      <Paging pagesNum={projects.length / 3} page={page} setPage={setPage} />
    </section>
  );
};

export default Projects;
