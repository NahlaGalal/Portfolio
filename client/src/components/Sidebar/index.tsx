import React from "react";
import { listItems } from "./data";
import { IProps } from "./Types";

const Sidebar: React.FC<IProps> = ({ onClick }) => {
  return (
    <aside
      className="
        [ bg-darkGreen dark:bg-lightGreen ]
        [ w-28 py-20 ]
        relative"
    >
      <nav className="sticky top-10">
        <ul className="flex flex-col items-center gap-6">
          {listItems.map(({ text, Icon }) => (
            <li key={text}>
              <button
                className="
                [ flex flex-col justify-center items-center ]
                [ text-lightGrey dark:text-lightGrey ]"
                onClick={() => onClick(text)}
              >
                <Icon size={32} color="#EEEEEE" />
                <span className="mt-2">{text}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
