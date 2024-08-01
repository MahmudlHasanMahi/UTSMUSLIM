import React from "react";
import styles from "../../Navigation/Navigation.module.css";
const Item = ({ icon, title }) => {
  return (
    <div className={styles["mobNav-item"]}>
      <span className={styles["mobNav-icon"]}>{icon}</span>
      <span className={styles["mobNav-title"]}>{title}</span>
    </div>
  );
};

export default Item;
