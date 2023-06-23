import React, { useEffect, useState } from "react";
import Navlogo from "./Navlogo";
import Navitems from "./Navitems";
import styles from "./Navigation.module.css";
import { useNavContext } from "../../Utils/NavbarContext";
const Navbar = () => {
  const value = useNavContext();
  const [navBg, setNavBg] = useState(null);
  useEffect(() => {
    if (value) {
      setNavBg(styles["navbar-container-Dark"]);
    }
    if (!value) {
      setNavBg(styles["navbar-container-Light"]);
    }
    if (value == null) {
      setNavBg(null);
    }
  }, [value]);

  return (
    <div className={`${styles["navbar-container"]} ${navBg}`}>
      <Navlogo />
      <Navitems />
    </div>
  );
};

export default Navbar;
