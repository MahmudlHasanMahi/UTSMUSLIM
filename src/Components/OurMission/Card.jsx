const Card = ({ logo, postTitle, heading, postTitleColor }) => {
  return (
    <div className="card">
      <span className="card-logo">{logo}</span>
      <span className="card-postTitle" style={{ color: postTitleColor }}>
        {postTitle}
      </span>
      <span className="card-heading">{heading}</span>
    </div>
  );
};

export default Card;
