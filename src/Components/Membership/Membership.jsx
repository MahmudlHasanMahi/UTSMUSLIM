import { useEffect, useContext } from "react";
import NavbarContext from "../../Utils/NavbarContext";
import { useInView } from "react-intersection-observer";
import Benefits from "./Benefits";
import Contentbox from "../Content/Contentbox";
import styles from "../Content/Contentbox.module.css";
import IphoneImage from "./IphoneImage";
import Button from "../Content/Button";
const Membership = () => {
  const { toogleThemeNavbar } = useContext(NavbarContext);
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  useEffect(() => {
    if (inView) {
      toogleThemeNavbar("Dark");
    }
  }, [inView]);

  return (
    <div ref={ref} className="membership-container">
      <Contentbox
        postTitle="Membership"
        heading="Become Part of An Ever Growing Community"
        paragraph="By becoming a UTSMS member, you will have the chance to support the MSA and receive benefits from our loyalty program."
        styleArg={styles.membership}
        animate={true}
      >
        <Benefits />
        <Button
          title={"Learn More"}
          styleArg={styles.membership}
          link="https://www.activateuts.com.au/clubs/muslim-society-utsms/"
        />
      </Contentbox>
      <IphoneImage />
    </div>
  );
};

export default Membership;
