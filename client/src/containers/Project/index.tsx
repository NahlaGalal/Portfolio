import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { IProject } from "../../components/Projects/Types";
import Carousel from "./Carousel";
import Skills from "./Skills";

const Project: React.FC = () => {
  const [project, setProject] = useState<IProject>({
    _id: "",
    name: "",
    main_image: "",
    images: [],
    details: "",
    text: "",
    skills: [],
    start_date: new Date(),
    end_date: new Date(),
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

  return project._id ? (
    <main className="px-[5%] sm:px-[10%] sm:grid sm:grid-cols-[repeat(2,_1fr)] sm:gap-10">
      <h1
        className="
          mt-10 mb-6 sm:col-[1/3] 
          [ text-center text-5xl font-bold ] 
          [ text-darkGreen dark:text-lightGreen ]"
      >
        {project.name}
      </h1>
      <section className="mb-10">
        {/* Main image */}
        <div className="[ h-[268px] sm:h-[560px] ] group overflow-hidden">
          <img
            src={`${window.location.origin}/${image}`}
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
        <h2 className="ml-12 heading">Project info</h2>
        <span className="ml-[90px] heading-border"></span>
        <div className="leading-6 [ mt-4 mb-6 ]">
          <MDEditor.Markdown
            source={project.details}
            style={{ background: "transparent" }}
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
