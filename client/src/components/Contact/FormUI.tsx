import React from "react";
import Input from "../Input";
import Textarea from "../Input/Textarea";
import { IFormUIProps } from "./Types";

const ContactFormUI: React.FC<IFormUIProps> = ({
  register,
  onSubmit,
  watch,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        id="name"
        label="Your name"
        register={register("name", { required: true, max: 50, min: 5 })}
        value={watch("name")}
      />
      <Input
        type="email"
        id="email"
        label="Your email"
        register={register("email", {
          required: true,
          pattern: /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/,
        })}
        value={watch("email")}
      />
      <Textarea
        type="text"
        id="message"
        label="Your message"
        register={{ ...register("message", { required: true, min: 5 }) }}
        value={watch("message")}
      />
      <button type="submit" className="btn border-0 w-20 mx-auto">
        Send<span>GO!</span>
      </button>
    </form>
  );
};

export default ContactFormUI;
