import Contentbox from "../Content/Contentbox";
import Button from "../Content/Button";
import styles from "../Content/Contentbox.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useContext } from "react";
import NavbarContext from "../../Utils/NavbarContext";
const Aboutus = () => {
  const { toogleThemeNavbar } = useContext(NavbarContext);
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  useEffect(() => {
    if (inView) {
      toogleThemeNavbar("Light");
    }
  }, [inView]);

  return (
    <div className="aboutus-container" ref={ref}>
      <Contentbox
        postTitle="About Us"
        heading="UTSMS: Where Muslims Connect, Learn and Grow"
        paragraph="UTSMS is a platform for Muslim students at UTS to connect, learn and grow. We offer spiritual guidance, academic support, social events, and volunteering opportunities."
        styleArg={styles.aboutUs}
        animate={true}
      >
        <Button title={"Join Us"} styleArg={styles.aboutUs} />
      </Contentbox>
    </div>
  );
};

export default Aboutus;
