import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { IProject } from "../../components/Projects/Types";
import Carousel from "./Carousel";
import Skills from "./Skills";
import { FaArrowCircleLeft } from "react-icons/fa";

const Project: React.FC = () => {
  const [project, setProject] = useState<IProject>({
    _id: "",
    name: "",
    main_image: "",
    images: [],
    details: "",
    text: "",
    skills: [],
    start_date: "",
    end_date: "",
  });
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [image, setImage] = useState<string>(project.main_image);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/project?id=${id}`).then((data) => {
      setProject(data.data.project);
      setImage(data.data.project.main_image);
    });
  }, [id]);

  const generateNextImage = () => {
    if (imageIndex + 2 >= project.images.length) return;
    setImageIndex(imageIndex + 1);
  };

  const generatePrevImage = () => {
    if (imageIndex <= 0) return;
    setImageIndex(imageIndex - 1);
  };

  const setImageHandler = (index: number) => {
    setImage(project.images[index]);
  };

  const formatDate = (date: string) => {
    return date.split("-").reverse().join("/");
  }

  return project._id ? (
    <main className="px-[5%] sm:px-[10%] sm:grid sm:grid-cols-[repeat(2,_1fr)] gap-x-10">
      <Link
        to="/"
        className="text-darkGreen dark:text-lightGrey mt-10 flex gap-2 items-center underline font-semibold"
        state={{ current: "Projects" }}
      >
        <FaArrowCircleLeft />
        Back to Projects
      </Link>
      <h1
        className="
          my-2 sm:col-[1/3] 
          [ text-center text-5xl font-bold ] 
          [ text-darkGreen dark:text-lightGreen ]"
      >
        {project.name}
      </h1>
      <p className="mb-10 sm:col-[1/3] text-center">
        <>
          {formatDate(project.start_date)} - {formatDate(project.end_date)}
        </>
      </p>
      <section className="mb-10">
        {/* Main image */}
        <div className="[ h-[268px] sm:h-[560px] ] group overflow-hidden">
          <img
            src={`/${image}`}
            alt="Project screenshot"
            className="
              w-full object-cover 
              [ transition-all duration-[1.5s] ] 
              [ group-hover:translate-y-[calc(-100%+268px)] sm:group-hover:translate-y-[calc(-100%+560px)] ]"
          />
        </div>

        {/* Other images */}
        <Carousel
          generateNextImage={generateNextImage}
          generatePrevImage={generatePrevImage}
          imageIndex={imageIndex}
          setImageHandler={setImageHandler}
          images={project.images}
        />
      </section>
      <section>
        <h2 className="ml-12 heading text-3xl after:-right-10 before:-left-10">
          Project info
        </h2>
        <span className="ml-[90px] heading-border"></span>
        <div className="leading-6 [ mt-4 mb-6 ] mde">
          <MDEditor.Markdown
            source={project.details}
            style={{ background: "transparent" }}
            className="text-darkGrey dark:text-lightGrey"
          />
        </div>
        <Skills
          skills={project.skills}
          text={project.text}
          code={project.code}
          link={project.link}
        />
      </section>
    </main>
  ) : (
    <></>
  );
};

export default Project;
