import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example",
      "_blank",
      "rel=noopener noreferrer"
    );

    navigate(`${location.state ? location.state.prevPath : "/"}`);
  }, []);

  return;
};

export default Contact;
