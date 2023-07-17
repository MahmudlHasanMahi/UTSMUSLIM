import IconLink from "./IconLink";
import { Facebook, Instagram, Tiktok, Linkedin } from "../../Svg/LinkIcon";

const SocialMediaLink = () => {
  return (
    <div className="socialMedia-container">
      <IconLink logo={<Facebook />} link={"https://www.facebook.com/"} />
      <IconLink logo={<Instagram />} link={"https://www.instagram.com/"} />
      <IconLink logo={<Tiktok />} link={"https://www.tiktok.com/"} />
      <IconLink logo={<Linkedin />} link={"https://www.linkedin.com/"} />
    </div>
  );
};

export default SocialMediaLink;
