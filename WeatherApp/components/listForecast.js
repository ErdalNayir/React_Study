import React from "react";
import WeatherContext from "../context/WeatherContext";
import ForecastCard from "../components/forecastCard";
import { dayNames } from "../helpers/weatherHelpers";
import { useContext } from "react";
import styles from "../styles/main.module.css";

function ListForecast() {
  const { data } = useContext(WeatherContext);

  let date = new Date();

  console.log(data);

  return typeof data["data"] != "undefined"
    ? data["data"].map((data, index) => {
        if (index > 0 && index < 7) {
          return (
            <ForecastCard
              key={index}
              code={typeof data != "undefined" ? data["weather"]["code"] : 803}
              maxTemp={
                typeof data != "undefined" ? (
                  data["high_temp"]
                ) : (
                  <img
                    className={styles.loadingGif}
                    src={require("../assets/gifs/loading.gif")}
                  ></img>
                )
              }
              minTemp={
                typeof data != "undefined" ? (
                  data["min_temp"]
                ) : (
                  <img
                    className={styles.loadingGif}
                    src={require("../assets/gifs/loading.gif")}
                  ></img>
                )
              }
              dayname={dayNames[(date.getDay() + index) % 7]}
            ></ForecastCard>
          );
        }
      })
    : "";
}

export default ListForecast;
