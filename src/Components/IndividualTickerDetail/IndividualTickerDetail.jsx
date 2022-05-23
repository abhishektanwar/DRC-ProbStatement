import "./individual-ticker-detail-container.css";

const IndividualTickerDetail = () => {
  return (
    <div className="individual-ticker-detail-container">
      <div className="individual-ticker-detail-container-top-section">
        <h1>BTC/USD</h1>
        <div className="flex-row flex-justify-content-space-between">
          <span className="typo-md">346375</span>
          <span className="typo-md">-5.5%</span>
        </div>
      </div>
      <div className="individual-ticker-detail-container-bottom-section">
        <div className="ticker-property">
          <span className="body-typo-xs secondary-text">High</span>
          <span className="typo-md">346375</span>
        </div>
        <div className="ticker-property">
          <span className="body-typo-xs secondary-text">Low</span>
          <span className="typo-md">346375</span>
        </div>
        <div className="ticker-property">
          <span className="body-typo-xs secondary-text">Volume</span>
          <span className="typo-md">346375</span>
        </div>
      </div>
    </div>
  );
};

export default IndividualTickerDetail;
