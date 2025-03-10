import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import image1 from "../../assets/aboutusImg1.png";
import image2 from "../../assets/aboutusImg2.png";
import image3 from "../../assets/aboutusImg3.png";
import image4 from "../../assets/aboutusImg4.png";
import image5 from "../../assets/aboutusImg5.png";
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
      <img
        loading="lazy"
        src={image3}
        alt="Dining at UTS cafeteria"
        className="aboutus-image"
      />
      <img
        loading="lazy"
        alt="Praying on UTS campus"
        src={image2}
        className="aboutus-image"
      />
      <img
        loading="lazy"
        alt="UTS event"
        src={image1}
        className="aboutus-image"
      />
      <img loading="lazy" src={image4} className="aboutus-image" />
      <img sloading="lazy" src={image5} className="aboutus-image" />
    </div>
  );
};
export default AboutImageBox;
