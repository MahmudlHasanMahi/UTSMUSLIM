const Links = ({ heading, children }) => {
  return (
    <div className="link-container">
      <span className="Link-title">{heading}</span>
      {children}
    </div>
  );
};

export default Links;
