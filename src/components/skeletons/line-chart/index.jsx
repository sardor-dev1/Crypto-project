import React from "react";
import "./style.scss";

const LineChartSkeleton = () => {
  return (
    <div className="line-chart-skeleton">
      <div className="skeleton-header"></div>
      <div className="skeleton-chart"></div>
      <div className="skeleton-footer">
        <div className="skeleton-button"></div>
        <div className="skeleton-button"></div>
        <div className="skeleton-button"></div>
        <div className="skeleton-button"></div>
      </div>
    </div>
  );
};

export default LineChartSkeleton;
