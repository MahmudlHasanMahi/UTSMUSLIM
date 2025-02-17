import React from "react";
import styles from "./Events.module.css";
import ContentBox from "./ContentBox";
import ImageSlider from "./ImageSlider";
import image1 from "./pics/SliderImage1.jpg";
import image2 from "./pics/SliderImage2.jpg";
import image3 from "./pics/SliderImage3.jpg";
import image4 from "./pics/SliderImage4.png";
import image5 from "./pics/SliderImage5.jpeg";
import blur from "./pics/blur.png";
const Events = () => {
  const Images = [
    { url: image1, alt: "UTSM student Hiking" },
    { url: image2, alt: "UTSM handing out free Quran" },
    { url: image3, alt: "UTSM club activity" },
    { url: image4, alt: "UTSM friday prayer" },
    { url: image5, alt: "" },
  ];
  return (
    <div className={styles["event-container"]}>
      <ContentBox />
      <ImageSlider direction={1}>
        {Images.map((image, idx) => (
          <div key={idx} style={{ backgroundImage: `url(${blur})` }}>
            <img
              loading="lazy"
              decoding="async"
              role="Presentation"
              alt={image.alt}
              src={image.url}
              width={"100%"}
              height={"100%"}
            />
          </div>
        ))}
      </ImageSlider>

      <ImageSlider direction={-1}>
        {Images.map((image, idx) => (
          <div key={idx} style={{ backgroundImage: `url(${blur})` }}>
            <img
              loading="lazy"
              decoding="async"
              role="Presentation"
              alt={image.alt}
              src={image.url}
              width={"100%"}
              height={"100%"}
            />
          </div>
        ))}
      </ImageSlider>
    </div>
  );
};

export default Events;
