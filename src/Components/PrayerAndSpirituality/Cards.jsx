import React from "react";
import styles from "./PrayerAndSpirituality.module.css";
import { Card1, Card2, Card3 } from "./Card";
const Cards = () => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["Card-Section-1"]}>
        
        <Card1 />
        <Card2 />
      </div>
      <Card3 />
    </div>
  );
};

export default Cards;
