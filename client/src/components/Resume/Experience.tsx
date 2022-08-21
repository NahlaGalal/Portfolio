import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi";
import Item from "./Item";
import { IProps } from "./Types";

const Experience: React.FC<IProps> = ({ data, type }) => {
  return (
    <section className="w-full md:w-[calc(50%-8px)] mt-6 relative h-max">
      <header className="flex items-center gap-4">
        <div className="w-10 h-10 bg-darkGreen rounded-full p-2">
          <HiOutlineAcademicCap size={24} color="#EEE" />
        </div>
        <h3 className="text-2xl text-darkGreen dark:text-lightGreen font-bold">
          {type}
        </h3>
      </header>

      {data.map((elm) => (
        <Item key={elm._id} elm={elm} />
      ))}

      {/* Vertical line */}
      <span className="absolute w-0.5 h-full bg-darkGreen dark:bg-lightGreen top-0 left-5 -z-10"></span>
    </section>
  );
};

export default Experience;
