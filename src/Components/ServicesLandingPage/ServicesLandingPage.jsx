import React, { useRef } from "react";
import ContentBox from "./ContentBox";
import styles from "./ServicesLandingPage.module.css";
import { useInView, motion } from "framer-motion";
const ServicesLandingPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={styles["servicesLanding-container"]}>
      <div className={styles["servicesLanding-image-container"]}>
        <motion.img
          src="https://ik.imagekit.io/ytjlb3rhi/assets/ServicesLandingPageImage.webp?updatedAt=1689609154688"
          alt=""
          srcset=""
          className={styles["servicesLanding-image"]}
          initial={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        />
      </div>

      <ContentBox />
    </div>
  );
};

export default ServicesLandingPage;
