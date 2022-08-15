import React from "react";
import { useForm } from "react-hook-form";
import AddProjectFormUI from "./FormUI";
import { IFormData } from "./Types";

const AddProject = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmitHandler = (data: IFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="px-[5%] sm:px-[10%] w-full"
      noValidate
    >
      <h1
        className="
          mt-10 mb-6 sm:col-[1/3] 
          [ text-center text-5xl font-bold ] 
          [ text-darkGreen dark:text-lightGreen ]"
      >
        Add project
      </h1>
      <AddProjectFormUI errors={errors} register={register} watch={watch} />;
    </form>
  );
};

export default AddProject;
