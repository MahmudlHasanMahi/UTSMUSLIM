import React, { useEffect, lazy, Suspense } from "react";
// import ServicesLandingPage from "../../Components/ServicesLandingPage/ServicesLandingPage";
// import PrayerAndSpirituality from "../../Components/PrayerAndSpirituality/PrayerAndSpirituality";
import { setDocumentTitle } from "../../Utils/DocumentTitle";
// import Events from "../../Components/Events/Events";
const ServicesLandingPage = lazy(() =>
  import("../../Components/ServicesLandingPage/ServicesLandingPage")
);
const PrayerAndSpirituality = lazy(() =>
  import("../../Components/PrayerAndSpirituality/PrayerAndSpirituality")
);
const Events = lazy(() => import("../../Components/Events/Events"));
const Services = () => {
  useEffect(() => {
    setDocumentTitle("Services");
  }, []);
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
