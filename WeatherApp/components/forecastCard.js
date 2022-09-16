import React from "react";
import { getImages } from "../helpers/weatherHelpers";
import styles from "../styles/main.module.css";
import PropTypes from "prop-types";

function ForecastCard({ code, maxTemp, minTemp, dayname }) {
  return (
    <div className={styles.forecastTemp}>
      <div className={styles.temps}>
        <div className={styles.nextDay}>{dayname}</div>
        <img src={getImages(code)} className={styles.forecastImg}></img>
        <div className={styles.forecastTemps}>
          <div className={styles.forecastTempMax}>{maxTemp}&deg;</div>
          <div className={styles.forecastTempMin}>{minTemp}&deg;</div>
        </div>
      </div>
    </div>
  );
}

ForecastCard.propTypes = {
  code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  maxTemp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  minTemp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  dayname: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ForecastCard;
