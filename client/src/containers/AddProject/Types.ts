import { FieldErrorsImpl, UseFormRegister, UseFormWatch } from "react-hook-form";

export interface IFormData {
  main_image: FileList;
  images: FileList;
  skills_images: FileList;
  name: string;
  details: string;
  link?: string;
  code?: string;
  backcolor?: string;
  text?: string;
  start_date: Date;
  end_date: Date;
}

export interface IFormUIProps {
  register: UseFormRegister<IFormData>;
  watch: UseFormWatch<IFormData>;
  errors: FieldErrorsImpl<IFormData>;
}