import React, { lazy, Suspense } from "react";
import Aboutus from "../../Components/Aboutus/Aboutus";
import Ourmission from "../../Components/OurMission/Ourmission";
import Landingpage from "../../Components/Landingpage/Landingpage";
import Membership from "../../Components/Membership/Membership";
import Ourvalues from "../../Components/Ourvalues/Ourvalues";
import Quotes from "../../Components/Quotes/Quotes";
import { setDocumentTitle } from "../../Utils/DocumentTitle";
import Prayerwidget from "../../Components/Widget/Prayerwidget";
const Home = () => {
  setDocumentTitle("Home");
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Landingpage />
        <Prayerwidget />
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
