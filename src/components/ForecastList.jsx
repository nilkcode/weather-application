import React from "react";
import ForecastDetail from "./ForecastDetail";

const ForecastList = ({
  headingName,
  weatherDataDummy,
  layoutType,
  listType,
}) => {
  console.log(weatherDataDummy);
  return (
    <>
      <div className="p-4 bg-slate-700 flex-grow rounded-md items-center">
        <h1 className="text-slate-400 font-light my-2">{headingName}</h1>

        <ul className={`flex  ${layoutType}   `}>
          {weatherDataDummy.map((item) => (
            <ForecastDetail listType={listType} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ForecastList;
