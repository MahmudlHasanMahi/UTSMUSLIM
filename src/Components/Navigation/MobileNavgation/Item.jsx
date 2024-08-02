import React from "react";
import styles from "../../Navigation/Navigation.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Item = ({ icon, title }) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", damping: 12 },
      },
    },
    closed: {
      y: 60,
      opacity: 0,
      transition: {
        y: { type: "spring", damping: 12 },
      },
    },
  };

  return (
    <motion.div variants={variants} className={styles["mobNav-item"]}>
      <span className={styles["mobNav-icon"]}>{icon}</span>
      <Link className={styles["mobNav-title"]}>{title}</Link>
    </motion.div>
  );
};

export default Item;
