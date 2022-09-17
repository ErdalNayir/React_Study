import { get } from "./requests";

export const getWeatherForecastByCityName = (city) =>
  get(`city=${city}&key=[YOUR API KEY HERE]`);
