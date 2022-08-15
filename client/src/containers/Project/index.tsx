import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProject } from "../../components/Projects/Types";

import Carousel from "./Carousel";

const Project: React.FC = () => {
  const [project, setProject] = useState<IProject>({
    _id: "",
    name: "",
    main_image: "",
    images: [],
    details: "",
    text: "",
    languages: [],
    skills: [],
    start_date: new Date(),
    end_data: new Date(),
  });
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [image, setImage] = useState<string>(project.main_image);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/project?id=${id}`).then((data) => {
      setProject(data.data.project);
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
    setImage(project.images[index])
  }

  return project._id ? (
    <main className="sm:grid sm:grid-cols-[repeat(2,_1fr)] sm:gap-10">
      <h1
        className="
          mb-6 sm:col-[1/3] 
          [ text-center text-5xl font-bold ] 
          [ text-darkGreen dark:text-lightGreen ]"
      >
        {project.name}
      </h1>
      <section className="mb-10">
        {/* Main image */}
        <div className="[ h-[268px] sm:h-[560px] ] group overflow-hidden">
          <img
            src={`http://localhost:4000/${image}`}
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
    </main>
  ) : (
    <></>
  );
};

export default Project;
