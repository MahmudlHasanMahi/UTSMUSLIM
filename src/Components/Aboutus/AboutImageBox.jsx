import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const AboutImageBox = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end"],
    // offset: ["end start", "end center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-120, 0]);

  return (
    <div
      className="aboutImagebox-container"
      // ref={ref}
      // style={{
      //   y: y,
      //   opacity: opacity,
      // }}
      
    >
      <img src="/src/img/aboutusImg3.png" className="aboutusImg3" alt="" srcset="" />
      <img src="/src/img/aboutusImg2.png" className="aboutusImg2" alt="" srcset="" />
      <img src="/src/img/aboutusImg1.png" className="aboutusImg1" alt="" srcset="" />
      
    </div>
  
  );
};
export default AboutImageBox;
