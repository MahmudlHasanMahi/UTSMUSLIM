// eslint-disable-next-line react/prop-types
const IconLink = ({ logo, link = "/" }) => {
  return (
    <a className="socialMediaLogo" href={link} target="_blank">
      {logo}
    </a>
  );
};

export default IconLink;
