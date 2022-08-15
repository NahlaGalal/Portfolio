import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { IFormTypes } from "./Types";
import ContactFormUI from "./FormUI";

const Contact = () => {
  const { register, handleSubmit, watch } = useForm<IFormTypes>();
  const form = useRef<any>();

  const onSubmitHandler = (data: IFormTypes) => {
    emailjs
      .sendForm(
        "service_8ydhw15",
        "template_cca9dah",
        form.current,
        "user_dEnbi19Q2b1ZYkozc2rY1"
      )
      .then((res) => console.log(res.text))
      .catch((err) => console.log(err.text));
  };

  return (
    <section
      className="
        [ px-[5%] sm:px-[10%] ] 
        [ sm:grid sm:grid-cols-[1fr_1fr] gap-x-10 items-center ]
        w-full mt-20"
    >
      <h2 className="heading col-[1/3]">Contact us</h2>
      <span className="heading-border col-[1/3]"></span>
      <ContactFormUI
        register={register}
        onSubmit={handleSubmit(onSubmitHandler)}
        watch={watch}
      />
    </section>
  );
};

export default Contact;
