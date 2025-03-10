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
        <Button
          title={"Join us"}
          styleArg={styles.joinUs}
          link="https://www.activateuts.com.au/clubs/muslim-society-utsms/"
        />
      </JoinUs>
      <div className="footer-section-container">
        <div className="footer-section-1">
          <img
            className="UtsmuslimFooterLogo"
            src="https://ik.imagekit.io/ytjlb3rhi/assets/UtsmuslimFooterLogo.svg?updatedAt=1689504714655"
            alt="UtsmuslimFooterLogo"
            loading="lazy"
          />
          <img
            className="UtsmuslimFooterLogo-long"
            // src="https://ik.imagekit.io/ytjlb3rhi/assets/UtsmuslimFooterLogo.svg?updatedAt=1689504714655"
            src="https://ik.imagekit.io/ytjlb3rhi/assets/Nav%20logo%20svg.svg?updatedAt=1689948604212"
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
            <Link title={"LinkTree"} link={"https://linktr.ee/UTSMS"} />
            <Link title={"ActivateUTS"} />
          </Links>
        </div>
      </div>
    </div>
  );
};

export default Footer;
