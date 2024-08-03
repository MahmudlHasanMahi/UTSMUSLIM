import React from "react";
import styles from "../../Navigation/Navigation.module.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Item = ({ icon, title, linkTitle }) => {
  const location = useLocation();
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", damping: 12.5 },
      },
    },
    closed: {
      y: 60,
      opacity: 0,
      transition: {
        y: { type: "spring", damping: 12.5 },
      },
    },
  };
  const highlight =
    location.pathname === linkTitle ? styles["mobNav-highlight"] : "";

  return (
    <motion.div variants={variants} className={styles["mobNav-item"]}>
      <span className={`${styles["mobNav-icon"]} ${highlight}`}>{icon}</span>
      <Link
        to={`${linkTitle}`}
        state={{ prevPath: location.pathname }}
        className={`${styles["mobNav-title"]} ${highlight}`}
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default Item;
