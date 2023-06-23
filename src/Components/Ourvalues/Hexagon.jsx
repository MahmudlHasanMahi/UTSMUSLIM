const Hexagon = ({ svg, title, attr = false }) => {
  return (
    <div className={attr ? "hexagon-hidden" : "hexagon"}>
      {attr ? (
        <span className="hexagon-utmslogo">{svg}</span>
      ) : (
        <>
          <span className="hexagon-svg">{svg}</span>
          <span className="hexagon-title">{title}</span>
        </>
      )}
    </div>
  );
};

export default Hexagon;
