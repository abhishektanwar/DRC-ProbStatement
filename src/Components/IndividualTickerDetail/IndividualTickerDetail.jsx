import { useEffect, useState } from "react";
import { useTicker } from "../../contexts/TickerSearchContext/TickerContext";
import { initSocket } from "../../socktes/TickerSocket";
import { Loader } from "../Loader/Loader";
import "./individual-ticker-detail-container.css";

const IndividualTickerDetail = () => {
  const { st, setSt, tickerToSubscribe } = useTicker();
  useEffect(()=>{
    const {ws}=initSocket({ setSt, tickerToSubscribe });
    return ()=>ws.close();
  },[tickerToSubscribe])
  return (
    <div className="individual-ticker-detail-container">
      {st === [] ? (
        <Loader />
      ) : (
        <>
          <div className="individual-ticker-detail-container-top-section">
            <h1>{tickerToSubscribe}</h1>
            <div className="flex-row flex-justify-content-space-between">
              <span className="typo-md">{st?.[0]}</span>
              <span className="typo-md" style={{ color: st?.[5] < 0 ? "red" : "green" }}>{(st?.[5] ? `${(st?.[5] * 100).toFixed(2)}%` : '')}</span>

            </div>
          </div>
          <div className="individual-ticker-detail-container-bottom-section">
            <div className="ticker-property">
              <span className="body-typo-xs secondary-text">High </span>
              <span className="typo-md">{st?.[8]}</span>
            </div>
            <div className="ticker-property">
              <span className="body-typo-xs secondary-text">Low </span>
              <span className="typo-md">{st?.[9]}</span>
            </div>
            <div className="ticker-property">
              <span className="body-typo-xs secondary-text">Volume </span>
              <span className="typo-md">{st?.[7]}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default IndividualTickerDetail;
