import axios from "axios";
import { useEffect, useState } from "react";
import Experience from "./Experience";
import { IExperience, ISkill } from "./Types";

const Resume = () => {
  const [experience, setExperience] = useState<IExperience[]>([]);
  const [education, setEducation] = useState<IExperience[]>([]);
  const [skills, setSkills] = useState<ISkill[]>([]);

  useEffect(() => {
    axios.get("api/experience").then((res) => {
      setExperience(res.data.experience);
      setEducation(res.data.education);
      setSkills(res.data.skills);
    });
  }, []);

  return (
    <>
      {/* Education and experience */}
      <section className="flex flex-wrap w-full gap-4">
        <header className="w-full">
          <h2 className="heading text-center">Education & Experience</h2>
          <span className="heading-border"></span>
        </header>

        {/* Education */}
        <Experience data={education} type="Education" />

        {/* Experience */}
        <Experience data={experience} type="Experience" />
      </section>

      {/* Skills */}
      <section className="mt-10">
        <header className="w-full mb-6">
          <h2 className="heading text-center">Skills</h2>
          <span className="heading-border"></span>
        </header>

        <ul className="flex flex-wrap gap-4 w-8/12 mx-auto justify-center">
          {skills.map(({ _id, name }) => (
            <li
              className="bg-darkGrey text-lightGrey px-4 py-2 rounded-lg font-medium"
              key={_id}
            >
              {name}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Resume;
