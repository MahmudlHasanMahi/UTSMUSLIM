import Contentbox from "../Content/Contentbox";
import Cards from "./Cards";
import styles from "../Content/Contentbox.module.css";
import { useEffect, useContext } from "react";
import NavbarContext from "../../Utils/NavbarContext";
import { useInView } from "react-intersection-observer";
const Ourmission = () => {
  const { toogleThemeNavbar } = useContext(NavbarContext);
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  useEffect(() => {
    if (inView) {
      toogleThemeNavbar("Light");
    }
  }, [inView]);

  return (
    <div ref={ref} className="ourmission-container">
      <Contentbox
        postTitle="Our Mission"
        heading="Giving You The Best Of The Best"
        paragraph="Whether you are looking for prayer facilities, Islamic lectures or social events UTSMS has you covered"
        styleArg={styles.ourMission}
        animate={true}
      />
      <Cards />
    </div>
  );
};

export default Ourmission;
