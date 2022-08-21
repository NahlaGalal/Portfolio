import axios from "axios";
import { useEffect, useState } from "react";
import Paging from "./Paging";
import ProjectBox from "./ProjectBox";
import { IProject } from "./Types";

const Projects = () => {
  const [page, setPage] = useState<number>(1);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [pages, setPages] = useState<number>(0);

  useEffect(() => {
    axios.get(`api?page=${page}`).then((res) => {
      setProjects(res.data.data);
      setPages(res.data.pages);
    });
  }, [page]);

  return (
    <section className="sm:grid sm:grid-cols-[repeat(3,_1fr)] sm:gap-x-10">
      <h2 className="heading sm:col-[1/4]">My Projects</h2>
      <span className="heading-border sm:col-[1/4]"></span>

      {/* Projects */}
      {projects.map((project) => (
        <ProjectBox project={project} key={project._id} />
      ))}

      {/* Paging */}
      <Paging pagesNum={pages} page={page} setPage={setPage} />
    </section>
  );
};

export default Projects;
