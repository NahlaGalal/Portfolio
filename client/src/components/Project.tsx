import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
// import data from "../util/data";
import nextArrow from "../images/icons/right-arrow.svg";
import prevArrow from "../images/icons/left-arrow.svg";
import axios from "axios";

interface IProject {
  _id: string;
  name: string;
  main_image: string;
  images: string[];
  details: string;
  link?: string;
  code?: string;
  backcolor?: string;
  text: string;
  languages: {
    language: string;
    percent: number;
  }[];
  skills: {
    name: string;
    image: string;
  }[];
}

const Project: React.FC<any> = ({ match }) => {
  const [project, setProject] = useState<IProject>({
    _id: "",
    name: "",
    main_image: "",
    images: [],
    details: "",
    text: "",
    languages: [],
    skills: [],
  });
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [image, setImage] = useState<string>(project.main_image);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/project?id=${match.params.id}`)
      .then((data) => {
        setProject(data.data.project);
        setImage(data.data.project.main_image);
      });
  }, [match]);

  const generateNextImage = () => {
    if (imageIndex + 2 >= project.images.length) return;
    setImageIndex(imageIndex + 1);
  };

  const generatePrevImage = () => {
    if (imageIndex <= 0) return;
    setImageIndex(imageIndex - 1);
  };

  return (
    <div>
      <Navbar />
      {project?._id ? (
        <main className="Project">
          <h1>{project.name}</h1>
          <section className="Project__carousel">
            <div className="Project__carousel__image">
              <img
                src={`http://localhost:4000/${image}`}
                alt="Project screenshot"
              />
            </div>
            <div className="Project__carousel__gallery">
              <button onClick={generatePrevImage}>
                <img src={prevArrow} alt="Previous icon" />
              </button>
              <img
                onClick={() => setImage(project.images[imageIndex])}
                src={`http://localhost:4000/${project.images[imageIndex]}`}
                alt="Other screenshots of the project"
              />
              {project.images[imageIndex + 1] && (
                <img
                  onClick={() => setImage(project.images[imageIndex + 1])}
                  src={`http://localhost:4000/${
                    project.images[imageIndex + 1]
                  }`}
                  alt="Other screenshots of the project"
                />
              )}
              <button onClick={generateNextImage}>
                <img src={nextArrow} alt="Next icon" />
              </button>
            </div>
          </section>
          <section className="Project__info">
            <h2 className="heading">Project info</h2>
            <span className="heading-border"></span>
            <p>
              {project.details}
              {!project.details.endsWith(".") && "."}
            </p>
            <h2 className="heading">Languages</h2>
            <span className="heading-border"></span>
            <ul className="Project__info__languages">
              {project.languages.map((language) => (
                <li key={language.language}>
                  <span>{language.language}</span>
                  <span>{language.percent}%</span>
                  <div className="bar">
                    <span
                      className="bar__percent"
                      style={{ width: `${language.percent}%` }}
                    >
                      <span></span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <h2 className="heading">Skills</h2>
            <span className="heading-border"></span>
            <ul className="Project__info__skills">
              {project.skills.map((skill) => (
                <li key={skill.name}>
                  <img
                    src={`http://localhost:4000/${skill.image}`}
                    alt={skill.name}
                    title={skill.name}
                  />
                </li>
              ))}
            </ul>
            <div className="links">
              {project.link && (
                <a
                  href={project.link}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.text}
                  <span>GO!</span>
                </a>
              )}
              <a
                href={project.code}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                View code<span>GO!</span>
              </a>
            </div>
          </section>
        </main>
      ) : undefined}
    </div>
  );
};

export default Project;
