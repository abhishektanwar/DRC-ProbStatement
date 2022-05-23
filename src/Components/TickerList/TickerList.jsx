import React, { useEffect, useState } from "react";
import "./ticker-list.css";
import axios from "axios";
import SearchBox from "../SearchBox/SearchBox";

const TickerList = () => {
  const [tickerList, setTickerList] = useState([]);
  const getTickerList = async () => {
    const res = await axios.request({
      url: "https://api-pub.bitfinex.com/v2/tickers",
      method: "GET",
      params: { symbols: "ALL" },
    });
    console.log("res", res.data);
    setTickerList(res.data);
  };

  useEffect(() => {
    setInterval(() => {
      getTickerList();
    }, 5000);
  }, []);
  return (
    <div className="ticker-list-container">
      <SearchBox />
      <div className="ticker-list">
        {tickerList &&
          tickerList.map((ticker) => {
            return (
              <div className="ticker-contianer flex-column">
                <div className="flex-row">
                  <span className="typo-xs">{ticker[0]}</span>
                  <span className="typo-xs">$ {ticker[7]}</span>

                </div>
                <div className="flex-row">
                  <span className="body-typo-md volume">{`Vol: ${ticker[9]}`}</span>
                  <span className="body-typo-md volume">$ {ticker[7]}</span>

                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TickerList;
