import React from "react";
import {
  HiArrowCircleLeft,
  HiArrowCircleRight,
} from "react-icons/hi";
import { ICarousel } from "./Types";

const Carousel: React.FC<ICarousel> = ({
  generateNextImage,
  generatePrevImage,
  setImageHandler,
  imageIndex,
  images,
}) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <button
        onClick={generatePrevImage}
        className="bg-transparent border-0 cursor-pointer rounded-full p-0"
      >
        <HiArrowCircleLeft title="Previous" size={32} />
      </button>
      <img
        onClick={() => setImageHandler(imageIndex)}
        src={`${window.location.origin}/${images[imageIndex]}`}
        alt="Other screenshots of the project"
        className="
              [ w-32 h-32 ] 
              object-contain cursor-pointer 
              [ mx-2 sm:mx-6 lg:mx-10 ]"
      />
      {images[imageIndex + 1] && (
        <img
          onClick={() => setImageHandler(imageIndex + 1)}
          src={`${window.location.origin}/${images[imageIndex + 1]}`}
          alt="Other screenshots of the project"
          className="
                [ w-32 h-32 ] 
                object-contain cursor-pointer 
                [ mr-2 sm:mr-6 lg:mr-10 ]"
        />
      )}
      <button
        onClick={generateNextImage}
        className="bg-transparent border-0 cursor-pointer rounded-full p-0"
      >
        <HiArrowCircleRight title="Next" size={32} />
      </button>
    </div>
  );
};

export default Carousel;
