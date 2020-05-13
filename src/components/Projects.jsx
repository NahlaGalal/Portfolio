import React, { useState } from "react";
import Navbar from "./Navbar";
import data from "../util/data";
import nextArrow from "../images/icons/right-arrow.svg";
import prevArrow from "../images/icons/left-arrow.svg";

const Projects = (props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const project = data.find(
    (project) => project.id === parseInt(props.match.params.id)
  );

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
            <img src={project.images[0]} alt="Project screenshot" />
          </div>
          <div className="Project__carousel__gallery">
            <button onClick={generatePrevImage}>
              <img src={prevArrow} alt="Previous icon" />
            </button>
            <img
              src={project.images[imageIndex]}
              alt="Other screenshots of the project"
            />
            {project.images[imageIndex + 1] && (
              <img
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
          <a href={project.link} className="btn">
            Visit website<span>GO!</span>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Projects;
