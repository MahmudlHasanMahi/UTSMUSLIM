import Listitem from "./Listitem";
import styles from "./Navigation.module.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Navitems = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  return (
    <ul className={styles["navitem-list-container"]}>
      <Listitem
        pk={1}
        linkTitle={"/"}
        active={active}
        setActive={setActive}
        title="Home"
      />
      <Listitem
        pk={2}
        linkTitle={"/services"}
        active={active}
        setActive={setActive}
        title="Services"
      />
      <Listitem
        pk={3}
        linkTitle={"/members"}
        active={active}
        setActive={setActive}
        title="Members"
      />
      <Listitem
        pk={4}
        linkTitle={"/blogs"}
        active={active}
        setActive={setActive}
        title="Blog"
      />
      <Listitem
        pk={5}
        linkTitle={"/contactUs"}
        active={active}
        setActive={setActive}
        title="Contact Us"
        lastchild={true}
      />
    </ul>
  );
};

export default Navitems;
