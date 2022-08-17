import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { IExperience } from "./Types";

const Resume = () => {
  const [experience, setExperience] = useState<IExperience[]>([]);
  const [education, setEducation] = useState<IExperience[]>([]);

  useEffect(() => {
    axios.get("api/experience").then((res) => {
      setExperience(res.data.experience);
      setEducation(res.data.education);
    });
  });

  return (
    <section className="flex flex-wrap w-full gap-4">
      <header className="w-full">
        <h2 className="heading text-center">Education & Experience</h2>
      </header>

      {/* Education */}
      <section className="w-[calc(50%-8px)] mt-6 relative h-max">
        <header className="flex items-center gap-4">
          <div className="w-10 h-10 bg-darkGreen rounded-full p-2">
            <HiOutlineAcademicCap size={24} color="#ffffff" />
          </div>
          <h3 className="text-2xl text-darkGreen dark:text-lightGreen font-bold">
            Education
          </h3>
        </header>

        {education.map((elm) => (
          <div
            className="mt-4 text-darkGrey dark:text-lightGrey relative pl-9"
            key={elm._id}
          >
            <span className="absolute w-4 h-4 top-1 left-[13px] bg-darkGreen dark:bg-lightGreen rounded-full"></span>
            <p className="text-xl font-bold">{elm.name}</p>
            {elm.sub_name && (
              <span className="mt-1 italic">{elm.sub_name}</span>
            )}
            {elm.description && (
              <div className="mt-4">
                <MDEditor.Markdown
                  source={elm.description}
                  style={{ background: "transparent" }}
                />
              </div>
            )}
            <p className="absolute top-0 right-0 border border-darkGreen dark:border-lightGreen text-darkGreen dark:text-darkGreen rounded-3xl px-4 h-10 flex items-center">
              {elm.start_date} - {elm.end_date}
            </p>
          </div>
        ))}

        {/* Vertical line */}
        <span className="absolute w-0.5 h-full bg-darkGreen dark:bg-lightGreen top-0 left-5 -z-10"></span>
      </section>

      {/* Experience */}
      <section className="w-[calc(50%-8px)] relative h-max">
        <header className="flex items-center gap-4">
          <div className="w-10 h-10 bg-darkGreen rounded-full p-2">
            <HiOutlineAcademicCap size={24} color="#ffffff" />
          </div>
          <h3 className="text-2xl text-darkGreen dark:text-lightGreen font-bold">
            Experience
          </h3>
        </header>

        {experience.map((elm) => (
          <div
            className="mt-4 text-darkGrey dark:text-lightGrey relative pl-9"
            key={elm._id}
          >
            <span className="absolute w-4 h-4 top-1 left-[13px] bg-darkGreen dark:bg-lightGreen rounded-full"></span>
            <p className="text-xl font-bold">{elm.name}</p>
            {elm.sub_name && (
              <span className="mt-1 italic">{elm.sub_name}</span>
            )}
            {elm.description && (
              <div className="mt-4">
                <MDEditor.Markdown
                  source={elm.description}
                  style={{ background: "transparent" }}
                />
              </div>
            )}
            <p className="absolute top-0 right-0 border border-darkGreen dark:border-lightGreen text-darkGreen dark:text-darkGreen rounded-3xl px-4 h-10 flex items-center">
              {elm.start_date} - {elm.end_date}
            </p>
          </div>
        ))}

        {/* Vertical line */}
        <span className="absolute w-0.5 h-full bg-darkGreen dark:bg-lightGreen top-0 left-5 -z-10"></span>
      </section>
    </section>
  );
};

export default Resume;
