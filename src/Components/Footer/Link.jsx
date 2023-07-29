const Link = ({ title, link }) => {
  return (
    <span className="Link">
      <a href={link} target="_blank">
        {title}
      </a>
    </span>
  );
};

export default Link;
