import React, { useRef } from "react";
import styles from "./Widget.module.css";
import { NextPrayer } from "../../Utils/NextPrayer";
import { time } from "../../Utils/Gregorian";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ClearDay,
  PartlyCloudy,
  Twilight,
  Dark,
  PrayerTimes,
} from "../../Svg/ServicesSvg";
const NextPrayerWidget = () => {
  const PrayerSvgs = [
    <ClearDay />,
    <PartlyCloudy />,
    <Twilight />,
    <Dark />,
    <PrayerTimes />,
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const Time = time(isInView);
  const PrayerInfo = NextPrayer(Time);
  const navigate = useNavigate();
  const Redirect = () => {
    navigate("/services#PrayerTimes");
    console.log(window.set);
  };
  return (
    <div
      ref={ref}
      className={styles["nextPrayerWidget-container"]}
      onClick={Redirect}
    >
      {PrayerInfo && (
        <>
          <span className={styles["prayerSvg"]}>
            {PrayerSvgs[PrayerInfo.index]}
          </span>
          <span className={styles["nextprayer"]}>
            Next Prayer: {PrayerInfo.nextprayer.prayer}
          </span>
          <div className={styles["time-wrapper"]}>
            <span className={styles["time"]}>
              {`${PrayerInfo.nextprayer.hour}:${PrayerInfo.nextprayer.minute}`}
              <span className={styles["amPm"]}>
                {PrayerInfo.nextprayer.amPm}
              </span>
            </span>
          </div>
          <div className={styles["progress-wrapper"]}>
            <div
              style={{ width: `${PrayerInfo.progress.progress}%` }}
              className={styles["progress"]}
            ></div>
          </div>
        </>
      )}
    </div>
  );
};

export default NextPrayerWidget;
