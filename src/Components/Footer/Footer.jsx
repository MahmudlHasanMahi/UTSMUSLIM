import JoinUs from "./JoinUs";
import Button from "../Content/Button";
import styles from "../Content/Contentbox.module.css";
import SocialMediaLink from "./SocialMediaLink";
import Links from "./Links";
import Link from "./Link";
const Footer = () => {
  return (
    <div className="footer-container">
      <JoinUs>
        <Button title={"Join us"} styleArg={styles.joinUs} />
      </JoinUs>
      <div className="footer-section-container">
        <div className="footer-section-1">
          <div className="UtsmuslimFooterLogo"></div>
          <span className="followUs">Follow Us</span>
          <SocialMediaLink />
        </div>
        <div className="footer-section-2">
          <Links heading={"Our Services"}>
            <Link title={"Prayer Room"} />
            <Link title={"Friday Prayer"} />
            <Link title={"Events"} />
          </Links>
          <Links heading={"Quick Links"}>
            <Link title={"LinkTree"} />
            <Link title={"ActivateUTS"} />
          </Links>
          <Links heading={"Our Services"}>
            <Link title={"LinkTree"} />
            <Link title={"ActivateUTS"} />
            <Link title={"LinkTree"} />
            <Link title={"ActivateUTS"} />
            <Link title={"LinkTree"} />
          </Links>
        </div>
      </div>
    </div>
  );
};

export default Footer;
