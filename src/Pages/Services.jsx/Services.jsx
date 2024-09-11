import React, { useEffect, lazy, Suspense } from "react";
import ServicesLandingPage from "../../Components/ServicesLandingPage/ServicesLandingPage";
import PrayerAndSpirituality from "../../Components/PrayerAndSpirituality/PrayerAndSpirituality";
import { setDocumentTitle } from "../../Utils/DocumentTitle";
import Events from "../../Components/Events/Events";
const Services = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ServicesLandingPage />
        <PrayerAndSpirituality />
        <Events />
      </Suspense>
    </>
  );
};

export default Services;
