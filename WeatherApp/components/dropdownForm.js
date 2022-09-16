import React from "react";
import styles from "../styles/main.module.css";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

function DropdownForm() {
  const { setCity } = useContext(WeatherContext);

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <form>
      <select
        className={styles.selectCity}
        name="languages"
        id="lang"
        onChange={handleChangeCity}
      >
        <option value="Ankara">Ankara</option>
        <option value="Bursa">Bursa</option>
        <option value="Istanbul">İstanbul</option>
        <option value="Adana">Adana</option>
        <option value="Izmir">İzmir</option>
      </select>
    </form>
  );
}

export default DropdownForm;
