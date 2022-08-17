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
    <section className="flex flex-wrap w-full gap-4">
      <header className="w-full">
        <h2 className="heading text-center">Education & Experience</h2>
      </header>

      {/* Education */}
      <Experience data={education} type="Education" />

      {/* Experience */}
      <Experience data={experience} type="Experience" />
    </section>
  );
};

export default Resume;
