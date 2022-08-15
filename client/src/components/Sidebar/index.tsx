import React from "react";
import { listItems } from "./data";
import { IProps } from "./Types";

const Sidebar: React.FC<IProps> = ({ onClick }) => {
  return (
    <ul className="bg-darkGreen dark:bg-lightGreen w-[120px] min-w-[120px] py-10 flex flex-col justify-center items-center min-h-screen fixed top-0">
      {listItems.map(({ text, Icon }) => (
        <li key={text}>
          <button
            className="flex flex-col justify-center items-center text-lightGrey dark:text-lightGrey mb-8"
            onClick={() => onClick(text)}
          >
            <Icon size={32} color="#EEEEEE" />
            <span className="mt-2">{text}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
