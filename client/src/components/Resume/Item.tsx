import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { IItem } from "./Types";

const Item: React.FC<IItem> = ({ elm }) => {
  const formatDate = (date: string) => {
    if (date.includes("-")) {
      let arr = date.split("-");
      return `${arr[1]}/${arr[0]}`;
    } else return date;
  };

  return (
    <div className="mt-4 text-darkGrey dark:text-lightGrey relative pl-9">
      <span className="absolute w-4 h-4 top-1 left-[13px] bg-darkGreen dark:bg-lightGreen rounded-full"></span>

      <div className="flex justify-between flex-wrap gap-4">
        <div>
          <p className="text-xl font-bold">{elm.name}</p>
          {elm.sub_name && <span className="mt-1 italic">{elm.sub_name}</span>}
        </div>

        <p className="border border-darkGreen dark:border-lightGreen text-darkGreen dark:text-darkGreen rounded-3xl px-4 h-10 flex items-center ml-auto">
          {formatDate(elm.start_date)} - {formatDate(elm.end_date)}
        </p>
      </div>

      {elm.description && (
        <div className="mt-4">
          <MDEditor.Markdown
            source={elm.description}
            style={{ background: "transparent" }}
          />
        </div>
      )}
    </div>
  );
};

export default Item;
