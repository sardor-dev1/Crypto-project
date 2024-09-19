import React from "react";
import "./index.scss"; 

const CarouselSkeleton = () => {
  return (
    <>
      <div className="mx-auto skeleton-title h-[60px] w-[500px] bg-gray-500 animate-pulse mb-4"></div>
      <div className="mx-auto skeleton-description h-[14px] w-[300px] bg-gray-500 animate-pulse mb-8"></div>
      <div className="carousel-skeleton h-56 sm:h-[120px] xl:h-80 2xl:h-96 flex flex-col items-center justify-center">
        <div className="flex justify-evenly w-full">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="skeleton-item flex flex-col items-center"
            >
              <div className="skeleton-circle w-[80px] h-[80px] rounded-full bg-gray-500 animate-pulse"></div>
              <div className="skeleton-text mt-3 h-[16px] w-[60px] bg-gray-500 animate-pulse"></div>
              <div className="skeleton-text mt-2 h-[22px] w-[80px] bg-gray-500 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselSkeleton;
