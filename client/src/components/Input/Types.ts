import { UseFormRegisterReturn } from "react-hook-form";

export interface IProps {
  type: string;
  id: string;
  label: string;
  register: UseFormRegisterReturn<string>;
  value?: string
}