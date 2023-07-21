import Contentbox from "../Content/Contentbox";
import AboutImageBox from "./AboutImageBox";
import Button from "../Content/Button";
import styles from "../Content/Contentbox.module.css";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavUpdateContext } from "../../Utils/NavbarContext";
const Aboutus = () => {
  const setNavigation = useNavUpdateContext();
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  useEffect(() => {
    if (inView) {
      setNavigation("Light");
    }
  }, [inView]);

  return (
    <div className="aboutus-container" ref={ref} >
      <div className="contentbox-container">
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
      <AboutImageBox />
    </div>
  );
};

export default Aboutus;
