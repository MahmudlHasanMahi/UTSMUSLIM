import React, { lazy, Suspense } from "react";
import Aboutus from "../../Components/Aboutus/Aboutus";
import Ourmission from "../../Components/OurMission/Ourmission";
import Landingpage from "../../Components/Landingpage/Landingpage";
import Membership from "../../Components/Membership/Membership";
import Ourvalues from "../../Components/Ourvalues/Ourvalues";
import Quotes from "../../Components/Quotes/Quotes";
import { useEffect } from "react";
import { setDocumentTitle } from "../../Utils/DocumentTitle";
import Prayerwidget from "../../Components/Widget/Prayerwidget";
import Seo from "../../Components/Seo/Seo";
const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Seo
          headTitle={"Home"}
          title={"UTSMS: Where Muslims Connect, Learn and Grow"}
          description={
            "We offer spiritual guidance, academic support, social events, and volunteering opportunities."
          }
        />

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
