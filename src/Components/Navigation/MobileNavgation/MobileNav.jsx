import styles from "../../Navigation/Navigation.module.css";
import { useContext } from "react";
import NavbarContext from "../../../Utils/NavbarContext";
import Item from "./Item";
import { Home, Apparels, Service, Blogs, Members } from "../../../Svg/LinkIcon";
import { motion } from "framer-motion";
const MobileNav = () => {
  const { toggleMenu } = useContext(NavbarContext);
  const variants = {
    open: {
      left: 0,
      transition: { duration: 0.2, type: "spring", damping: 18 },
    },
    closed: { left: "-100%" },
  };
  const itemVariants = {
    open: {
      transition: { staggerChildren: 0.2, delayChildren: 0.15 },
    },
  };

  return (
    <div
      className={styles["mobileNav-wrapper"]}
      style={{ display: toggleMenu ? "block" : "none" }}
    >
      <motion.div
        className={styles["mobleNav"]}
        variants={variants}
        animate={toggleMenu ? "open" : "closed"}
      >
        <motion.div
          variants={itemVariants}
          className={styles["mobileNav-items-wrapper"]}
        >
          <Item icon={<Home />} title={"Home"} />
          <Item icon={<Service />} title={"Services"} />
          <Item icon={<Members />} title={"Members"} />
          <Item icon={<Apparels />} title={"Apparels"} />
          <Item icon={<Blogs />} title={"Blogs"} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
