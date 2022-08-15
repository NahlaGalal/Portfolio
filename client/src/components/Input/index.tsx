import React from "react";
import { IProps } from "./Types";

const Input: React.FC<IProps> = ({
  id,
  label,
  type,
  register,
  value,
  error,
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
            rounded-xl text-base pl-4 custom-transition 
            focus:outline-none 
            peer"
          {...register}
        />
        <label
          className={`
            [ peer-focus:top-0 peer-focus:h-6 peer-focus:px-1 ]
            [ peer-focus:bg-lightGrey dark:peer-focus:bg-darkGrey ]
            ${
              value
                ? "top-0 h-6 px-1 [ bg-lightGrey dark:bg-darkGrey ]"
                : "top-1/2"
            }
            absolute custom-transition
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

export default Input;
