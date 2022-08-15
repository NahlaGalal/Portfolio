import React from "react";
import { IProps } from "./Types";

const Textarea: React.FC<IProps> = ({ id, label, register, value }) => {
  return (
    <div className="relative my-6">
      <textarea
        id={id}
        {...register}
        className="
          [ text-darkGreen dark:text-lightGreen ]
          [ border-2 border-darkGreen dark:border-lightGreen ] 
          [ bg-lightGrey dark:bg-darkGrey ]
          [ w-full h-40 ]
          [ pl-4 pt-3 ]
          rounded-xl text-base custom-transition 
          focus:outline-none 
          peer"
      ></textarea>
      <label
        className={`
          [ peer-focus:h-6 peer-focus:-top-3 peer-focus:px-1 ] 
          [ peer-focus:bg-lightGrey dark:peer-focus:bg-darkGrey ]
          ${value ? "-top-3 h-6 [ bg-lightGrey dark:bg-darkGrey ] px-1" : "top-3"}
          [ left-4 top-3 ]
          [ text-darkGreen dark:text-lightGreen ] 
          absolute custom-transition`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Textarea;
