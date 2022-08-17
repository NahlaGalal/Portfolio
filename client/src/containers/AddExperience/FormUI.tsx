import React from "react";
import { Controller } from "react-hook-form";
import MDEditor from "@uiw/react-md-editor";
import { IFormUIProps } from "./Types";
import Input from "../../components/Input";

const AddExperienceFormUI: React.FC<IFormUIProps> = ({
  register,
  watch,
  control,
  errors,
}) => {
  return (
    <>
      <Input
        type="text"
        id="name"
        label="Name"
        register={register("name", { required: "Name is required" })}
        value={watch("name")}
        error={errors.name}
      />
      <Input
        type="text"
        id="sub_name"
        label="Subname"
        register={register("sub_name")}
        value={watch("sub_name")}
        error={errors.sub_name}
      />
      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <MDEditor value={value} onChange={onChange} />
        )}
      />
      <Input
        type="url"
        id="certificatie"
        label="Certificatie link"
        register={register("certificate", {
          pattern: {
            value:
              /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
            message: "Certificatie must be a valid url",
          },
        })}
        value={watch("certificate")}
        error={errors.certificate}
      />
      <Input
        type="month"
        id="start_date"
        label="Start date"
        register={register("start_date", {
          required: "Start date is required",
        })}
        value={watch("start_date") || new Date()}
        error={errors.start_date}
      />
      <Input
        type="month"
        id="end_date"
        label="End date"
        register={register("end_date")}
        value={watch("end_date") || new Date()}
        error={errors.end_date}
      />
      <div className="my-6">
        <div className="relative">
          <p
            className="
            absolute custom-transition h-6 px-1
            [ -translate-y-1/2 left-4 top-0 ]
            [ text-darkGreen dark:text-lightGreen ]
            [ bg-lightGrey dark:bg-darkGrey ]"
          >
            Type
          </p>
          <div
            className="
            [ flex items-center gap-4 ]
            [ border-2 border-darkGreen dark:border-lightGreen ]
            [ bg-lightGrey dark:bg-darkGrey ]
            [ w-full h-12 ] 
            rounded-xl text-base px-4 custom-transition 
            [ text-darkGrey dark:text-lightGreen ]"
          >
            <label htmlFor="experience">
              <input
                type="radio"
                id="experience"
                value={"experience"}
                {...register("type", { required: "Type is required" })}
              />{" "}
              Experience
            </label>
            <label htmlFor="education">
              <input
                type="radio"
                id="education"
                value={"education"}
                {...register("type", { required: "Type is required" })}
              />{" "}
              Education
            </label>
          </div>
        </div>
        {errors.type && <p className="text-sm pl-2 text-red">{errors.type.message}</p>}
      </div>
      <button type="submit" className="btn border-0 w-20 mx-auto">
        Send<span>GO!</span>
      </button>
    </>
  );
};

export default AddExperienceFormUI;
