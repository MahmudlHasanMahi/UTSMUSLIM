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
    <motion.img
      ref={contentBoxRef}
      className="iphoneImage-container"
      src="https://ik.imagekit.io/ytjlb3rhi/assets/Iphone.png?updatedAt=1689504714722"
      alt="Iphone"
      loading="lazy"
      style={{
        opacity: isInview ? 1 : 0,
        y: isInview ? -50 : 50,
        transitionProperty: "opacity , y",
        transition: "0.5s cubic-bezier(0,0,1,1) 0.7s",
      }}
    />
  );
};

export default IphoneImage;
