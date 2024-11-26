import { useEffect, useState, useRef, useMemo } from "react";
import { Timings } from "../PrayerTimings";
import { Gregorian as gr, time } from "./Gregorian";

const getPrayerFormatted = (value) => {
  const hourFormatted =
    (value.hour === 12 && value.amPm === "pm" ? value.hour : 0) ||
    (value.hour < 12 && value.amPm === "am" ? value.hour : value.hour + 12);
  return hourFormatted;
};

const timeDifference = (t1day, t1hour, t1min, t2day, t2hour, t2min) => {
  let difference =
    new Date(
      0,
      0,
      t2day, /////day
      t2hour, /////hour
      t2min, /////min
      0,
      0
    ) -
    new Date(
      0,
      0,
      t1day, /////day
      t1hour, /////hour
      t1min, /////min
      0,
      0
    );

  let totalMinutes = Math.floor(difference / 1000 / 60);
  let hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;

  let minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;
  return [hoursDifference, minutesDifference, totalMinutes];
};

const getPrayerTimeDifference = (t1, t2, currentTime) => {
  let day = 0;
  if (t2.prayer == "Jumuah" || t2.prayer == "Dhuhr") {
    day = 1;
  }
  const PrayerTimeDifference = timeDifference(
    0,
    getPrayerFormatted(t1),
    t1.minute,
    day,
    getPrayerFormatted(t2),
    t2.minute
  );
  if (t1.prayer == "Isha" && currentTime["24hour"] <= getPrayerFormatted(t1)) {
    day = 1;
  } else {
    day = 0;
  }

  const currentDifference = timeDifference(
    0,
    getPrayerFormatted(t1),
    t1.minute,
    day,
    currentTime["24hour"],
    currentTime.minute
  );

  const timeLeft = timeDifference(
    0,
    currentDifference[0],
    currentDifference[1],
    0,
    PrayerTimeDifference[0],
    PrayerTimeDifference[1]
  );

  let format = "";
  if (timeLeft[0] <= 0) {
    format = `${timeLeft[1]} min left`;
  } else if (timeLeft[1] <= 0) {
    format = `${timeLeft[0]} hr left`;
  } else {
    format = `${timeLeft[0]} hr and ${timeLeft[1]} min left`;
  }

  const progressBar = 100 - (timeLeft[2] / PrayerTimeDifference[2]) * 100;

  return { format: format, progress: progressBar };
};
export const getPrayer = (Gregorian, Time) => {
  let nextprayer = null;
  let previousprayer = null;
  let i = 0;
  if (Gregorian.dayOfweek != 5) {
    i = 1;
  } else {
    i = 0;
  }
  while (true) {
    if (i > 4) {
      if (Gregorian.dayOfweek == 4) {
        i = 0;
      } else {
        i = 1;
      }

      previousprayer = Timings[4];

      break;
    }

    if (
      Time["24hour"] < getPrayerFormatted(Timings[i]) ||
      (Time["24hour"] == getPrayerFormatted(Timings[i]) &&
        Time.minute <= Timings[i].minute)
    ) {
      let temp = i - 1;
      if (temp < 0 || temp == 0) {
        previousprayer = Timings[4];
      } else if (temp == 1 && Gregorian.dayOfweek == 5) {
        previousprayer = Timings[temp - 1];
      } else {
        previousprayer = Timings[temp];
      }

      break;
    } else {
      i++;
    }
  }
  nextprayer = Timings[i];

  const prayerTimeDifference = getPrayerTimeDifference(
    previousprayer,
    nextprayer,
    Time
  );

  return {
    nextprayer: nextprayer,
    progress: prayerTimeDifference,
    index: i,
  };
};

export const NextPrayer = (Time) => {
  const Gregorian = gr();
  const [prayer, setprayer] = useState();
  useEffect(() => {
    setprayer(getPrayer(Gregorian, Time));
  }, [Time]);
  return prayer;
};
