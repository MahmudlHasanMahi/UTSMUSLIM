import { useEffect, useRef, useState } from "react";
export const Gregorian = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  const day = JSON.stringify(date).split("-")[2].split("T")[0];
  return {
    day: parseInt(day),
    dayOfweek: date.getDay(),
    month: months[date.getMonth()],
    monthNo: date.getMonth() + 1,
    year: date.getFullYear(),
  };
};
export const time = (isInView) => {
  const getTime = () => {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();

    var period = "";
    if (hour >= 12) {
      period = "pm";
    } else {
      period = "am";
    }
    if (hour == 0) {
      hour = 12;
    } else {
      if (hour > 12) {
        hour = hour - 12;
      }
    }
    minute = update(minute);

    return {
      hour: hour,
      minute: date.getMinutes(),
      amPm: period,
      "24hour": date.getHours(),
      
    }
  };

  const interval = useRef();
  useEffect(() => {
    if (isInView) {
      interval.current = setInterval(() => {
        setTime(getTime());
      }, 1000);
    }
  }, [isInView]);
  useEffect(() => {
    if (!isInView) {
      return () => clearInterval(interval.current);
    }
  });

  function update(t) {
    if (t < 10) {
      return "0" + t;
    } else {
      return t;
    }
  }
  const [timeState, setTime] = useState(getTime());
  return timeState;
};
