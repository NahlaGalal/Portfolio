import {
  Control,
  FieldErrorsImpl,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

export interface IFormData {
  name: string;
  sub_name?: string;
  description?: string;
  start_date: string;
  end_date: string;
  certificate?: string;
  type: string;
}

export interface IFormUIProps {
  register: UseFormRegister<IFormData>;
  watch: UseFormWatch<IFormData>;
  errors: FieldErrorsImpl<IFormData>;
  control: Control<IFormData, any>;
}
