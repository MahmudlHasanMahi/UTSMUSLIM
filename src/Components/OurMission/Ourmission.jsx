import Contentbox from "../Content/Contentbox";
import Cards from "./Cards";
import styles from "../Content/Contentbox.module.css";
import { useNavUpdateContext } from "../../Utils/NavbarContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const Ourmission = () => {
  const setNavigation = useNavUpdateContext();
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  useEffect(() => {
    if (inView) {
      setNavigation("Light");
    }
    console.log(inView);
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
