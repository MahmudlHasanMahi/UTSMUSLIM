import Listitem from "./Listitem";
import styles from "./Navigation.module.css";
const Navitems = () => {
  return (
    <ul className={styles["navitem-list-container"]}>
      <Listitem title="Home" />
      <Listitem title="Services" />
      <Listitem title="Members" />
      <Listitem title="Blog" />
      <Listitem title="Contact Us" lastchild={true} animate={false} />
    </ul>
  );
};

export default Navitems;
