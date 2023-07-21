import { Gregorian as gr } from "./Gregorian";
export const hijriDate = async (isInView) => {
  const Gregorian = gr();
  const res = await fetch(
    `https://api.aladhan.com/v1/gToH/${Gregorian.day}-${Gregorian.monthNo}-${Gregorian.year}`
  );
  const data = await res.json();
  return data;
};
