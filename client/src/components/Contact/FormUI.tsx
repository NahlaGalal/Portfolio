import React from "react";
import Input from "../Input";
import Textarea from "../Input/Textarea";
import { IFormUIProps } from "./Types";

const ContactFormUI: React.FC<IFormUIProps> = ({ register, watch, errors }) => {
  return (
    <>
      <Input
        type="text"
        id="name"
        label="Your name"
        register={register("name", { required: "Your name is required" })}
        value={watch("name")}
        error={errors.name}
      />
      <Input
        type="email"
        id="email"
        label="Your email"
        register={register("email", {
          required: "Your email is required",
          pattern: {
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            message: "Your email must be valid",
          },
        })}
        value={watch("email")}
        error={errors.email}
      />
      <Textarea
        type="text"
        id="message"
        label="Your message"
        register={{
          ...register("message", { required: "Your message is required" }),
        }}
        value={watch("message")}
        error={errors.message}
      />
      <button type="submit" className="btn border-0 w-20 mx-auto">
        Send<span>GO!</span>
      </button>
    </>
  );
};

export default ContactFormUI;
