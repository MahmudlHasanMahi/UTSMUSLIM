/* eslint-disable react/prop-types */
import styles from "./Contentbox.module.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Contentbox = ({
  postTitle,
  heading,
  paragraph,
  children = null,
  styleArg = null,
  animate = false,
}) => {
  const contentBoxRef = useRef(null);
  const isInview = useInView(contentBoxRef, { once: true });
  const style = {
    opacity: isInview ? 1 : 0,
    transition: "opacity 0.6s  cubic-bezier(0,0,1,1) 0.1s",
  };
  return (
    <motion.div className={`${styles.contentContainer} ${styleArg}`}>
      <span style={style} className={`${styles.postTitle} ${styleArg}`}>
        {postTitle}
      </span>
      <span style={style} className={`${styles.heading} ${styleArg}`}>
        {heading}
      </span>
      <span
        ref={animate ? contentBoxRef : null}
        style={style}
        className={`${styles.paragraph} ${styleArg}`}
      >
        {paragraph}
      </span>
      {children}
    </motion.div>
  );
};

export default Contentbox;
