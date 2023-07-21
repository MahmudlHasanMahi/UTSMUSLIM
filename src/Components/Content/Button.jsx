import styles from "./Contentbox.module.css";
const Button = ({ title, styleArg }) => {
  return (
    <button  className={`${styles["btn-main"]} ${styleArg}`}>
      {title}
    </button>
  );
};

export default Button;
