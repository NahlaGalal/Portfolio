import React, { useState } from "react";
import Navbar from "./Navbar";
import data from "../util/data";
import nextArrow from "../images/icons/right-arrow.svg";
import prevArrow from "../images/icons/left-arrow.svg";

const Projects = (props) => {
  const project = data.find(
    (project) => project.id === parseInt(props.match.params.id)
  );

  const [imageIndex, setImageIndex] = useState(0);
  const [image, setImage] = useState(project["main-image"]);

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
      <main className="Project">
        <h1>{project.name}</h1>
        <section className="Project__carousel">
          <div className="Project__carousel__image">
            <img src={image} alt="Project screenshot" />
          </div>
          <div className="Project__carousel__gallery">
            <button onClick={generatePrevImage}>
              <img src={prevArrow} alt="Previous icon" />
            </button>
            <img
              onClick={() => setImage(project.images[imageIndex])}
              src={project.images[imageIndex]}
              alt="Other screenshots of the project"
            />
            {project.images[imageIndex + 1] && (
              <img
                onClick={() => setImage(project.images[imageIndex + 1])}
                src={project.images[imageIndex + 1]}
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
          <p>{project.details}</p>
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
          <ul className="Project__info__skills">
            {project.skills.map((skill) => (
              <li key={skill.name}>
                <img src={skill.image} alt={skill.name} />
              </li>
            ))}
          </ul>
          <div className="links">
            {project.link && (
              <a href={project.link} className="btn">
                {project.text}
                <span>GO!</span>
              </a>
            )}
            <a href={project.code} className="btn">
              View code<span>GO!</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
