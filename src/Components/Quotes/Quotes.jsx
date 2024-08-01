import QuotesContent from "./QuotesContent";
import { useInView } from "react-intersection-observer";
import { useEffect, useContext } from "react";
import NavbarContext from "../../Utils/NavbarContext";
const Quotes = () => {
  const { toogleThemeNavbar } = useContext(NavbarContext);
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  useEffect(() => {
    if (inView) {
      toogleThemeNavbar("Light");
    }
  }, [inView]);

  return (
    <div ref={ref} className="quotes-container">
      <QuotesContent
        intro={"قـال رسـول الله ﷺ"}
        quote={
          "A man follows the religion of his friend; so each one should consider whom he makes his friend."
        }
        origin={"Sunan Abi Dawud 4833 (Hasan)"}
      />

      <img
        className="arabicCalligraphy"
        src="https://ik.imagekit.io/ytjlb3rhi/assets/ArabicCalligraphy.svg?updatedAt=1689504714797"
        alt="arabicCalligraphy"
        loading="lazy"
      />

      <div className="quotesimage"></div>
    </div>
  );
};

export default Quotes;
