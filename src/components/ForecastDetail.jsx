import React from "react";

const ForecastDetail = ({ listType }) => {
  return (
    <>
      <div className={`${listType} p-3  grow `}>
        <h1 className="text-slate-400 font-semibold">6:00 AM</h1>
        <span>Weather</span>
        <span className="text-white font-semibold text-lg">25°</span>
      </div>
    </>
  );
};

export default ForecastDetail;
