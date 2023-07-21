import React, { useEffect, useState } from "react";
import styles from "./PrayerAndSpirituality.module.css";
import FacilityInfo from "./FacilityInfo";
import { useRef, useMemo } from "react";
import { useInView, motion } from "framer-motion";
import { hijriDate as hd } from "../../Utils/HijriDate";
import { Gregorian as gr, time } from "../../Utils/Gregorian";
import { PrayerTimes as Timings } from "../../Utils/PrayerTimes";
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
import Salah from "./Salah";

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
  const [prayerTimes, setPrayerTimes] = useState();
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
    } else {
      Timings().then((data) => {
        setPrayerTimes(data);
      });
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
                width: isInView ? "50%" : 0,
                transition: { duration: 0.2 },
              }}
              className={styles["Progress"]}
            ></motion.div>
          </div>
        </div>
      </div>
      <div className={styles["Card3-section-2"]}>
        <div className={styles["Card3-section-2-Salah-container"]}>
          <Salah
            logo={<PrayerTimes />}
            prayer={"Fajr"}
            time={(prayerTimes && prayerTimes.Fajr.fullTime) || ""}
            amPm={(prayerTimes && prayerTimes.Fajr.amPm) || ""}
          />
          <Salah
            logo={<ClearDay />}
            prayer={"Dhur"}
            time={(prayerTimes && prayerTimes.Dhuhr.fullTime) || ""}
            amPm={(prayerTimes && prayerTimes.Dhuhr.amPm) || ""}
          />
          <Salah
            logo={<PartlyCloudy />}
            prayer={"Asr"}
            time={(prayerTimes && prayerTimes.Asr.fullTime) || ""}
            amPm={(prayerTimes && prayerTimes.Asr.amPm) || ""}
          />
          <Salah
            logo={<Twilight />}
            prayer={"Margib"}
            time={(prayerTimes && prayerTimes.Maghrib.fullTime) || ""}
            amPm={(prayerTimes && prayerTimes.Maghrib.amPm) || ""}
            active={true}
          />
          <Salah
            logo={<Dark />}
            prayer={"Isha"}
            time={(prayerTimes && prayerTimes.Isha.fullTime) || ""}
            amPm={(prayerTimes && prayerTimes.Isha.amPm) || ""}
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
