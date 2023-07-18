import React from "react";
import styles from "./PrayerAndSpirituality.module.css";
import ContentBox from "./ContentBox";
import Cards from "./Cards";
const PrayerAndSpirituality = () => {
  return (
    <div className={styles["PrayerAndSpirituality-container"]}>
      <div className={styles["MainContentBox-container"]}>
        <ContentBox />
      </div>
      <Cards />
    </div>
  );
};

export default PrayerAndSpirituality;
