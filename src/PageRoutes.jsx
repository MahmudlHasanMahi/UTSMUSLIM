import { useContext } from "react";
import NavbarContext from "./Utils/NavbarContext";
const PageRoutes = ({ children }) => {
  const { toggleMenu } = useContext(NavbarContext);

  return (
    <div
      className="pageRoutes"
      style={{ overflowY: toggleMenu ? "hidden" : "scroll" }}
    >
      {children}
    </div>
  );
};

export default PageRoutes;
