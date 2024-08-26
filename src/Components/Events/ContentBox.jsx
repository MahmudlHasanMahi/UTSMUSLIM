import Contentbox from "../Content/Contentbox";
import styles from "../Content/Contentbox.module.css";
import React from "react";
const ContentBox = () => {
  return (
    <Contentbox
      postTitle={"Events"}
      heading={"The Core Essence of Unity"}
      paragraph={
        "At the heart of the UTSMS, we love to plan events. However while organising we have two key goals. To educate our youth and keep them entertained."
      }
      styleArg={styles.event}
      animate={true}
    />
  );
};

export default ContentBox;
