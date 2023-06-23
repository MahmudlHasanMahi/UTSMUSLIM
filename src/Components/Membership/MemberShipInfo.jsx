const MemberShipInfo = ({ logo, title }) => {
  return (
    <div className="membershipInfo-container">
      <span>{logo}</span>
      <span className="membershipInfo-title">{title}</span>
    </div>
  );
};

export default MemberShipInfo;
