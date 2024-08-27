import React from "react";
import styles from "./PageUnavailable.module.css";
const PageUnavailable = () => {
  return (
    <div className={styles["pageUnavailable"]}>
      <div className={styles["status-container"]}>
        <div className={styles["status"]}>
          <div className={styles["border"]}></div>
          <div className={styles["background-styling"]}></div>
          <div className={styles["status-code"]}>503</div>
        </div>
        <div className={styles["text-container"]}>
          <div> PAGE NOT FOUND</div>
          <div>THE PAGE YOU ARE LOOKING FOR IS TEMPORARILY UNAVAILABLE</div>
        </div>
      </div>
    </div>
  );
};

export default PageUnavailable;
