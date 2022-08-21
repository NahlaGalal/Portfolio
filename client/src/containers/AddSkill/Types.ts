import {
  FieldErrorsImpl,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

export interface IFormData {
  name: string;
  image: FileList;
}

export interface IFormUIProps {
  register: UseFormRegister<IFormData>;
  watch: UseFormWatch<IFormData>;
  errors: FieldErrorsImpl<IFormData>;
}
