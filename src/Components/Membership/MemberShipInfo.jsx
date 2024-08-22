const MemberShipInfo = ({ logo, title }) => {
  return (
    <div className="membershipInfo-container">
      <div className="membershipInfo-logo">{logo}</div>

      <span className="membershipInfo-title">{title}</span>
    </div>
  );
};

export default MemberShipInfo;
