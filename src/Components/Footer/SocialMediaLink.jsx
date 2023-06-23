import IconLink from "./IconLink";
import { Facebook, Instagram, Tiktok, Linkedin } from "../../Svg/LinkIcon";
const SocialMediaLink = () => {
  return (
    <div className="socialMedia-container">
      <IconLink logo={<Facebook />} />
      <IconLink logo={<Instagram />} />
      <IconLink logo={<Tiktok />} />
      <IconLink logo={<Linkedin />} />
    </div>
  );
};

export default SocialMediaLink;
