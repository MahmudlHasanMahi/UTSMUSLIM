import React from "react";
import styles from "./PrayerAndSpirituality.module.css";
import ContentBox from "./ContentBox";
import Cards from "./Cards";
import { useNavUpdateContext } from "../../Utils/NavbarContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const PrayerAndSpirituality = () => {
  const setNavigation = useNavUpdateContext();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (inView) {
      setNavigation(null);
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
