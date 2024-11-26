import React, { useEffect, lazy, Suspense, useContext } from "react";
import ServicesLandingPage from "../../Components/ServicesLandingPage/ServicesLandingPage";
import PrayerAndSpirituality from "../../Components/PrayerAndSpirituality/PrayerAndSpirituality";
import { setDocumentTitle } from "../../Utils/DocumentTitle";
import { useInView } from "react-intersection-observer";
import Events from "../../Components/Events/Events";
import NavbarContext from "../../Utils/NavbarContext";
const Services = () => {
  const { toogleThemeNavbar } = useContext(NavbarContext);

  toogleThemeNavbar("Light");

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ServicesLandingPage />
        <PrayerAndSpirituality />
        <Events />
      </Suspense>
    </div>
  );
};

export default Services;
