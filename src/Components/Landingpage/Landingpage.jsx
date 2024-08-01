import { motion } from "framer-motion";
import Landingtitle from "./Landingtitle";
import { useInView } from "react-intersection-observer";
import { useEffect, useContext } from "react";
import NavbarContext from "../../Utils/NavbarContext";

const Landingpage = () => {
  const { toogleThemeNavbar } = useContext(NavbarContext);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      toogleThemeNavbar(null);
    }
  }, [inView]);

  return (
    <div ref={ref} className="landingpage-container">
      <motion.img
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="image-1"
        src="
        https://ik.imagekit.io/ytjlb3rhi/assets/Image-1.png?updatedAt=1689504714926"
        alt="Univeristy Of Technology Campus Sydney"
        srcset=""
        loading="lazy"
      />

      <Landingtitle />
    </div>
  );
};

export default Landingpage;
