import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Members = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.open(
      "https://www.activateuts.com.au/clubs/muslim-society-utsms/",
      "_blank",
      "rel=noopener noreferrer"
    );

    navigate(`${location.state ? location.state.prevPath : "/"}`);
  }, []);
  return;
};

export default Members;
