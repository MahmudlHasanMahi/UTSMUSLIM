import React from "react";
import styles from "./Events.module.css";
import ContentBox from "./ContentBox";
import ImageSlider from "./ImageSlider";
import image from "./image.png";
const Events = () => {
  return (
    <div className={styles["event-container"]}>
      <ContentBox />
      <br />
      <br />
      <br />
      <ImageSlider direction={-1}>
        <div
          style={{
            backgroundImage: `url("https://plus.unsplash.com/premium_photo-1720442410336-e02bdf318c9d?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1653233792055-421f2d4de16b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url("https://plus.unsplash.com/premium_photo-1720442410336-e02bdf318c9d?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1720640320081-763dc112f1b1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1432538501018-e71b8a676975?q=80&w=2822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        ></div>
      </ImageSlider>
      <ImageSlider direction={1}>
        <div
          style={{
            backgroundImage: `url("https://plus.unsplash.com/premium_photo-1720442410336-e02bdf318c9d?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1653233792055-421f2d4de16b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url("https://plus.unsplash.com/premium_photo-1720442410336-e02bdf318c9d?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1720640320081-763dc112f1b1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1432538501018-e71b8a676975?q=80&w=2822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        ></div>
      </ImageSlider>
    </div>
  );
};

export default Events;
