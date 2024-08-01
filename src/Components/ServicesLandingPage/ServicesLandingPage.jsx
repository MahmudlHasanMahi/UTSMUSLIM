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
          src="https://ik.imagekit.io/ytjlb3rhi/assets/Frame.svg?updatedAt=1720598196762"
          alt=""
          srcset=""
          className={styles["frame"]}
        />

        <img
          src="https://ik.imagekit.io/ytjlb3rhi/assets/Leaves.svg?updatedAt=1720598196168"
          alt=""
          srcset=""
          className={styles["leaves"]}
        />
      </motion.div>
      <ContentBox />
    </div>
  );
};

export default ServicesLandingPage;
