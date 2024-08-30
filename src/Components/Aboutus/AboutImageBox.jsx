import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import images from "../../assets/aboutusImg1.png";
const AboutImageBox = () => {
  const ref = useRef(null);
  const [x, setX] = useState(0);
  const scroll = (e) => {
    setX(e.target.scrollTop / 4);
  };
  useEffect(() => {
    document.querySelector(".pageRoutes").addEventListener("scroll", scroll);
    return () => document.removeEventListener("scroll", scroll);
  }, []);

  return (
    <div
      className="aboutImagebox-container"
      style={{ transform: `translateY(${x}px)` }}
      ref={ref}
    >
      <img src="/src/img/aboutusImg3.png" className="aboutus-image" />
      <img src="/src/img/aboutusImg2.png" className="aboutus-image" />
      <img src={images} className="aboutus-image" />
      <img src="/src/img/aboutusImg4.png" className="aboutus-image" />
      <img src="/src/img/aboutusImg5.png" className="aboutus-image" />
    </div>
  );
};
export default AboutImageBox;
