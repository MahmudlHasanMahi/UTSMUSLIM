import React from "react";
import styles from "./Navigation.module.css";
import { useContext } from "react";
import NavbarContext from "../../Utils/NavbarContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
useNavigate;
const Navlogo = () => {
  const { navbar } = useContext(NavbarContext);
  const navigate = useNavigate();
  const Redirect = () => {
    navigate("/");
  };
  return (
    <motion.img
      onClick={Redirect}
      className={styles.navlogo}
      src={
        navbar
          ? "https://ik.imagekit.io/ytjlb3rhi/assets/Nav%20logo%20svg.svg?updatedAt=1689948604212"
          : "https://ik.imagekit.io/ytjlb3rhi/assets/nav%20logo%20light.svg?updatedAt=1689949022069"
      }
      alt="UTS Muslim Society Logo"
      loading="lazy"
    />
  );
};

export default Navlogo;
