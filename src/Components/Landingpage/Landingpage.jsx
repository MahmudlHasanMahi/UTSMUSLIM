import { motion } from "framer-motion";
import Landingtitle from "./Landingtitle";
import { useNavUpdateContext } from "../../Utils/NavbarContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const Landingpage = () => {
  const setNavigation = useNavUpdateContext();
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  useEffect(() => {
    if (inView) {
      setNavigation(null);
    }
  }, [inView]);
  return (
    <div ref={ref} className="landingpage-container">
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="image-1"
      ></motion.div>
      <Landingtitle />
    </div>
  );
};

export default Landingpage;
