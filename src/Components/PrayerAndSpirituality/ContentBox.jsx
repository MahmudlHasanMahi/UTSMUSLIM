import React from "react";
import Contentbox from "../Content/Contentbox";
import styles from "../Content/Contentbox.module.css";
const ContentBox = () => {
  return (
    <Contentbox
      postTitle={"Prayer and Spirituality"}
      heading={"A Spiritual Oasis At The Heart of UTS"}
      paragraph={
        "We provide a range of services to assist you with your salah on campus. Whether its your daily prayers or jumuah. We got you covered."
      }
      styleArg={styles.ourMission}
      animate={true}
    />
  );
};

export default ContentBox;
