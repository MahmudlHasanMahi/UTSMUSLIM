import React from "react";
import styles from "./Events.module.css";
import ContentBox from "./ContentBox";
const Events = () => {
  return (
    <div className={styles.eventContainer}>
      <ContentBox />
      <div className={styles.prayerShapeContainer}>
        <img
          className={styles.prayerShapeImage}
          src={
            "https://ik.imagekit.io/ytjlb3rhi/assets/Path%200-2.png?updatedAt=1690730227587"
          }
          alt=""
          srcset=""
          loading="lazy"
        />
        <img
          className={styles.prayerShapeImage}
          src={
            "https://ik.imagekit.io/ytjlb3rhi/assets/Path%200-1.png?updatedAt=1690730227590"
          }
          alt=""
          srcset=""
          loading="lazy"
        />
        <img
          className={styles.prayerShapeImage}
          src={
            "https://ik.imagekit.io/ytjlb3rhi/assets/Path%200.png?updatedAt=1690730227687"
          }
          alt=""
          srcset=""
          loading="lazy"
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Events;
