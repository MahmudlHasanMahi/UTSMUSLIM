import { createContext } from "react";
import { useState, useContext } from "react";

const navContext = createContext();
const navUpdate = createContext();
export function useNavContext() {
  return useContext(navContext);
}
export function useNavUpdateContext() {
  return useContext(navUpdate);
}

export default function NavbarProvider({ children }) {
  const [navbar, setNavbar] = useState(null);
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

  return (
    <navContext.Provider value={navbar}>
      <navUpdate.Provider value={toogleThemeNavbar}>
        {children}
      </navUpdate.Provider>
    </navContext.Provider>
  );
}
