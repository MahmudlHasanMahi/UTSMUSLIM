import { motion } from "framer-motion";
import styles from "./Navigation.module.css";
import { useNavContext } from "../../Utils/NavbarContext";
import { setDocumentTitle } from "../../Utils/DocumentTitle";
import { Link } from "react-router-dom";
const Listitem = ({
  title,
  lastchild = false,
  linkTitle,
  pk,
  active,
  setActive,
}) => {
  const listTheme = useNavContext();

  return (
    <motion.div
      key={pk}
      onClick={() => {
        setActive(linkTitle);
        setDocumentTitle(title);
      }}
      className={`${styles.navitem}`}
      initial={{ opacity: !lastchild ? 0 : 1, scale: !lastchild ? 0.5 : 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: !lastchild ? 0.5 : 0 }}
    >
      <Link
        to={`${linkTitle}`}
        onClick={() => {
          window.scroll(0, 0);
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
                      active == linkTitle
                        ? styles["navitem-Light-active"]
                        : styles["navitem-Light"]
                    }`
              } `
        }
      >
        {title}
      </Link>

      {active == linkTitle && !lastchild && (
        <motion.div
          layoutId="underline"
          className={` ${styles.underline} ${
            listTheme ? styles["underline-Dark"] : styles["underline-Light"]
          }`}
        />
      )}
    </motion.div>
  );
};

export default Listitem;
