import { useEffect } from "react";
import { useNavUpdateContext } from "../../Utils/NavbarContext";
import { useInView } from "react-intersection-observer";
import Benefits from "./Benefits";
import Contentbox from "../Content/Contentbox";
import styles from "../Content/Contentbox.module.css";
import IphoneImage from "./IphoneImage";
import Button from "../Content/Button";
const Membership = () => {
  const setNavigation = useNavUpdateContext();
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  useEffect(() => {
    if (inView) {
      setNavigation("Dark");
    }
  }, [inView]);

  return (
    <div ref={ref} className="membership-container">
      <Contentbox
        postTitle="Membership"
        heading="Become Part of An Ever-Growing Community"
        paragraph="By becoming a UTSMS member, you will have the chance to support the MSA and receive benefits from our loyalty program."
        styleArg={styles.membership}
        animate={true}
      >
        <Benefits />
        <Button title={"Learn More"} styleArg={styles.membership} />
      </Contentbox>
      <IphoneImage />
    </div>
  );
};

export default Membership;
