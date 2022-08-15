import React from "react";
import { IListItem } from "./Types";

const ListItem: React.FC<IListItem> = ({ Icon, text, title, href }) => {
  return (
    <>
      <span className="rounded-full bg-darkGreen h-8 [ flex justify-center items-center ]">
        <Icon size={16} color="#EEEEEE" title={title} />
      </span>
      {href ? (
        <a
          href={href}
          title={title}
          className="leading-6 [ text-darkGrey dark:text-lightGrey ]"
          target={"_blank"}
          rel="noreferrer"
        >
          {text}
        </a>
      ) : (
        <p
          title={title}
          className="leading-6 [ text-darkGrey dark:text-lightGrey ]"
        >
          {text}
        </p>
      )}
    </>
  );
};

export default ListItem;
