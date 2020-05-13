import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import profile from "../images/jpgImages/profile.jpg";
import phoneIcon from "../images/icons/phone.svg";
import mailIcon from "../images/icons/mail.svg";
import locationIcon from "../images/icons/location.svg";
import data from "../util/data.js";
import Github from "../images/icons/github.svg";
import Facebook from "../images/icons/facebook.svg";
import Twitter from "../images/icons/twitter.svg";
import Linkedin from "../images/icons/linkedin.svg";

const Home = (props) => {
  const { register, handleSubmit } = useForm();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const element = document.getElementById(
      props.location.hash.replace("#", "")
    );
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop : 0,
      });
    }, 100);
  }, [props.location]);

  const generatePages = () => {
    let pagesListItems = [];
    for (let i = 1; i <= Math.ceil(data.length / 3); i++) {
      pagesListItems.push(
        <li key={i} className={`${i === page ? "active" : ""}`}>
          <button onClick={() => setPage(i)}>{i}</button>
        </li>
      );
    }
    return pagesListItems;
  };

  const changeInput = (e) => {
    if(e.target.value) e.target.classList.add("label-top");
    else e.target.classList.remove("label-top")
  }

  return (
    <div className="Home">
      {/** About header */}
      <header className="Home__header">
        <div className="Home__header__image">
          <img src={profile} alt="Nahla personal avatar" />
        </div>
        <h1>Hello,</h1>
        <h2>I'm Nahla Galal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
          inventore a libero ut ratione fugiat, nesciunt illum quo corporis,
          nisi numquam quidem explicabo! Explicabo ipsa soluta est praesentium,
          quam fugit!
        </p>
        <div className="Home__header__contacts">
          <div className="Home__header__contacts__icon">
            <img src={phoneIcon} alt="Phone icon" />
          </div>
          <p>01097429922</p>
          <div className="Home__header__contacts__icon">
            <img src={mailIcon} alt="Email icon" />
          </div>
          <p>nahlaglal@gmail.com</p>
          <div className="Home__header__contacts__icon">
            <img src={locationIcon} alt="Phone icon" />
          </div>
          <p>El-Mahalla El-Kobra, Egypt</p>
        </div>
      </header>
      <main>
        {/** Projects section */}
        <section className="Home__projects" id="projects">
          <h2 className="Home__heading">My Projects</h2>
          <span className="Home__heading-border"></span>
          {data.slice((page - 1) * 3, page * 3).map((project) => (
            <figure className="Home__projects__project" key={project.id}>
              <div
                className="Home__projects__project__image"
                style={{ backgroundColor: project.backcolor }}
              >
                <img
                  src={project["main-image"]}
                  alt={`${project.name} page screenshot`}
                />
              </div>
              <figcaption>
                <Link to={`/project/${project.id}`}>{project.name}</Link>
              </figcaption>
            </figure>
          ))}
          <ul className="Home__projects__paging">{generatePages()}</ul>
        </section>
        {/** Contacts section */}
        <section className="Home__contact" id="contact">
          <h2 className="Home__heading">Contact us</h2>
          <span className="Home__heading-border"></span>
          <form
            className="Home__contact__form"
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            <div className="Home__contact__form__field-input">
              <input
                type="text"
                name="name"
                id="name"
                ref={register({ required: true, max: 50, min: 5 })}
                onChange={changeInput}
              />
              <label htmlFor="name">Your name</label>
            </div>
            <div className="Home__contact__form__field-input">
              <input
                type="text"
                name="email"
                id="email"
                ref={register({
                  required: true,
                  pattern: /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/,
                })}
                onChange={changeInput}
              />
              <label htmlFor="email">Your email</label>
            </div>
            <div className="Home__contact__form__field-input">
              <textarea
                name="message"
                id="message"
                ref={register({ required: true, min: 5 })}
                onChange={changeInput}
              ></textarea>
              <label htmlFor="message">Your message</label>
            </div>
            <button type="submit" className="btn">
              Send<span>GO!</span>
            </button>
          </form>
          <div className="Home__contact__social">
            <h3>OR you can follow me on social media accounts</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/NhlaaGalal/">
                  <img src={Facebook} alt="Facebbok link icon" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Nhla_glal">
                  <img src={Twitter} alt="Twitter link icon" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nahla-galal-80347b141/">
                  <img src={Linkedin} alt="Linkedin link icon" />
                </a>
              </li>
              <li>
                <a href="https://github.com/NahlaGalal">
                  <img src={Github} alt="Github link icon" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

/**
 * page 1 ==> 0 => 2
 * page 2 ==> 3 => 5
 * page 3 ==> 6 => 8
 */
