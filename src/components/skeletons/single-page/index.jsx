import React from "react";

export default function Skeleton() {
  return (
    <div className="animate-pulse p-[40px]">
      <div className="grid grid-cols-7 h-[100vh] w-full max-w-[1900px] mx-auto">
        {/* Left Section */}
        <div className="border-r-2 border-gray-400 px-[20px] col-span-2">
          <div className="flex items-center justify-center">
            <div className="w-[200px] h-[200px] bg-gray-700 rounded-md"></div>
          </div>
          <div className="mt-[20px]">
            <div className="h-[48px] bg-gray-700 rounded-md mb-[20px]"></div>
            <div className="h-[18px] bg-gray-700 rounded-md mb-[10px]"></div>
            <div className="h-[18px] bg-gray-700 rounded-md"></div>
          </div>
          <div className="py-[15px]">
            <div className="h-[24px] bg-gray-700 rounded-md mb-[10px]"></div>
            <div className="h-[24px] bg-gray-700 rounded-md mb-[10px]"></div>
            <div className="h-[24px] bg-gray-700 rounded-md"></div>
          </div>
        </div>

        <div className="col-span-5 p-[40px]">
          <div className="h-[90%] w-full bg-gray-700 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
