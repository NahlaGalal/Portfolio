import React from "react";
import { IPaging } from "./Types";

const Paging: React.FC<IPaging> = ({ pagesNum, page, setPage }) => {
  return (
    <ul className="flex col-[1/4]">
      {new Array(Math.ceil(pagesNum)).fill(0).map((_, i: number) => (
        <li
          key={i}
          className="w-6 h-6 text-center custom-transition mr-2 last-of-type:mr-0 group"
        >
          <button
            className={`
              border-0 rounded-full box-content cursor-pointer
              [ w-full h-full ]
              [ py-0.5 px-0 ] 
              [ group-hover:bg-darkGreen dark:group-hover:bg-lightGreen ]
              [ group-hover:text-lightGrey dark:group-hover:text-darkGrey ] 
              ${
                i + 1 === page
                  ? "bg-darkGreen dark:bg-lightGreen text-lightGrey dark:text-darkGrey"
                  : "bg-transparent text-darkGrey dark:text-lightGrey"
              }`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Paging;
