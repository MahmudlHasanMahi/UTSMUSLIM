import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import styles from "./ImageSlider.module.css";
import { motion, useMotionValue, animate } from "framer-motion";
const ImageSlider = ({ children, direction = 1 }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);

  const sliderAnimation = (start = null) => {
    if (start != null) {
      x.set(start);
    }
    const animationTo = {
      from: x,
      to:
        direction > 0
          ? 0
          : ref.current.lastChild.getBoundingClientRect().x * -1,
    };
    const controls = animate(animationTo.from, animationTo.to, {
      duration: 5,
      ease: "linear",
      repeat: Infinity,
    });
  };

  const resetAnimation = () => {
    if (direction > 0) {
      sliderAnimation(ref.current.lastChild.getBoundingClientRect().width * -1);
    } else {
      sliderAnimation(0);
    }
  };
  useEffect(() => {
    resetAnimation();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resetAnimation);
    return () => window.removeEventListener("resize", resetAnimation);
  }, []);

  return (
    <motion.div className={styles["imageSlider"]} ref={ref} style={{ x }}>
      <div className={styles["slider-track"]}>{children}</div>
      <div className={`${styles["slider-track"]} ${styles["clone"]}`}>
        {children}
      </div>
    </motion.div>
  );
};
export default ImageSlider;
