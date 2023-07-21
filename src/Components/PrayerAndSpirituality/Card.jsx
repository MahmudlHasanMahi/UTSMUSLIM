import React, { useEffect, useState } from "react";
import styles from "./PrayerAndSpirituality.module.css";
import FacilityInfo from "./FacilityInfo";
import { useRef, useMemo } from "react";
import { useInView, motion } from "framer-motion";
import { hijriDate as hd } from "../../Utils/HijriDate";
import { Gregorian as gr, time } from "../../Utils/Gregorian";
import { Timings } from "../../PrayerTimings";
import Salah from "./Salah";

import {
  Wc,
  WaterDrop,
  LocalLibrary,
  Badge,
  DryCleaning,
  RecordVoice,
  Calender,
  ClearDay,
  PartlyCloudy,
  Twilight,
  Dark,
  PrayerTimes,
  Location,
} from "../../Svg/ServicesSvg";

export const Card1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : 600,
        transition: {
          duration: 0.5,
          type: "spring",
          damping: 10,
          mass: 0.75,
          stiffness: 100,
        },
      }}
      className={styles["Card1-container"]}
    >
      <div className={styles["Card1-title-location-container"]}>
        <span className={styles["Card1-title"]}>UTS Bon Marche Musalla</span>
        <div className={styles["Card1-location-container"]}>
          <span className={styles["Card1-location"]}>Building 3 Level 5</span>
          <button className={styles["Card1-btn"]}>Maps</button>
        </div>
      </div>
      <div ref={ref} className={styles["Card1-facilityInfo-container"]}>
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
      initial={{ opacity: 0 }}
      animate={{
        opacity: isInView ? 1 : 0,
        transition: {
          duration: 0.2,
          delay: 0.3,
        },
      }}
      className={styles["Card2-container"]}
    >
      <div className={styles["Card2-title-location-container"]}>
        <span className={styles["Card2-title"]}>Jumuah Salah On Campus</span>
        <div className={styles["Card2-location-container"]}>
          <span className={styles["Card2-location"]}>
            Building 4, Ross Milbourne Sports Hall
          </span>
          <button className={styles["Card2-btn"]}>Maps</button>
        </div>
      </div>
      <div ref={ref} className={styles["Card2-facilityInfo-container"]}>
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [hijriDate, setHijriDate] = useState();
  const Gregorian = gr();
  const Time = time(isInView);
  const [nextPrayer, setNextPrayer] = useState();
  useMemo(() => {
    if (isInView) {
      hd().then((data) => {
        const value = {
          day: data.data.hijri.day,
          month: data.data.hijri.month.en,
          year: data.data.hijri.year,
        };
        setHijriDate(value);
      });
      console.log();
    }
  }, [isInView]);

  return (
    <div ref={ref} className={styles["Card3-container"]}>
      <div className={styles["Card3-section-1"]}>
        <div className={styles["Card3-date-svg-container"]}>
          <span className={styles["Card3-svg"]}>{<Calender />}</span>
          <div className={styles["Card3-date-container"]}>
            <span className={styles["Card3-Islamic-date"]}>
              {(hijriDate &&
                `${hijriDate.day} ${hijriDate.month}, ${hijriDate.year}`) ||
                "-------"}
            </span>
            <span className={styles["Card3-Gregorian-date"]}>
              {(Gregorian &&
                `${Gregorian.day} ${Gregorian.month}, ${Gregorian.year}`) ||
                "-------"}
            </span>
          </div>
        </div>
        <div className={styles["Maintime-container"]}>
          <span className={styles["Time"]}>
            {(Time && `${Time.hour}:${Time.minute}`) || ""}
          </span>
          <span className={styles["AmOrPm"]}>
            {(Time && `${Time.amPm}`) || ""}
          </span>
        </div>
        <div className={styles["NextPrayer-Progress-Container"]}>
          <span className={styles["NextPrayer-container"]}>
            Next Prayer:<span className={styles["Next-Prayer"]}> Isha</span>
          </span>
          <span className={styles["Timeleft"]}>1 hr and 24 min left</span>
          <div className={styles["Progress-container"]}>
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: "50%",
                transition: { duration: 2 },
              }}
              className={styles["Progress"]}
            ></motion.div>
          </div>
        </div>
      </div>
      <div className={styles["Card3-section-2"]}>
        <div className={styles["Card3-section-2-Salah-container"]}>
          <Salah
            logo={<ClearDay />}
            prayer={(Timings && Timings[0].prayer) || ""}
            time={
              (Timings &&
                `${Timings[0].hour}:${
                  Timings[0].minute < 10
                    ? "0" + Timings[0].minute
                    : Timings[0].minute
                }`) ||
              ""
            }
            amPm={(Timings && Timings[0].amPm) || ""}
          />
          <Salah
            logo={<PartlyCloudy />}
            prayer={(Timings && Timings[1].prayer) || ""}
            time={
              (Timings &&
                `${Timings[1].hour}:${
                  Timings[1].minute < 10
                    ? "0" + Timings[1].minute
                    : Timings[1].minute
                }`) ||
              ""
            }
            amPm={(Timings && Timings[1].amPm) || ""}
          />
          <Salah
            logo={<Twilight />}
            prayer={(Timings && Timings[2].prayer) || ""}
            time={
              (Timings &&
                `${Timings[2].hour}:${
                  Timings[2].minute < 10
                    ? "0" + Timings[2].minute
                    : Timings[2].minute
                }`) ||
              ""
            }
            amPm={(Timings && Timings[2].amPm) || ""}
            active={true}
          />
          <Salah
            logo={<Dark />}
            prayer={(Timings && Timings[3].prayer) || ""}
            time={
              (Timings &&
                `${Timings[3].hour}:${
                  Timings[3].minute < 10
                    ? "0" + Timings[3].minute
                    : Timings[3].minute
                }`) ||
              ""
            }
            amPm={(Timings && Timings[3].amPm) || ""}
          />
          <Salah
            logo={<PrayerTimes />}
            prayer={(Timings && Timings[4].prayer) || ""}
            time={
              (Timings &&
                `${Timings[4].hour}:${
                  Timings[4].minute < 10
                    ? "0" + Timings[4].minute
                    : Timings[4].minute
                }`) ||
              ""
            }
            amPm={(Timings && Timings[4].amPm) || ""}
          />

          <div className={styles["Card3-location"]}>
            <span className={styles["location-svg"]}>{<Location />}</span>UTS
            Jumuah Hall
          </div>
        </div>
      </div>
    </div>
  );
};
