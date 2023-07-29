import React, { useEffect, useState } from "react";
import styles from "./PrayerAndSpirituality.module.css";
import FacilityInfo from "./FacilityInfo";
import { useRef, useMemo } from "react";
import { useInView, motion, useTransform, useScroll } from "framer-motion";
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
  const [prayers, setPrayers] = useState();
  const [nextPrayer, setNextPrayer] = useState();
  const [timeLeft, setTimeLeft] = useState([]);

  function timeDifference(date1, date2) {
    var difference = date1.getTime() - date2.getTime();

    var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60;

    var minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60;

    setTimeLeft({
      hoursDifference: hoursDifference,
      minutesDifference: minutesDifference,
      Progress: hoursDifference * 60 + minutesDifference,
      hoursForHTML:
        hoursDifference !== 0
          ? minutesDifference === 0
            ? hoursDifference + " hr left"
            : hoursDifference + " hr and"
          : "",
      minutesForHTML:
        minutesDifference !== 0 ? minutesDifference + " min left" : "",
    });
  }

  const findNextPrayer = (Time) => {
    let Timing = Timings;
    let formatted = Time["24hour"];
    Timing = Timing.map((data) => {
      return { ...data, active: false };
    });

    let nextPrayer = [];

    function array_move(arr, old_index, new_index) {
      if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
          arr.push(undefined);
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      return arr;
    }

    const getPrayerFormatted = (value) => {
      const hourFormatted =
        (value.hour === 12 && value.amPm === "pm" ? value.hour : 0) ||
        (value.hour < 12 && value.amPm === "am" ? value.hour : value.hour + 12);
      return hourFormatted;
    };

    for (let i = 1; i <= Timing.length - 1; i++) {
      if (Gregorian.dayOfweek === 5) {
        array_move(Timing, 0, 1);
      }
      let hr = getPrayerFormatted(Timing[i]);
      let min = Timing[i].minute;

      if (hr - formatted >= 0) {
        if (hr - formatted === 0 && min - Time.minute <= 0) {
          if (Timing[i + 1] === undefined) {
            if (Gregorian.dayOfweek + 1 !== 5) {
              nextPrayer.push(Timing[1]);
              Timing[1].active = true;
            } else {
              array_move(Timing, 1, 0);
              nextPrayer.push(Timing[1]);
              Timing[1].active = true;
            }
          } else {
            nextPrayer.push(Timing[i + 1]);
            Timing[i + 1].active = true;
          }
        } else {
          nextPrayer.push(Timing[i]);
          Timing[i].active = true;
          break;
        }
      }

      if (Timing[i + 1] === undefined) {
        if (Gregorian.dayOfweek + 1 !== 5) {
          Timing[1].active = true;
          nextPrayer.push(Timing[1]);
          break;
        } else {
          Timing[0].active = true;
          nextPrayer.push(Timing[0]);
          break;
        }
      }
    }
    setNextPrayer(nextPrayer[0]);
    setPrayers(
      Timings.map((data) => {
        if (data.prayer === nextPrayer[0].prayer) {
          return nextPrayer[0];
        } else {
          return { ...data, active: false };
        }
      })
    );

    const date1 = new Date(0, 0, 0, Time["24hour"], Time.minute, 0, 0);
    ////////////////////////////,hour,minutes,seconds,
    const date2 = new Date(
      0,
      0,
      nextPrayer[0].prayer === Timings[4].prayer
        ? nextPrayer[0].prayer === Timings[0].prayer ||
          nextPrayer[0].prayer === Timings[1].prayer
          ? 1
          : 0
        : Time["24hour"] - getPrayerFormatted(Timings[4]) >= 0
        ? Time.minute - Timings[4].minute >= 0 ||
          Time.minute - Timings[4].minute <= 0
          ? 1
          : 0
        : 0,

      getPrayerFormatted(nextPrayer[0]),
      nextPrayer[0].minute,
      0,
      0
    ); ///// Next Prayer
    timeDifference(date2, date1);
  };

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
    }
  }, [isInView]);
  useEffect(() => {
    findNextPrayer(Time);
  }, [Time]);

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
            {(Time &&
              `${Time.hour}:${
                Time.minute < 10 ? "0" + Time.minute : Time.minute
              }`) ||
              ""}
          </span>
          <span className={styles["AmOrPm"]}>
            {(Time && `${Time.amPm}`) || ""}
          </span>
        </div>
        <div className={styles["NextPrayer-Progress-Container"]}>
          <span className={styles["NextPrayer-container"]}>
            Next Prayer:
            <span className={styles["Next-Prayer"]}>
              {(nextPrayer && nextPrayer.prayer) || "Loading"}
            </span>
          </span>
          <span className={styles["Timeleft"]}>
            {timeLeft
              ? `${timeLeft.hoursForHTML} ${timeLeft.minutesForHTML}`
              : "Waiting..."}
          </span>
          <div className={styles["Progress-container"]}>
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${50}%`,
                transition: { duration: 1 },
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
            prayer={(prayers && prayers[1].prayer) || ""}
            time={
              (prayers &&
                `${prayers[1].hour}:${
                  prayers[1].minute < 10
                    ? "0" + prayers[1].minute
                    : prayers[1].minute
                }`) ||
              ""
            }
            amPm={(prayers && prayers[1].amPm) || ""}
            active={prayers ? prayers[1].active : false}
          />
          <Salah
            logo={<PartlyCloudy />}
            prayer={(prayers && prayers[2].prayer) || ""}
            time={
              (prayers &&
                `${prayers[2].hour}:${
                  prayers[2].minute < 10
                    ? "0" + prayers[2].minute
                    : prayers[2].minute
                }`) ||
              ""
            }
            amPm={(prayers && prayers[2].amPm) || ""}
            active={prayers ? prayers[2].active : false}
          />
          <Salah
            logo={<Twilight />}
            prayer={(prayers && prayers[3].prayer) || ""}
            time={
              (prayers &&
                `${prayers[3].hour}:${
                  prayers[3].minute < 10
                    ? "0" + prayers[3].minute
                    : prayers[3].minute
                }`) ||
              ""
            }
            amPm={(prayers && prayers[3].amPm) || ""}
            // active={true}
            active={prayers ? prayers[3].active : false}
          />
          <Salah
            logo={<Dark />}
            prayer={(prayers && prayers[4].prayer) || ""}
            time={
              (prayers &&
                `${prayers[4].hour}:${
                  prayers[4].minute < 10
                    ? "0" + prayers[4].minute
                    : prayers[4].minute
                }`) ||
              ""
            }
            amPm={(prayers && prayers[4].amPm) || ""}
            active={prayers ? prayers[4].active : false}
          />
          <Salah
            logo={<PrayerTimes />}
            prayer={(prayers && prayers[0].prayer) || ""}
            time={
              (prayers &&
                `${prayers[0].hour}:${
                  prayers[0].minute < 10
                    ? "0" + prayers[0].minute
                    : prayers[0].minute
                }`) ||
              ""
            }
            amPm={(prayers && prayers[0].amPm) || ""}
            active={prayers ? prayers[0].active : false}
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
