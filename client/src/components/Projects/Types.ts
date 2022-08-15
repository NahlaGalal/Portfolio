export interface IProject {
  _id: string;
  name: string;
  main_image: string;
  images: string[];
  details: string;
  link?: string;
  code?: string;
  backcolor?: string;
  text: string;
  languages: {
    language: string;
    percent: number;
  }[];
  skills: {
    name: string;
    image: string;
  }[];
  start_date: Date;
  end_data: Date;
}

export interface IPaging {
  pagesNum: number;
  page: number;
  setPage: (page: number) => void;
}

export interface IProjectBox {
  project: IProject;
}