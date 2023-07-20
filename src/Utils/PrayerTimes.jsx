const formatter = (time) => {
  const arr = time.split(":");
  const hr =
    (parseInt(arr[0]) > 12 ? parseInt(arr[0]) - 12 : parseInt(arr[0])) ||
    (parseInt(arr[0]) === 0 ? 12 : parseInt(arr[0]));
  const amPm =
    (parseInt(arr[0]) > 12 ? "pm" : "am") ||
    (parseInt(arr[0]) === 0 ? "am" : "pm");

  const min = parseInt(arr[1]) < 10 ? "0" + parseInt(arr[1]) : parseInt(arr[1]);
  const fullTime = `${hr}:${min}`;
  return { hour: hr, minute: min, amPm: amPm, fullTime:fullTime };
};
export const PrayerTimes = async () => {
  const location = await getLocation();
  const req = await fetch(
    `https://api.aladhan.com/v1/timings/20-07-2023?latitude=${location.lat}&longitude=${location.lon}&method=1`
  );
  
  const { code, status, ...data } = await req.json();
  const { timings } = data.data;
  const { Fajr, Dhuhr, Asr, Maghrib, Isha } = timings;
  return {
    Fajr: formatter(Fajr),
    Dhuhr: formatter(Dhuhr),
    Asr: formatter(Asr),
    Maghrib: formatter(Maghrib),
    Isha: formatter(Isha),
  };
};

export const getLocation = async () => {
  const req =
    await fetch(`https://geolocation-db.com/json/8ccfa540-1cde-11ee-b4fb-5f58249fb2cc
`);
  const { latitude, longitude } = await req.json();
  return { lat: latitude, lon: longitude };
};
// 23.7 90.375
