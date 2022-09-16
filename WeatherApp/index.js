import React from "react";
import { useContext } from "react";
import WeatherContext from "./context/WeatherContext";
import styles from "./styles/main.module.css";
import CurrentCard from "./components/currentCard";
import OtherDetails from "./components/otherDetails";
import ClockDate from "./components/clockDate";
import ListForecast from "./components/listForecast";
import DropdownForm from "./components/dropdownForm";
import { getBackground } from "./helpers/weatherHelpers";

function WeatherApp() {
  const { data, setCity, city } = useContext(WeatherContext);

  const handleCityOption = () => {
    setCity("Diyarbakır");
  };

  return (
    <div>
      <div className={styles.overlay}></div>
      <div className={styles.mainWrapper}>
        <img className={styles.backgroundImg} src={getBackground(city)}></img>
        <section className={styles.info}>
          <div className={styles.details}>
            <ClockDate></ClockDate>
            <OtherDetails data={data}></OtherDetails>
          </div>
          <div className={styles.formPlace}>
            <DropdownForm></DropdownForm>
          </div>
        </section>
        <section className={styles.forecast}>
          <CurrentCard data={data}></CurrentCard>
          <ListForecast></ListForecast>
        </section>
      </div>
    </div>
  );
}

export default WeatherApp;
