import { useEffect } from "react";
import { useNavUpdateContext } from "../../Utils/NavbarContext";
import { useInView } from "react-intersection-observer";
import Contentbox from "../Content/Contentbox";
import Hexagons from "./Hexagons";
import styles from "../../Components/Content/Contentbox.module.css";
const Ourvalues = () => {
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
    <div ref={ref} className="ourvalues-container">
      <Contentbox
        postTitle={"Our Values"}
        heading={"What Do We Stand For?"}
        paragraph={
          "We aim to strengthen the muslim community at UTS with a range of activities and services"
        }
        styleArg={styles.ourMission}
        animate={true}
      />
      <Hexagons />
    </div>
  );
};

export default Ourvalues;
