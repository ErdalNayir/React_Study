import React from "react";
import styles from "../styles/main.module.css";
import { useEffect, useState } from "react";
import { dayNames, monthNames } from "../helpers/weatherHelpers";

function ClockDate() {
  let date = new Date();

  let year = date.getFullYear();
  let dayOfMonth = date.getDate();
  let month = monthNames[date.getMonth()];
  let day = dayNames[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let time = hours + ":" + minutes;

  const [datetime, setDate] = useState({
    year: year,
    dayofmonth: dayOfMonth,
    month: month,
    day: day,
    hours: hours,
    minutes: minutes,
    time: time,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setDate({
        year: year,
        dayofmonth: dayOfMonth,
        month: month,
        day: day,
        hours: hours,
        minutes: minutes,
        time: time,
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [datetime]);

  return (
    <div>
      <div className={styles.currentTime}>{datetime.time}</div>
      <div className={styles.datetime}>
        <div className={styles.dayName}>{datetime.day},</div>
        <div className={styles.date}>
          {datetime.dayofmonth}
          <span> {datetime.month}</span>
          <span> {datetime.year}</span>
        </div>
      </div>
    </div>
  );
}

export default ClockDate;
