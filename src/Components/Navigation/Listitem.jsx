import { motion } from "framer-motion";
import styles from "./Navigation.module.css";
import { useNavContext } from "../../Utils/NavbarContext";
import { setDocumentTitle } from "../../Utils/DocumentTitle";
const Listitem = ({
  title,
  animate = true,
  lastchild = false,
  pk,
  active,
  setActive,
}) => {
  const listTheme = useNavContext();

  return (
    <motion.li
      key={pk}
      onClick={() => {
        animate && setActive(pk);
        setDocumentTitle(title);
      }}
      className={
        lastchild
          ? `${styles.navitem} ${styles["navitem-lastChild"]} ${
              listTheme
                ? styles["navitem-lastChild-Dark"]
                : styles["navitem-lastChild-Light"]
            }`
          : `${styles.navitem} ${
              listTheme
                ? styles["navitem-Dark"]
                : `${
                    active == pk
                      ? styles["navitem-Light-active"]
                      : styles["navitem-Light"]
                  }`
            } `
      }
      initial={{ opacity: animate ? 0 : 1, scale: animate ? 0.5 : 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: animate ? 0.5 : 0 }}
    >
      {title}
      {active == pk && animate && (
        <motion.div
          layoutId="underline"
          className={` ${styles.underline} ${
            listTheme ? styles["underline-Dark"] : styles["underline-Light"]
          }`}
        />
      )}
    </motion.li>
  );
};

export default Listitem;
