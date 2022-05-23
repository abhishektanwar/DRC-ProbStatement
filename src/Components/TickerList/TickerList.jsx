import React, { useEffect, useState } from "react";
import "./ticker-list.css";
import axios from "axios";
import SearchBox from "../SearchBox/SearchBox";
import { useTickerSearch } from "../../contexts/TickerSearchContext/TickerSearchContext";
import { Loader } from "../Loader/Loader";
import Error from "../Error/Error";
const TickerList = () => {
  const { searchTicker, tickerList, fetchTickerStatus } = useTickerSearch();
  let filteredTickerList = tickerList;

  if (searchTicker) {
    filteredTickerList = tickerList.filter((ticker) =>
      ticker[0].includes(searchTicker.toUpperCase())
    );
  }

  return (
    <div className="ticker-list-container">
      <SearchBox />
      <div className="ticker-list">
        {fetchTickerStatus.loading ? (
          <div className="loader-container">
            <Loader />
          </div>
        ) : fetchTickerStatus.error ? (
          <Error message={fetchTickerStatus.errorMessage} />
        ) : (
          filteredTickerList &&
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
          })
        )}
      </div>
      <h2>{`Ticker search ${searchTicker}`}</h2>
    </div>
  );
};

export default TickerList;
