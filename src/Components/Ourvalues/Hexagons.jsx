import { useEffect, useRef } from "react";
import { useAnimate, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const useHexagonAnimation = (view) => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
      const sequence = [
        [
          "#hexagon-1",
          view ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 },
        ],
        [
          "#hexagon-2",
          view ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 },
        ],
        [
          "#hexagon-3",
          view ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 },
        ],
        [
          "#hexagon-4",
          view ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 },
        ],
        [
          "#hexagon-5",
          view ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 },
        ],
        [
          "#hexagon-6",
          view ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 },
        ],
      ];
      animate(sequence, { duration: 0.75 });
    }, [view]);
    return scope;
  };
  const scope = useHexagonAnimation(inView);
  return (
    <div ref={scope} className="hexagons-main-container">
      <div className="hexagon-container-1">
        <Hexagon pkey={1} svg={<Ourvalues_1 />} title={"Quran and Sunnah"} />
        <Hexagon pkey={2} svg={<Ourvalues_2 />} title={"Strengthen Faith"} />
      </div>

      <div className="hexagon-container-2">
        <Hexagon pkey={6} svg={<Ourvalues_5 />} title={"Remind and Warn"} />
        <Hexagon pkey={7} svg={<UtsmuslimLogo />} attr={true} />
        <Hexagon pkey={3} svg={<Ourvalues_3 />} title={"Preserve Teachings"} />
      </div>
      <div ref={ref} className="hexagon-container-3">
        <Hexagon pkey={5} svg={<Ourvalues_6 />} title={"Please Allah ﷻ"} />
        <Hexagon
          pkey={4}
          svg={<Ourvalues_4 />}
          title={"Foster Relationships"}
        />
        {/* <span ref={ref}></span> */}
      </div>
    </div>
  );
};

export default Hexagons;
