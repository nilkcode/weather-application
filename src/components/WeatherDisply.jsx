import React from "react";
import { WiDegrees } from "react-icons/wi";

const WeatherDisply = () => {
  return (
    <>
      <div className=" grid grid-cols-3 items-center">
        <div className=" col-span-2  flex flex-col gap-6">
          <div>
            <h2 className="text-4xl font-semibold text-white/100">Mumbai</h2>
            <span className="text-slate-400 font-light">Chance of Rain:0%</span>
          </div>
          <div>
            <h1 className="flex relative flex-row text-5xl font-semibold text-white/100 ">
              44
              <WiDegrees className="fill-white text-9xl absolute left-5 top-[-27px]" />
            </h1>
          </div>
        </div>

        <div className="col-span-1">
          <img src="src/assets/output-onlinegiftools.gif" />
        </div>
      </div>
    </>
  );
};

export default WeatherDisply;
