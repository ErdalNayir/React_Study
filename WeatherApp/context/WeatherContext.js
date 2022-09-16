import { createContext } from "react";
import { getWeatherForecastByCityName } from "../services/weatherService";
import { useEffect } from "react";
import { useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [city, setCity] = useState("Ankara");

  useEffect(() => {
    getWeatherForecastByCityName(city).then((weather) => {
      setData(weather);
    });
  }, [city]);

  const datas = { data, setCity, city };

  return (
    <WeatherContext.Provider value={datas}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
