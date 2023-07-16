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
          <img
            className="UtsmuslimFooterLogo"
            src="https://ik.imagekit.io/ytjlb3rhi/assets/UtsmuslimFooterLogo.svg?updatedAt=1689504714655"
            alt="UtsmuslimFooterLogo"
            loading="lazy"
          />

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
          <Links heading={"Our Services"}></Links>
        </div>
      </div>
    </div>
  );
};

export default Footer;
