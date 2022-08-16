import React from "react";
import Input from "../../components/Input";
import File from "../../components/Input/File";
import { IFormUIProps } from "./Types";
import MDEditor from "@uiw/react-md-editor";
import { Controller } from "react-hook-form";

const AddProjectFormUI: React.FC<IFormUIProps> = ({
  register,
  errors,
  watch,
  control,
}) => {
  return (
    <>
      <Input
        type="text"
        id="name"
        label="Project name"
        register={register("name", { required: "Project name is required" })}
        value={watch("name")}
        error={errors.name}
      />
      <Controller
        control={control}
        name="details"
        render={({ field: { onChange, value } }) => (
          <MDEditor value={value} onChange={onChange} />
        )}
        rules={{ required: "Project details is required"}}
      />
      {errors.details && (
        <p className="text-sm pl-2 text-red">{errors.details.message}</p>
      )}
      <Input
        type="url"
        id="link"
        label="Project link href"
        register={register("link", {
          pattern: {
            value:
              /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
            message: "Link must be a valid url",
          },
        })}
        value={watch("link")}
        error={errors.link}
      />
      <Input
        type="text"
        id="text"
        label="Project link text"
        register={register("text")}
        value={watch("text")}
        error={errors.text}
      />
      <Input
        type="url"
        id="code"
        label="Project code link"
        register={register("code", {
          pattern: {
            value:
              /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
            message: "Code must be a valid url",
          },
        })}
        value={watch("code")}
        error={errors.code}
      />
      <Input
        type="color"
        id="backcolor"
        label="Background color"
        register={register("backcolor")}
        value={watch("backcolor") || "#000"}
        error={errors.backcolor}
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
        register={register("end_date", { required: "End date is required" })}
        value={watch("end_date") || new Date()}
        error={errors.end_date}
      />
      <File
        type="file"
        id="main_image"
        label="Main image"
        register={register("main_image", {
          required: "Main image is required",
        })}
        error={errors.main_image}
      />
      <File
        type="file"
        id="images"
        label="Images"
        register={register("images", {
          required: "Images are required",
        })}
        error={errors.images}
        multiple
      />
      <File
        type="file"
        id="skills"
        label="Skills"
        register={register("skills_images", {
          required: "Skills is required",
        })}
        error={errors.skills_images}
        multiple
      />

      <button type="submit" className="btn border-0 w-20 mx-auto">
        Send<span>GO!</span>
      </button>
    </>
  );
};

export default AddProjectFormUI;
