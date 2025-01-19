import "./App.css";
import AirCondition from "./components/AirCondition";
import CitySearch from "./components/CitySearch";
import ForecastDetail from "./components/ForecastDetail";
import ForecastList from "./components/ForecastList";
import WeatherDisply from "./components/WeatherDisply";
const weatherData = [
  {
    time: "5:00 AM",
    weather: "Mosty Cloudy",
    tem: "25°",
  },
  {
    time: "9:00 AM",
    weather: "Sunny Cloudy",
    tem: "25°",
  },
  {
    time: "12:00 PM",
    weather: "Mosty Cloudy",
    tem: "25°",
  },
  {
    time: "3:00 PM",
    weather: "Rainy",
    tem: "25°",
  },
  {
    time: "6:00 PM",
    weather: "Mosty Cloudy",
    tem: "35°",
  },
  {
    time: "9:00 PM",
    weather: "Sunny",
    tem: "30°",
  },
];

function App() {
  return (
    <>
      <div className="">
        <div className=" grid grid-cols-3  gap-4 p-2border-2 w-[70%] my-10  m-auto border-red-50 ">
          <div className="citySearch col-span-3 mt-3">
            <CitySearch />
          </div>

          <div className="WeatherDisply  col-span-2 ">
            <WeatherDisply />
          </div>
          <div className="ForecastList flex  row-span-3 ">
            <ForecastList
              weatherDataDummy={weatherData}
              headingName={"7 Day's Forcast"}
              layoutType={"flex-col divide-y-[1px] divide-white/25 "}
              listType={"flex row justify-between text-center"}
            />
          </div>
          <div className="ForecastList col-span-2 ">
            <ForecastList
              weatherDataDummy={weatherData}
              headingName={"Today's Forcast"}
              layoutType={"row divide-x-[1px] divide-white/25"}
              listType={"flex gap-2 flex-col justify-between text-center"}
            />
          </div>
          <div className="WeatherDisply col-span-2 ">
            <AirCondition />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
