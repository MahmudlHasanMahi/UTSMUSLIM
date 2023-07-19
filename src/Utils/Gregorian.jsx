import { useEffect, useState } from "react";
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
  const [time, setTime] = useState();
  useEffect(() => {
    setInterval(() => {
      const interval = new Date();
      const fortime = interval.toLocaleTimeString();
      const timer = fortime.split(":"); // here the time is like "16:14"
      let meridiemTime =
        (timer[0] >= 12 && (timer[0] - 12 || 12) + "-" + timer[1] + "-pm") ||
        (Number(timer[0]) || 12) + "-" + timer[1] + "-am";
      setTime(meridiemTime);
    }, 0);
  }, [time]);

  const date = new Date();
  const day = JSON.stringify(date).split("-")[1][1];

  return {
    day: day,
    month: months[date.getMonth()],
    year: date.getFullYear(),
    hour: (time && time.split("-")[0]) || "",
    minute: (time && time.split("-")[1]) || "",
    amPm: (time && time.split("-")[2]) || "",
  };
};
