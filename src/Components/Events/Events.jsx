import React from "react";
import styles from "./Events.module.css";
import ContentBox from "./ContentBox";
import ImageSlider from "./ImageSlider";
import image1 from "./pics/SliderImage1.jpg";
import image2 from "./pics/SliderImage2.jpg";
import image3 from "./pics/SliderImage3.jpg";
import image4 from "./pics/SliderImage4.png";
import image5 from "./pics/SliderImage5.png";
const Events = () => {
  const Images = [image1, image2, image3, image4, image5];
  return (
    <div className={styles["event-container"]}>
      <ContentBox />
      <ImageSlider direction={1}>
        {Images.map((image) => (
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </ImageSlider>

      <ImageSlider direction={-1}>
        {Images.map((image) => (
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </ImageSlider>
    </div>
  );
};

export default Events;
