import axios from "axios";
import { useEffect, useState } from "react";
import Experience from "./Experience";
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
          <li className="bg-darkGrey text-lightGrey px-4 py-2 rounded-lg font-medium">HTML</li>
          <li className="bg-darkGrey text-lightGrey px-4 py-2 rounded-lg font-medium">CSS</li>
          <li className="bg-darkGrey text-lightGrey px-4 py-2 rounded-lg font-medium">Javascript</li>
          <li className="bg-darkGrey text-lightGrey px-4 py-2 rounded-lg font-medium">JQuery</li>
          <li className="bg-darkGrey text-lightGrey px-4 py-2 rounded-lg font-medium">SASS</li>
          <li className="bg-darkGrey text-lightGrey px-4 py-2 rounded-lg font-medium">reactJs</li>
          <li className="bg-darkGrey text-lightGrey px-4 py-2 rounded-lg font-medium">Typescipt</li>
          <li className="bg-darkGrey text-lightGrey px-4 py-2 rounded-lg font-medium">Redux</li>
          <li className="bg-darkGrey text-lightGrey px-4 py-2 rounded-lg font-medium">Git</li>
          <li className="bg-darkGrey text-lightGrey px-4 py-2 rounded-lg font-medium">React native</li>
          <li className="bg-darkGrey text-lightGrey px-4 py-2 rounded-lg font-medium">Figma</li>
          <li className="bg-darkGrey text-lightGrey px-4 py-2 rounded-lg font-medium">NextJs</li>
          <li className="bg-darkGrey text-lightGrey px-4 py-2 rounded-lg font-medium">TailwindCSS</li>
        </ul>
      </section>
    </>
  );
};

export default Resume;
