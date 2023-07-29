import React, { useEffect } from "react";
import ServicesLandingPage from "../../Components/ServicesLandingPage/ServicesLandingPage";
import PrayerAndSpirituality from "../../Components/PrayerAndSpirituality/PrayerAndSpirituality";
import { setDocumentTitle } from "../../Utils/DocumentTitle";
const Services = () => {
  useEffect(() => {
    setDocumentTitle("Services");
  }, []);
  return (
    <>
      <ServicesLandingPage />
      <PrayerAndSpirituality />
    </>
  );
};

export default Services;
