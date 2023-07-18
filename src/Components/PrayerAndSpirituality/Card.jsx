import React from "react";
import styles from "./PrayerAndSpirituality.module.css";
import FacilityInfo from "./FacilityInfo";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import {
  Wc,
  WaterDrop,
  LocalLibrary,
  Badge,
  DryCleaning,
  RecordVoice,
} from "../../Svg/FacilitySvg";

export const Card1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : -100,
        transition: {
          duration: 0.2,
          type: "spring",
          damping: 6,
          mass: 0.75,
          stiffness: 100,
        },
      }}
      className={styles["Card1-container"]}
    >
      <div className={styles["Card1-title-location-container"]}>
        <span className={styles["Card1-title"]}>UTS Bon Marche Musalla</span>
        <div className={styles["Card1-location-container"]}>
          <span ref={ref} className={styles["Card1-location"]}>
            Building 3 Level 5
          </span>
          <button className={styles["Card1-btn"]}>Maps</button>
        </div>
      </div>
      <div className={styles["Card1-facilityInfo-container"]}>
        <FacilityInfo
          svg={<Wc />}
          title={"Separate brothers and sisters rooms"}
          styleArg={styles.Card1}
        />
        <FacilityInfo
          svg={<WaterDrop />}
          title={"Wudhu facilities on same floor"}
          styleArg={styles.Card1}
        />
        <FacilityInfo
          svg={<LocalLibrary />}
          title={"Large collection of Islamic resources "}
          styleArg={styles.Card1}
        />
        <FacilityInfo
          svg={<Badge />}
          title={"UTS ID card access only*"}
          styleArg={styles.Card1}
        />
        <FacilityInfo
          svg={<DryCleaning />}
          title={"Hijabs and Sarongs Available"}
          styleArg={styles.Card1}
        />
      </div>
      <span className={styles["Card1-info"]}>
        * If you are a UTS College Student, contact us and we will organise
        access for you
      </span>
    </motion.div>
  );
};

export const Card2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : 100,
        transition: {
          duration: 0.2,
          delay: 0.5,
          type: "spring",
          damping: 9,
          mass: 0.75,
          stiffness: 100,
        },
      }}
      className={styles["Card2-container"]}
    >
      <div className={styles["Card2-title-location-container"]}>
        <span className={styles["Card2-title"]}>Jumuah Salah On Campus</span>
        <div className={styles["Card2-location-container"]}>
          <span ref={ref} className={styles["Card2-location"]}>
            Building 4, Ross Milbourne Sports Hall
          </span>
          <button className={styles["Card2-btn"]}>Maps</button>
        </div>
      </div>
      <div className={styles["Card2-facilityInfo-container"]}>
        <FacilityInfo
          svg={<Wc />}
          title={"Brothers and sisters section"}
          styleArg={styles.Card2}
        />
        <FacilityInfo
          svg={<WaterDrop />}
          title={"Wudhu facilities "}
          styleArg={styles.Card2}
        />

        <FacilityInfo
          svg={<Badge />}
          title={"UTS ID card access only*"}
          styleArg={styles.Card2}
        />
        <FacilityInfo
          svg={<RecordVoice />}
          title={"Khutbah in english"}
          styleArg={styles.Card2}
        />
      </div>
    </motion.div>
  );
};

export const Card3 = () => {
  return <div className={styles["Card3-container"]}>Card3</div>;
};
