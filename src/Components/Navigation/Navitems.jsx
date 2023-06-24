import Listitem from "./Listitem";
import styles from "./Navigation.module.css";
import { useState } from "react";
const Navitems = () => {
  const [active, setActive] = useState(1);
  return (
    <ul className={styles["navitem-list-container"]}>
      <Listitem pk={1} active={active} setActive={setActive} title="Home" />
      <Listitem pk={2} active={active} setActive={setActive} title="Services" />
      <Listitem pk={3} active={active} setActive={setActive} title="Members" />
      <Listitem pk={4} active={active} setActive={setActive} title="Blog" />
      <Listitem title="Contact Us" lastchild={true} animate={false} />
    </ul>
  );
};

export default Navitems;
