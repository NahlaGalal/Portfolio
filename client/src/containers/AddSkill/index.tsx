import axios from "axios";
import { useForm } from "react-hook-form";
import AddSkillFormUI from "./FormUI";
import { IFormData } from "./Types";

const AddSkill = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmitHandler = (values: IFormData) => {
    const data = {
      ...values,
      main_image: values.image[0],
    };

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]: [string, any]) => {
      formData.append(key, value as string | Blob);
    });

    axios.post("/api/skill", formData).then((data) => console.log(data));
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
        Add skill
      </h1>
      <AddSkillFormUI errors={errors} register={register} watch={watch} />;
    </form>
  );
};

export default AddSkill;
