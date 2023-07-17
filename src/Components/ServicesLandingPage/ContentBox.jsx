import React from "react";
import styles from "./ServicesLandingPage.module.css";
import { motion, AnimatePresence } from "framer-motion";
const ContentBox = () => {
  return (
    <div className={styles["contentBox-container"]}>
      <div className={styles["contentBox-wrapper"]}>

          <motion.span
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.4 } }}
            exit={{ opacity: 1 }}
            className={styles["Title"]}
          >
            A Place to Learn, Grow and Connect
          </motion.span>
          <motion.span
            key="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.6 } }}
            exit={{ opacity: 1 }}
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
