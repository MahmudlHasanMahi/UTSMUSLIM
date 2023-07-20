import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Landingtitle = () => {
  // const ref = useRef();
  // const isInView = useInView(ref, { once: true });
  return (
    <div className="landingtitle-container">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        className="landingtitle"
      >
        Empowering Muslims On Campus
      </motion.div>

      <motion.img
        className="since94"
        initial={{ opacity: 0}}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
        exit={{ opacity: 1 }}
        src="https://ik.imagekit.io/ytjlb3rhi/assets/since94.png?updatedAt=1689504714636"
        alt="since94"
        srcset=""
        // loading="lazy"
      />
    </div>
  );
};

export default Landingtitle;
