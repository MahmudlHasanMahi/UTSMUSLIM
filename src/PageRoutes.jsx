import { useContext } from "react";
import NavbarContext from "./Utils/NavbarContext";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
const PageRoutes = ({ children }) => {
  const ref = useRef();
  const { toggleMenu } = useContext(NavbarContext);
  const location = useLocation();
  useEffect(() => {
    if (location.hash == "") {
      ref.current.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <div
      ref={ref}
      className="pageRoutes"
      style={{ overflowY: toggleMenu ? "hidden" : "scroll" }}
    >
      {children}
    </div>
  );
};

export default PageRoutes;
