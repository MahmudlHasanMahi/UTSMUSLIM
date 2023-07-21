import React from "react";
import styles from "./Navigation.module.css";
import { useNavContext } from "../../Utils/NavbarContext";
import {motion} from 'framer-motion'
const Navlogo = () => {
  const navigationContext = useNavContext();
  return (
    <motion.img
      className={styles.navlogo}
      src={!navigationContext ? "https://ik.imagekit.io/ytjlb3rhi/assets/nav%20logo%20light.svg?updatedAt=1689949022069" :"https://ik.imagekit.io/ytjlb3rhi/assets/Nav%20logo%20svg.svg?updatedAt=1689948604212"}
      alt="Logo"
      loading="lazy"
    />
  );
};

export default Navlogo;
