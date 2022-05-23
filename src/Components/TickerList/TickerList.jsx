import React, { useEffect, useState } from "react";
import "./ticker-list.css";
import axios from "axios";
import SearchBox from "../SearchBox/SearchBox";
import { useTickerSearch } from "../../contexts/TickerSearchContext/TickerSearchContext";

const TickerList = () => {
  const [tickerList, setTickerList] = useState([]);
  const {searchTicker} = useTickerSearch();
  let filteredTickerList =tickerList;
  const getTickerList = async () => {
    const res = await axios.request({
      url: "https://api-pub.bitfinex.com/v2/tickers",
      method: "GET",
      params: { symbols: "ALL" },
    });
    console.log("res", res.data);
    setTickerList(res.data);
  };

  if(searchTicker){
    filteredTickerList = tickerList.filter((ticker)=>ticker[0].includes(searchTicker))
    // setTickerList(searchTickerList)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getTickerList();
    },5000);
    // return clearInterval(interval)
  
  }, []);
  return (
    <div className="ticker-list-container">
      <SearchBox />
      <div className="ticker-list">
        {filteredTickerList &&
          filteredTickerList.map((ticker) => {
            return (
              <div className="ticker-contianer flex-column" key={ticker[0]}>
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
      <h2>{`Ticker search ${searchTicker}`}</h2>
    </div>
  );
};

export default TickerList;
