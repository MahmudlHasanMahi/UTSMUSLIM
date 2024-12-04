import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Store = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.open(
      "https://utsms-apparel.square.site/",
      "_blank",
      "rel=noopener noreferrer"
    );

    navigate(`${location.state ? location.state.prevPath : "/"}`);
  }, []);
  return;
};

export default Store;
