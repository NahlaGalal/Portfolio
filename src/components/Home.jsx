import React from "react";
import { Link } from "react-router-dom";
import SwitchTheme from "./SwitchTheme";
import profile from "../images/profile.jpg";
import phoneIcon from "../images/phone.svg";
import mailIcon from "../images/mail.svg";
import data from '../util/data.js';

const Home = () => {
  return (
    <div className="Home">
      {/** Switch language */}
      <SwitchTheme />
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
            <img src={phoneIcon} alt="Phone icon" />
          </div>
          <p>01097429922</p>
        </div>
      </header>
      <main>
        {/** Projects section */}
        <section className="Home__projects">
          <h2 className="Home__heading">My Projects</h2>
          <span className="Home__heading-border"></span>
          {data.slice(0, 3).map(project => (
            <figure className="Home__projects__project" key={project.id}>
              <div className="Home__projects__project__image">
                <img src={project["main-image"]} alt={`${project.name} page screenshot`} />
              </div>
              <figcaption>
                <Link to={`/project/${project.id}`}>{project.name}</Link>
              </figcaption>
            </figure>
          ))}
        </section>
        {/** Contacts section */}
        <section className="Home__contact">
          <h2 className="Home__heading">Contact us</h2>
          <span className="Home__heading-border"></span>
          <form className="Home__contact__form">
            <div className="Home__contact__form__field-input">
              <input type="text" name="name" id="name" />
              <label htmlFor="name">Your name</label>
            </div>
            <div className="Home__contact__form__field-input">
              <input type="Email" name="email" id="email" />
              <label htmlFor="email">Your email</label>
            </div>
            <div className="Home__contact__form__field-input">
              <textarea name="message" id="message"></textarea>
              <label htmlFor="message">Your message</label>
            </div>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Home;
