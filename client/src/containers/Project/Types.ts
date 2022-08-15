export interface ICarousel {
  generateNextImage: () => void;
  generatePrevImage: () => void;
  setImageHandler: (index: number) => void;
  imageIndex: number;
  images: string[];
}