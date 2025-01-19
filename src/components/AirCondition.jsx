import React from "react";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { BiWind } from "react-icons/bi";
import { GiWaterDrop } from "react-icons/gi";
import { FaSun } from "react-icons/fa";

const AirCondition = () => {
  return (
    <>
      <div className="p-4 bg-slate-700 rounded-md items-center">
        <div className="flex justify-between items-center">
          <h1 className="text-slate-400 font-light my-2">Air Condition</h1>
          <span className="p-1 text-xs text-white bg-sky-600 rounded-full">
            See more
          </span>
        </div>
        <div className="grid grid-cols-2 items-center gap-6">
          <div className="flex gap-4 items-center">
            <FaTemperatureQuarter className="fill-white text-2xl" />
            <div className="flex flex-col">
              <span className="text-slate-400">Reel Feel</span>
              <span className="text-white font-bold text-xl">30°</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <BiWind className="fill-white text-2xl" />
            <div className="flex flex-col">
              <span className="text-slate-400">Wind</span>
              <span className="text-white font-bold text-xl">30°</span>
            </div>
          </div>{" "}
          <div className="flex gap-2 items-center">
            <GiWaterDrop className="fill-white text-2xl" />
            <div className="flex flex-col">
              <span className="text-slate-400">Chance of rain</span>
              <span className="text-white font-bold text-xl">30°</span>
            </div>
          </div>{" "}
          <div className="flex gap-2 items-center">
            <FaSun className="fill-white text-2xl" />
            <div className="flex flex-col">
              <span className="text-slate-400">UV Index</span>
              <span className="text-white font-bold text-xl">30°</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AirCondition;
