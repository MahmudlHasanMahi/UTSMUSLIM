const QuotesContent = ({ intro, quote, origin }) => {
  return (
    <div className="quotesContent">
      <span className="intro">{intro}</span>
      <span className="quote">{quote}</span>
      <span className="origin">{origin}</span>
    </div>
  );
};

export default QuotesContent;
