import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import AddExperienceFormUI from "./FormUI";
import { IFormData } from "./Types";

const AddExperience = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmitHandler = (data: IFormData) => {
    if(!data.end_date) data.end_date = "present"
    
    axios.post("/api/experience", data).then((data) => console.log(data));
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
        Add Experience
      </h1>
      <AddExperienceFormUI
        errors={errors}
        register={register}
        watch={watch}
        control={control}
      />
      ;
    </form>
  );
};

export default AddExperience;
