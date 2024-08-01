import { useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import Contentbox from "../Content/Contentbox";
import Hexagons from "./Hexagons";
import styles from "../../Components/Content/Contentbox.module.css";
import { motion } from "framer-motion";
import NavbarContext from "../../Utils/NavbarContext";
const Ourvalues = () => {
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
    <motion.div className="ourvalues-container" ref={ref}>
      <Contentbox
        postTitle={"Our Values"}
        heading={"What Do We Stand For?"}
        paragraph={
          "We aim to strengthen the muslim community at UTS with a range of activities and services"
        }
        styleArg={styles.ourValue}
        animate={true}
      />
      <Hexagons />
    </motion.div>
  );
};

export default Ourvalues;
