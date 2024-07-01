import {
  HiMail,
  HiLocationMarker,
  HiPhone,
  HiCloudDownload,
} from "react-icons/hi";
import profile from "../../images/profile.jpg";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";

const About = () => {
  return (
    <section className="[ flex flex-col justify-center items-center gap-10 md:flex-row-reverse md:gap-x-20 ] h-full">
      {/* Avatar */}
      <div
        className="
        [ overflow-visible rounded-3xl ] 
        [ p-4 mx-auto md:m-0 md:p-6 ] 
        [ transition-all duration-500 ] 
        [ bg-darkGrey dark:bg-lightGrey ]"
      >
        <img
          src={profile}
          alt="Nahla personal avatar"
          className="rounded-3xl"
        />
      </div>

      {/* Info */}
      <section className="flex-1">
        <h1 className="text-5xl font-bold [ text-darkGreen dark:text-lightGreen ]">
          Hello,
        </h1>
        <h2 className="my-4 text-3xl font-bold [ text-darkGreen dark:text-lightGreen ]">
          I'm Nahla Galal
        </h2>
        <p className="leading-6 [ text-darkGrey dark:text-lightGrey ]">
          Highly motivated front-end developer with +4 years of experience in
          building responsive and user-friendly web interfaces. Proficient in
          HTML, CSS, Javascript, Typescript, React and Vue.js. Possesses a keen
          eye for design and a strong understanding of user experience
          principles. Experienced in working with Agile methodologies and
          collaborating with cross-functional teams. Eager to learn new
          technologies and stay updated with the latest trends in web
          development.
        </p>
        <div className="[ grid grid-cols-[32px_1fr] gap-2 items-center ] mt-10">
          <ListItem text="01069899709" title="Phone" Icon={HiPhone} />
          <ListItem
            text="nahlaglal@gmail.com"
            title="Email"
            Icon={HiMail}
            href="mailto:nahlaglal@gmail.com"
          />
          <ListItem
            text="Cairo, Egypt"
            title="Address"
            Icon={HiLocationMarker}
          />
        </div>
        <Link
          to="Nahla_Resume.pdf"
          target="_blank"
          download
          className="
            btn font-medium w-max 
            [ flex items-center gap-2 ] 
            [ px-4 ml-auto mt-8 ] 
            [ bg-darkGreen dark:bg-lightGreen ]"
        >
          <HiCloudDownload
            size={24}
            className="text-lightGrey dark:text-darkGrey"
          />
          Download CV
        </Link>
      </section>
    </section>
  );
};

export default About;
