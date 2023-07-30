import React, { useEffect } from "react";
import ServicesLandingPage from "../../Components/ServicesLandingPage/ServicesLandingPage";
import PrayerAndSpirituality from "../../Components/PrayerAndSpirituality/PrayerAndSpirituality";
import { setDocumentTitle } from "../../Utils/DocumentTitle";
import Events from "../../Components/Events/Events";
const Services = () => {
  useEffect(() => {
    setDocumentTitle("Services");
  }, []);
  return (
    <>
      <ServicesLandingPage />
      <PrayerAndSpirituality />
      <Events />
    </>
  );
};

export default Services;
