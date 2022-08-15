export interface ICarousel {
  generateNextImage: () => void;
  generatePrevImage: () => void;
  setImageHandler: (index: number) => void;
  imageIndex: number;
  images: string[];
}

export interface ISkills {
  skills: {
    name: string;
    image: string;
  }[];
  link?: string;
  text: string;
  code?: string;
}
