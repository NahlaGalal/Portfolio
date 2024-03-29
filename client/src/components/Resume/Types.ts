export interface IExperience {
  _id: string;
  __v: number;
  name: string;
  sub_name?: string;
  description?: string;
  start_date: string;
  end_date: string;
  certificate?: string;
  type: string;
}

export interface IProps {
  data: IExperience[];
  type: string;
}

export interface IItem {
  elm: IExperience;
}

export interface ISkill {
  _id: string;
  name: string;
}
