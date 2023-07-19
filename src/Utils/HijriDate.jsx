import { useState, useEffect } from "react";
export const hijriDate = async (isInView) => {
  const res = await fetch("https://api.aladhan.com/v1/gToH/07-12-2014");
  const data = await res.json();
  return data;
};
