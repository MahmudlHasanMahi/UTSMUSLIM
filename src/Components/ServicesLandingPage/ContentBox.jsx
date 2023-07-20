import React from "react";
import styles from "./ServicesLandingPage.module.css";
import { motion } from "framer-motion";
const ContentBox = () => {
  return (
    <div className={styles["contentBox-container"]}>
      <div className={styles["contentBox-wrapper"]}>
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 0.4 },
          }}
          exit={{ opacity: 1, y: 0 }}
          className={styles["Title"]}
        >
          A Place to Learn, Grow and Connect
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 0.6 },
          }}
          exit={{ opacity: 1, y: 0 }}
          className={styles["Paragraph"]}
        >
          UTSMS is built to represent muslims and facilitate their connection
          with Allah ﷻ
        </motion.span>
      </div>
    </div>
  );
};

export default ContentBox;
