import React from "react";
import styles from "./PrayerAndSpirituality.module.css";
import ContentBox from "./ContentBox";
import Cards from "./Cards";
import { useEffect, useContext } from "react";
import NavbarContext from "../../Utils/NavbarContext";
import { useInView } from "react-intersection-observer";
const PrayerAndSpirituality = () => {
  const { toogleThemeNavbar } = useContext(NavbarContext);
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  useEffect(() => {
    if (inView) {
      toogleThemeNavbar("Light");
    } else {
      toogleThemeNavbar(null);
    }
  }, [inView]);
  return (
    <div ref={ref} className={styles["PrayerAndSpirituality-container"]}>
      <div className={styles["MainContentBox-container"]}>
        <ContentBox />
      </div>
      <Cards />
    </div>
  );
};

export default PrayerAndSpirituality;
