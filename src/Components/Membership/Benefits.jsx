import MemberShipInfo from "./MemberShipInfo";
import {
  MembershipLogo_1,
  MembershipLogo_2,
  MembershipLogo_3,
} from "../../Svg/MembershipSvg";
const Benefits = () => {
  return (
    <div className="benefit-container">
      <MemberShipInfo logo={<MembershipLogo_1 />} title={"Support the MSA"} />
      <MemberShipInfo
        logo={<MembershipLogo_2 />}
        title={"Discounted events and merch"}
      />
      <MemberShipInfo
        logo={<MembershipLogo_3 />}
        title={"Exclusive deals from participating businesses"}
      />
    </div>
  );
};

export default Benefits;
