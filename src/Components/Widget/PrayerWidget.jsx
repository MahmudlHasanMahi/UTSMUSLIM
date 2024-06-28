import NextPrayerWidget from "./NextPrayerWidget";
import WidgetNav from "./WidgetNav";
import styles from "./Widget.module.css";
import { Mosque, Moon, Confetti } from "../../Svg/WidgetLogo";
const PrayerWidget = () => {
  return (
    <div className="prayerWidget-container">
      <div className={styles["prayerWidget-container-inner"]}>
        <NextPrayerWidget />

        <WidgetNav
          title={"UTS Musalla"}
          logo={<Mosque />}
          color={"#674A0D"}
          bg_color={"#DFC693"}
        />
        <WidgetNav
          title={"UTS Jummah"}
          logo={<Moon />}
          color={"#35643F"}
          bg_color={"#A7CFBA"}
        />
        <WidgetNav
          title={"Events"}
          logo={<Confetti />}
          color={"#902F46"}
          bg_color={"#EA9FB1"}
        />
      </div>
    </div>
  );
};

export default PrayerWidget;
