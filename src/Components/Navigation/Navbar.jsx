import React, { useEffect, useState, useContext } from "react";
import Navlogo from "./Navlogo";
import Navitems from "./Navitems";
import styles from "./Navigation.module.css";
import HambugerMenu from "../Icon/HambugerMenu";
import navbarContext from "../../Utils/NavbarContext";
import MobileNav from "./MobileNavgation/MobileNav";
const Navbar = () => {
  const { navbar, toggleMenu } = useContext(navbarContext);
  const [navBg, setNavBg] = useState(null);
  useEffect(() => {
    if (navbar) {
      setNavBg(styles["navbar-Dark"]);
    }
    if (!navbar) {
      setNavBg(styles["navbar-Light"]);
    }
    if (navbar == null) {
      setNavBg(null);
    }
  }, [navbar]);

  return (
    <div className={styles["navbar-container"]}>
      <MobileNav />
      <div
        className={`${styles["navbar"]} ${navBg}`}
        style={
          toggleMenu ? { backdropFilter: "none", background: "none" } : null
        }
      >
        <Navlogo />
        <Navitems />
        <HambugerMenu />
      </div>
    </div>
  );
};

export default Navbar;
