import React from "react";
import styles from "./PrayerAndSpirituality.module.css";
const FacilityInfo = ({ svg, title, styleArg }) => {
  return (
    <div className={`${styles["facilityInfo"]} ${styleArg}`}>
      <span className={`${styles["facilitySvg"]} ${styleArg}`}>{svg}</span>
      <span className={`${styles["facilityTitle"]} ${styleArg}`}>{title}</span>
    </div>
  );
};

export default FacilityInfo;
