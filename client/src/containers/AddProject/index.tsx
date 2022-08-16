import axios from "axios";
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

  const onSubmitHandler = (values: IFormData) => {
    const data = {
      ...values,
      main_image: values.main_image[0],
      images: Array.from(values.images),
      skills_images: Array.from(values.skills_images),
    };

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]: [string, any]) => {
      if (key === "images" || key === "skills_images") {
        value.forEach((val: File) => {
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
      <AddProjectFormUI errors={errors} register={register} watch={watch} />;
    </form>
  );
};

export default AddProject;
