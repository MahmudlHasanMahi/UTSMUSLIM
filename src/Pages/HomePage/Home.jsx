import React from "react";
import Aboutus from "../../Components/Aboutus/Aboutus";
import Ourmission from "../../Components/OurMission/Ourmission";
import Landingpage from "../../Components/Landingpage/Landingpage";
import Membership from "../../Components/Membership/Membership";
import Ourvalues from "../../Components/Ourvalues/Ourvalues";
import Quotes from "../../Components/Quotes/Quotes";
import { useEffect } from "react";
import { setDocumentTitle } from "../../Utils/DocumentTitle";
const Home = () => {
  useEffect(() => {
    setDocumentTitle("Home");
  }, []);
  return (
    <>
      <Landingpage />
      <Aboutus />
      <Ourmission />
      <Membership />
      <Ourvalues />
      <Quotes />
    </>
  );
};

export default Home;
