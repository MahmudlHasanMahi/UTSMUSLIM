import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const IphoneImage = () => {
  const contentBoxRef = useRef(null);
  const isInview = useInView(
    contentBoxRef,
    { margin: "100% 0px 0px 0px" },
    { once: true }
  );
  return (
    <motion.div
      ref={contentBoxRef}
      style={{
        opacity: isInview ? 1 : 0,
        y: isInview ? -50 : 50,
        transitionProperty: "opacity , y",
        transition: "0.5s cubic-bezier(0,0,1,1) 1s",
      }}
      className="iphoneImage-container"
    ></motion.div>
  );
};

export default IphoneImage;
