import React, { lazy, Suspense } from "react";
import Aboutus from "../../Components/Aboutus/Aboutus";
import Ourmission from "../../Components/OurMission/Ourmission";
import Landingpage from "../../Components/Landingpage/Landingpage";
import Membership from "../../Components/Membership/Membership";
import Ourvalues from "../../Components/Ourvalues/Ourvalues";
import Quotes from "../../Components/Quotes/Quotes";
import AboutImageBox from "../../Components/Aboutus/AboutImageBox";
import { useEffect } from "react";
import { setDocumentTitle } from "../../Utils/DocumentTitle";

// import PrayerWidget from "../../Components/Widget/PrayerWidget";
const Home = () => {
  useEffect(() => {
    setDocumentTitle("Home");
  }, []);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutImageBox />
        <Landingpage />
        {/* <PrayerWidget /> */}
        <Aboutus />
        <Ourmission />
        <Membership />
        <Ourvalues />
        <Quotes />
      </Suspense>
    </>
  );
};

export default Home;
