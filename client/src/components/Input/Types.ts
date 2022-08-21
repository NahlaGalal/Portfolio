import { FieldError, Merge, UseFormRegisterReturn } from "react-hook-form";

export interface IProps {
  type: string;
  id: string;
  label: string;
  register: UseFormRegisterReturn<string>;
  value?: string | Date;
  error: FieldError | Merge<FieldError, (FieldError | undefined)[]> | undefined;
}

export interface IFile extends IProps {
  multiple?: boolean;
}

export interface ISelect extends IProps {
  options: { _id: string; name: string }[];
  multiple?: boolean;
}
