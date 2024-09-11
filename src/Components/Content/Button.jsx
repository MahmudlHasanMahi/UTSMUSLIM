import styles from "./Contentbox.module.css";
import { Link } from "react-router-dom";
const Button = ({ title, styleArg, link = "#" }) => {
  return (
    <Link
      className={`${styles["btn-main"]} ${styleArg}`}
      target="_blank"
      to={link}
    >
      {title}
    </Link>
  );
};

export default Button;
