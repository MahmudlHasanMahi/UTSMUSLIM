import { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
const NavbarContext = createContext();
export default NavbarContext;
export function NavbarProvider({ children }) {
  const [navbar, setNavbar] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.state?.prevPath != location.pathname) {
      setToggleMenu(false);
    }
  }, [location]);
  function toogleThemeNavbar(value) {
    if (value == "Light") {
      setNavbar(false);
    }
    if (value == "Dark") {
      setNavbar(true);
    }
    if (value == null) {
      setNavbar(null);
    }
  }
  const contextData = {
    toogleThemeNavbar: toogleThemeNavbar,
    navbar: navbar,
    setToggleMenu: setToggleMenu,
    toggleMenu: toggleMenu,
  };
  return (
    <NavbarContext.Provider value={contextData}>
      {children}
    </NavbarContext.Provider>
  );
}
