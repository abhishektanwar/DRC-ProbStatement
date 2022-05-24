import { useState } from "react";
import { useTickerSearch } from "../../contexts/TickerSearchContext/TickerSearchContext";
import { initSocket } from "../../socktes/TickerSocket";
import { Loader } from "../Loader/Loader";
import "./individual-ticker-detail-container.css";

const IndividualTickerDetail = () => {
  // const [st,setSt] = useState([])
  const { st, setSt } = useTickerSearch();
  //   const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  //   let msg = JSON.stringify({
  //   event: 'subscribe',
  //   channel: 'ticker',
  //   symbol: 'tBTCUSD'
  // })

  //   ws.onopen = (event) => {
  //     ws.send(msg);
  //     console.log("on open",event)
  //   };
  //   ws.onclose = (event)=>{
  //     console.log("CLOSED",event);
  //   }
  //   ws.onmessage = function (message) {
  //     const json = JSON.parse(message.data);
  //     try {
  //       if ((json[1]!== "hb")) {
  //         console.log("ws data",json)
  //         setSt(json[1]);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }

  //   };
  initSocket({ setSt, st });
  return (
    <div className="individual-ticker-detail-container">
      <div className="individual-ticker-detail-container-top-section">
        <h1>BTC/USD</h1>
        <div className="flex-row flex-justify-content-space-between">
          <span className="typo-md">{st?.[0]}</span>
          <span className="typo-md">{st?.[5]}</span>
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
    </div>
  );
};

export default IndividualTickerDetail;
