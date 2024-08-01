import styles from "../../Navigation/Navigation.module.css";
import { useContext } from "react";
import NavbarContext from "../../../Utils/NavbarContext";
import Item from "./Item";
import { Home, Apparels, Service, Blogs, Members } from "../../../Svg/LinkIcon";
const MobileNav = () => {
  const { toggleMenu } = useContext(NavbarContext);
  return (
    <div
      className={styles["mobileNav-wrapper"]}
      style={{ display: toggleMenu ? "block" : "none" }}
    >
      <div className={styles["mobileNav-items-wrapper"]}>
        <Item icon={<Home />} title={"Home"} />
        <Item icon={<Service />} title={"Services"} />
        <Item icon={<Members />} title={"Members"} />
        <Item icon={<Apparels />} title={"Apparels"} />
        <Item icon={<Blogs />} title={"Blogs"} />
      </div>
    </div>
  );
};

export default MobileNav;
