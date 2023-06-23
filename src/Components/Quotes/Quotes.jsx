import QuotesContent from "./QuotesContent";
import { useNavUpdateContext } from "../../Utils/NavbarContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const Quotes = () => {
  const setNavigation = useNavUpdateContext();
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  useEffect(() => {
    if (inView) {
      setNavigation("Light");
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
      <div className="arabicCalligraphy"></div>
      <div className="quotesimage"></div>
    </div>
  );
};

export default Quotes;
