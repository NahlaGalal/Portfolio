import React from "react";
import { IFile } from "./Types";

const File: React.FC<IFile> = ({
  id,
  label,
  type,
  register,
  error,
  multiple,
}) => {
  return (
    <div className="my-6">
      <div className="relative">
        <input
          type={type}
          id={id}
          className="
            [ text-darkGrey dark:text-lightGreen ]
            [ border-2 border-darkGreen dark:border-lightGreen ]
            [ bg-lightGrey dark:bg-darkGrey ]
            [ w-full h-12 ] 
            rounded-xl text-base custom-transition 
            [ px-4 pt-2 ]
            focus:outline-none 
            peer"
          multiple={multiple}
          {...register}
        />
        <label
          className={`
            "top-0 h-6 px-1 [ bg-lightGrey dark:bg-darkGrey ]"
            absolute
            [ -translate-y-1/2 left-4 ]
            [ text-darkGreen dark:text-lightGreen ]
          `}
          htmlFor={id}
        >
          {label}
        </label>
      </div>
      {error && <p className="text-sm pl-2 text-red">{error.message}</p>}
    </div>
  );
};

export default File;
