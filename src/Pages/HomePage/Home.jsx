import React, { lazy, Suspense } from "react";
import Aboutus from "../../Components/Aboutus/Aboutus";
import Ourmission from "../../Components/OurMission/Ourmission";
import Landingpage from "../../Components/Landingpage/Landingpage";
import Membership from "../../Components/Membership/Membership";
import Ourvalues from "../../Components/Ourvalues/Ourvalues";
import Quotes from "../../Components/Quotes/Quotes";

import { useEffect } from "react";
import { setDocumentTitle } from "../../Utils/DocumentTitle";
import PrayerWidget from "../../Components/Widget/prayerWidget";
// const Landingpage = lazy(() =>
//   import("../../Components/Landingpage/Landingpage")
// );
// const Ourmission = lazy(() => import("../../Components/OurMission/Ourmission"));
// const Aboutus = lazy(() => import("../../Components/Aboutus/Aboutus"));
// const Membership = lazy(() => import("../../Components/Membership/Membership"));
// const Ourvalues = lazy(() => import("../../Components/Ourvalues/Ourvalues"));
// const Quotes = lazy(() => import("../../Components/Quotes/Quotes"));

const Home = () => {
  const handleLoading = () => {
    console.log("called");
  };
  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);
  useEffect(() => {
    setDocumentTitle("Home");
  }, []);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Landingpage />
        <PrayerWidget />
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
