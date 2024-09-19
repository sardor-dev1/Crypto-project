import React from "react";
import "./index.scss";

const HeaderSkeleton = () => {
  return (
    <header className="bg-[#15171B] fixed w-full shadow-lg z-20 skeleton-header">
      <div className="container">
        <nav className="flex justify-between items-center py-2">
          <div className="skeleton-brand w-[150px] h-[30px] bg-gray-500 animate-pulse"></div>

          <div className="flex items-center gap-6">
            <div className="skeleton-dropdown w-[60px] h-[40px] bg-gray-500 animate-pulse"></div>

            <div className="skeleton-button w-[120px] h-[40px] bg-gray-500 animate-pulse"></div>

          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSkeleton;
