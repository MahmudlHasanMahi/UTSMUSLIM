import { motion } from "framer-motion";
import styles from "./Navigation.module.css";
import { setDocumentTitle } from "../../Utils/DocumentTitle";
import { Link } from "react-router-dom";
import { useContext } from "react";
import NavbarContext from "../../Utils/NavbarContext";
const Listitem = ({
  title,
  lastchild = false,
  linkTitle,
  pk,
  active,
  setActive,
}) => {
  const { navbar } = useContext(NavbarContext);
  // const location = useLocation();
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
        state={{ prevPath: location.pathname }}
        className={
          lastchild
            ? `${styles.navitem} ${styles["navitem-lastChild"]} ${
                navbar
                  ? styles["navitem-lastChild-Dark"]
                  : styles["navitem-lastChild-Light"]
              }`
            : `${styles.navitem} ${
                navbar
                  ? active == linkTitle
                    ? styles["navitem-Dark-active"]
                    : styles["navitem-Dark"]
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
            navbar ? styles["underline-Dark"] : styles["underline-Light"]
          }`}
        />
      )}
    </motion.div>
  );
};

export default Listitem;
