import TickerList from "../TickerList/TickerList";
import IndividualTickerDetail from "../IndividualTickerDetail/IndividualTickerDetail";

import "./ticker-detail.css";
const TickerDetail = () => {
  return (
    <div className="ticker-detail-container">
      <div className="ticker-detail-wrapper flex-row">
        <TickerList />
        <IndividualTickerDetail />
      </div>
    </div>
  );
};

export default TickerDetail;
