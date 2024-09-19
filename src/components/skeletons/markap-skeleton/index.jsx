import React from "react";
import "./style.scss"; 

const CryptoListSkeleton = () => {
  return (
    <div className="crypto-list-skeleton container">
      <div className="skeleton-header my-20 w-[250px] h-[40px] bg-gray-500 animate-pulse mx-auto mb-6"></div>

      <div className="skeleton-search w-full mx-auto pb-[20px]">
        <div className="skeleton-label w-full h-[48px] bg-gray-500 animate-pulse"></div>
      </div>
    </div>
  );
};

export default CryptoListSkeleton;
