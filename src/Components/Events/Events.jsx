import React from "react";
import styles from "./Events.module.css";
import ContentBox from "./ContentBox";
import ImageSlider from "./ImageSlider";
import image from "./pics/SliderImage1.jpg";
const Events = () => {
  console.log(image);
  const Images = [
    "/src/Components/Events/pics/SliderImage1.jpg",
    "/src/Components/Events/pics/SliderImage2.jpg",
    "/src/Components/Events/pics/SliderImage3.jpg",
    "/src/Components/Events/pics/SliderImage4.png",
    "/src/Components/Events/pics/SliderImage5.png",
  ];
  return (
    <div className={styles["event-container"]}>
      <ContentBox />
      <ImageSlider direction={1}>
        {Images.map((url) => (
          <div
            style={{
              backgroundImage: `url(${url})`,
            }}
          />
        ))}
      </ImageSlider>

      <ImageSlider direction={-1}>
        {Images.map((url) => (
          <div
            style={{
              backgroundImage: `url(${url})`,
            }}
          />
        ))}
      </ImageSlider>
    </div>
  );
};

export default Events;
