import React from "react";
import styles from "./PrayerAndSpirituality.module.css";
const Salah = ({ logo, prayer, active = false, time, amPm }) => {
  return (
    <div
      className={`${styles["Salah-container"]} ${
        active ? styles["active"] : null
      }`}
    >
      <span className={styles["Day-svg"]}>{logo}</span>
      <span className={styles["Salah"]}>{prayer}</span>
      <span className={styles["SalahTime-container"]}>
        <span className={styles["SalahTime"]}>{ time}</span>
        <span className={styles["SalahTime-AmOrPm"]}>{` ${amPm}`}</span>
      </span>
    </div>
  );
};

export default Salah;
