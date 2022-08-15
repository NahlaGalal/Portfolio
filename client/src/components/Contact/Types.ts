import { UseFormRegister, UseFormWatch } from "react-hook-form";

export interface IFormTypes {
  name: string;
  email: string;
  message: string;
}

export interface IFormUIProps {
  register: UseFormRegister<IFormTypes>;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  watch: UseFormWatch<IFormTypes>;
}
