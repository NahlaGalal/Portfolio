import { FieldErrorsImpl, UseFormRegister, UseFormWatch } from "react-hook-form";

export interface IFormTypes {
  name: string;
  email: string;
  message: string;
}

export interface IFormUIProps {
  register: UseFormRegister<IFormTypes>;
  watch: UseFormWatch<IFormTypes>;
  errors: FieldErrorsImpl<IFormTypes>;
}
