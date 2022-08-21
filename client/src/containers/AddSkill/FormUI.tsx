import React from "react";
import Input from "../../components/Input";
import File from "../../components/Input/File";
import { IFormUIProps } from "./Types";

const AddSkillFormUI: React.FC<IFormUIProps> = ({
  register,
  errors,
  watch,
}) => {
  return (
    <>
      <Input
        type="text"
        id="name"
        label="Skill name"
        register={register("name", { required: "Project name is required" })}
        value={watch("name")}
        error={errors.name}
      />
      <File
        type="file"
        id="image"
        label="Skill image"
        register={register("image", {
          required: "Image is required",
        })}
        error={errors.image}
      />

      <button type="submit" className="btn border-0 w-20 mx-auto">
        Send<span>GO!</span>
      </button>
    </>
  );
};

export default AddSkillFormUI;
