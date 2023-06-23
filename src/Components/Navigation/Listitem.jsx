import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
import styles from "./Navigation.module.css";
import { useNavContext } from "../../Utils/NavbarContext";
import { useState } from "react";

const Listitem = ({ title, animate = true, lastchild = false }) => {
  const value = useNavContext();
  const [listColor, setlistColor] = useState();
  return (
    <motion.li
      className={
        lastchild
          ? `${styles.navitem} ${styles["navitem-lastChild"]} ${
              value
                ? styles["navitem-lastChild-Dark"]
                : styles["navitem-lastChild-Light"]
            }`
          : `${styles.navitem} ${
              value ? styles["navitem-Dark"] : styles["navitem-Light"]
            } `
      }
      initial={{ opacity: animate ? 0 : 1, scale: animate ? 0.5 : 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: animate ? 0.5 : 0 }}
    >
      {title}
    </motion.li>
  );
};

export default Listitem;
