import React, { useRef } from "react";
import ContentBox from "./ContentBox";
import styles from "./ServicesLandingPage.module.css";
import { useInView, motion } from "framer-motion";
const ServicesLandingPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className={styles["servicesLanding-container"]}>
      <motion.div
        className={styles["servicesLanding-image-container"]}
        initial={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      >
        <img
          src="https://ik.imagekit.io/ytjlb3rhi/assets/Group%2087.png?updatedAt=1723478780405"
          alt=""
          className={styles["frame"]}
        />

        <img
          src="https://ik.imagekit.io/ytjlb3rhi/assets/White%20and%20Orange%20Simple%20Light%20Real%20Estate%20Portfolio%20&%20Resume%20Website%20(3)%203.png?updatedAt=1723478780170"
          alt=""
          className={styles["leaves"]}
        />
      </motion.div>
      <ContentBox />
    </div>
  );
};

export default ServicesLandingPage;
