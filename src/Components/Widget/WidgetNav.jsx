import React from "react";
import styles from "./Widget.module.css";
const WidgetNav = ({ logo, title, color, bg_color }) => {
  return (
    <div
      style={{ color: color, backgroundColor: bg_color }}
      className={styles["widgetNav-wrapper"]}
    >
      <span className={styles["widgetNav-logo"]}>{logo}</span>
      <span className={styles["widgetNav-title"]}>{title}</span>
    </div>
  );
};

export default WidgetNav;
