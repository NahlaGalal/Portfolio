import React from "react";
import { ISelect } from "./Types";

const Select: React.FC<ISelect> = ({
  register,
  error,
  id,
  label,
  options,
  multiple,
}) => {
  return (
    <div className="my-6">
      <div className="relative">
        <select
          multiple={multiple}
          id={id}
          {...register}
          className="
            [ text-darkGrey dark:text-lightGreen ]
            [ border-2 border-darkGreen dark:border-lightGreen ]
            [ bg-lightGrey dark:bg-darkGrey ]
            [ w-full h-40 ] 
            rounded-xl text-base px-4 custom-transition 
            focus:outline-none 
            peer"
        >
          <option value="" disabled></option>
          {options.map(({ _id, name }) => (
            <option value={_id} key={_id}>
              {name}
            </option>
          ))}
        </select>
        <label
          className={`
            [ bg-lightGrey dark:bg-darkGrey ] 
            px-1 h-6
            [ left-4 -top-3 ]
            [ text-darkGreen dark:text-lightGreen ] 
            absolute custom-transition`}
          htmlFor={id}
        >
          {label}
        </label>
      </div>

      {error && <p className="text-sm pl-2 text-red">{error.message}</p>}
    </div>
  );
};

export default Select;
