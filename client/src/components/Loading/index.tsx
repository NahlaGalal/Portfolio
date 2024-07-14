import React from "react";

const Loading = () => {
  return (
    <div className="absolute w-full h-full top-0 z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      inline-block w-10 h-10 box-border text-darkGreen
      after:block after:w-10 after:h-10 after:m-2
      after:rounded-full after:border-4 after:border-x-darkGreen after:border-y-[transparent]
      after:animate-spin"></div>
    </div>
  );
};

export default Loading;
