import Hexagon from "./Hexagon";
import {
  Ourvalues_1,
  Ourvalues_2,
  Ourvalues_3,
  Ourvalues_4,
  Ourvalues_5,
  Ourvalues_6,
  UtsmuslimLogo,
} from "../../Svg/Ourvalues";
const Hexagons = () => {
  return (
    <div className="hexagons-main-container">
      <div className="hexagon-container-1">
        <Hexagon svg={<Ourvalues_1 />} title={"Quran and Sunnah"} />
        <Hexagon svg={<Ourvalues_2 />} title={"Strengthen Faith"} />
      </div>
      <div className="hexagon-container-2">
        <Hexagon svg={<Ourvalues_5 />} title={"Remind and Warn"} />
        <Hexagon svg={<UtsmuslimLogo />} attr={true} />
        <Hexagon svg={<Ourvalues_3 />} title={"Preserve Teachings"} />
      </div>
      <div className="hexagon-container-3">
        <Hexagon svg={<Ourvalues_6 />} title={"Please Allah ﷻ"} />
        <Hexagon svg={<Ourvalues_4 />} title={"Foster Relationships"} />
      </div>
    </div>
  );
};

export default Hexagons;
