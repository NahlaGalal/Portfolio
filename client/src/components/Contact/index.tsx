import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import emailjs from "emailjs-com";
import { IFormTypes } from "./Types";
import ContactFormUI from "./FormUI";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormTypes>();
  const form = useRef<HTMLFormElement>(null);

  const onSubmitHandler = (data: IFormTypes) => {
    if (form.current)
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID || "",
          process.env.REACT_APP_TEMP_ID || "",
          form.current,
          process.env.REACT_APP_PUBLIC_KEY || ""
        )
        .then((res) => console.log(res.text))
        .catch((err) => console.log(err.text));
  };

  return (
    <section className="md:grid md:grid-cols-[1fr_1fr] gap-x-10 items-center">
      <h2 className="heading col-[1/3]">Contact us</h2>
      <span className="heading-border col-[1/3]"></span>
      <div
        className="
        mt-8 md:h-full p-4
        [ md:col-[1/2] md:row-[3/4] ]
        [ bg-cover bg-lightGrey bg-blend-overlay bg-contact_background ]"
      >
        <h3
          className="
          [ text-2xl text-center leading-7 ]
          text-darkGrey md:max-w-[273px] 
          [ md:mt-20 md:mx-auto md:mb-14 ]"
        >
          You can follow me on social media accounts
        </h3>
        <ul className="[ flex justify-center items-center flex-wrap ] mt-6">
          <li className="mr-4">
            <a
              href="https://www.facebook.com/NhlaaGalal/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook
                size={40}
                title="Facebook profile link"
                color="#006666"
              />
            </a>
          </li>
          <li className="mr-4">
            <a
              href="https://twitter.com/Nhla_glal"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle
                size={40}
                title="Twitter profile link"
                color="#006666"
              />
            </a>
          </li>
          <li className="mr-4">
            <a
              href="https://github.com/NahlaGalal"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub
                size={40}
                title="Github profile link"
                color="#006666"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nahla-galal/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin
                size={40}
                title="Linkedin profile link"
                color="#006666"
              />
            </a>
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit(onSubmitHandler)} ref={form}>
        <ContactFormUI register={register} watch={watch} errors={errors} />
      </form>
    </section>
  );
};

export default Contact;
