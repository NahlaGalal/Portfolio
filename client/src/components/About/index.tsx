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
    <section className="[ flex flex-col justify-center items-center gap-10 md:flex-row-reverse md:gap-x-20 ]">
      {/* Avatar */}
      <div
        className="
        [ w-72 h-64 md:w-full md:h-[400px] xl:h-[553px] xl:w-1/2 ] 
        [ overflow-visible rounded-3xl ] 
        [ p-4 mx-auto md:m-0 md:p-6 ] 
        [ transition-all duration-500 ] 
        [ bg-darkGrey dark:bg-lightGrey ]"
      >
        <img
          src={profile}
          alt="Nahla personal avatar"
          className="[ h-64 w-64 md:w-full md:h-[400px] xl:w-full xl:h-[553px] ] object-cover rounded-3xl"
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
          Computer Science graduate passionate about Front-end. Highly-capable
          leader, Leading committees at my faculty, Leading front-end at my
          graduation project. Like to organize events, multitasking and
          learning, Proficient in HTML, CSS.
        </p>
        <div className="[ grid grid-cols-[32px_1fr] gap-2 items-center ] mt-10">
          <ListItem text="01097429922" title="Phone" Icon={HiPhone} />
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
          <HiCloudDownload size={24} color="#EEEEEE" />
          Download CV
        </Link>
      </section>
    </section>
  );
};

export default About;
