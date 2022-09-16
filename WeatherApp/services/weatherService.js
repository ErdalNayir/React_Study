import { get } from "./requests";

export const getWeatherForecastByCityName = (city) =>
  get(`city=${city}&key=70185c7c92b54b67907ddfc391a4d59f`);
