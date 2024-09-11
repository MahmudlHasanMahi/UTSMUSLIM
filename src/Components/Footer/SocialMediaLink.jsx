import IconLink from "./IconLink";
import { Facebook, Instagram, Tiktok, Linkedin } from "../../Svg/LinkIcon";

const SocialMediaLink = () => {
  return (
    <div className="socialMedia-container">
      <IconLink logo={<Facebook />} link={"https://www.facebook.com/utsms/"} />
      <IconLink
        logo={<Instagram />}
        link={"https://www.instagram.com/utsms/"}
      />
      <IconLink logo={<Tiktok />} link={"https://www.tiktok.com/@utsmsa"} />
      <IconLink
        logo={<Linkedin />}
        link={"https://www.linkedin.com/company/utsmuslimsociety/"}
      />
    </div>
  );
};

export default SocialMediaLink;
