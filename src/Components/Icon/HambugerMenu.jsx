import { useState, useContext, useEffect, useRef } from "react";
import styles from "../Navigation/Navigation.module.css";
import NavbarContext from "../../Utils/NavbarContext";
const HambugerMenu = () => {
  const { navbar, toggleMenu, setToggleMenu } = useContext(NavbarContext);
  const colorStyle = "line";
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 703) {
        console.log(":asdf");
        setToggleMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lineOne = {
    transform: toggleMenu ? "rotate(45deg) translate(5px, 5.5px)" : "none",
    background: navbar ? "#dbdbdb" : "black",
    border: navbar ? "1.5px solid #e0e0e0" : "1.5px solid black",
  };
  const lineTwo = {
    opacity: toggleMenu ? 0 : 1,
    background: navbar ? "#dbdbdb" : "black",
    border: navbar ? "1.5px solid #dbdbdb" : "1.5px solid black",
  };
  const lineThree = {
    transform: toggleMenu ? "rotate(-45deg) translate(5px, -5.5px)" : "none",
    background: navbar ? "#dbdbdb" : "black",
    border: navbar ? "1.5px solid #dbdbdb" : "1.5px solid black",
  };

  return (
    <div
      className={styles["hamburger-wrapper"]}
      onClick={() => {
        setToggleMenu(!toggleMenu);
      }}
    >
      <span style={lineOne} className={styles[colorStyle]}></span>
      <span style={lineTwo} className={styles[colorStyle]}></span>
      <span style={lineThree} className={styles[colorStyle]}></span>
    </div>
  );
};

export default HambugerMenu;
