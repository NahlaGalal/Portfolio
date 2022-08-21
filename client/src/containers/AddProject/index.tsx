import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AddProjectFormUI from "./FormUI";
import { IFormData, ISkill } from "./Types";

const AddProject = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IFormData>();

  // Get skills
  useEffect(() => {
    axios.get("api/skill").then((res) => setSkills(res.data.skills));
  }, []);

  const onSubmitHandler = (values: IFormData) => {
    const data = {
      ...values,
      main_image: values.main_image[0],
      images: Array.from(values.images),
    };

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]: [string, any]) => {
      if (key === "images" || key === "skills") {
        value.forEach((val: File | string) => {
          formData.append(key, val);
        });
      } else {
        formData.append(key, value as string | Blob);
      }
    });

    axios.post("/api/project", formData).then((data) => console.log(data));
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
      <AddProjectFormUI
        errors={errors}
        register={register}
        watch={watch}
        control={control}
        skills={skills}
      />
      ;
    </form>
  );
};

export default AddProject;
