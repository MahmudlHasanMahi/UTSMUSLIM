import styles from "../../Navigation/Navigation.module.css";
import { useContext, useEffect } from "react";
import NavbarContext from "../../../Utils/NavbarContext";
import Item from "./Item";
import { Home, Apparels, Service, Blogs, Members } from "../../../Svg/LinkIcon";
import { motion } from "framer-motion";
const MobileNav = () => {
  const { toggleMenu, setToggleMenu } = useContext(NavbarContext);
  const variants = {
    open: {
      left: 0,
      transition: { duration: 0.17, type: "spring", damping: 18 },
    },
    closed: { left: "-100%" },
  };
  const itemVariants = {
    open: {
      transition: { staggerChildren: 0.2, delayChildren: 0.15 },
    },
    closed: { transition: { duration: 0 } },
  };

  return (
    <div
      className={styles["mobileNav-wrapper"]}
      style={{ display: toggleMenu ? "block" : "none" }}
      onClick={() => {
        setToggleMenu(false);
      }}
    >
      <motion.div
        className={styles["mobleNav"]}
        variants={variants}
        animate={toggleMenu ? "open" : "closed"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <motion.div
          variants={itemVariants}
          className={styles["mobileNav-items-wrapper"]}
        >
          <Item icon={<Home />} title={"Home"} linkTitle={"/"} />
          <Item icon={<Service />} title={"Services"} linkTitle={"/services"} />
          <Item icon={<Members />} title={"Members"} linkTitle={"/members"} />
          <Item
            icon={<Apparels />}
            title={"Apparels"}
            linkTitle={"/apparels"}
          />
          <Item icon={<Blogs />} title={"Blogs"} linkTitle={"/blogs"} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
