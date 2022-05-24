import "./ticker-list.css";
import SearchBox from "../SearchBox/SearchBox";
import { useTicker } from "../../contexts/TickerSearchContext/TickerContext";
import { Loader } from "../Loader/Loader";
import Error from "../Error/Error";
const TickerList = () => {
  const { searchTicker, tickerList, fetchTickerStatus, setTickerToSubscribe } =
    useTicker();
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
              <div
                className="ticker-contianer flex-column"
                key={ticker[0]}
                onClick={() => {
                  setTickerToSubscribe(ticker[0]);
                }}
              >
                <div className="flex-row">
                  <span className="typo-xs">{ticker[0]}</span>
                  <span className="typo-xs">$ {ticker[7]}</span>
                </div>
                <div className="flex-row">
                  <span className="body-typo-md volume">{`Vol: ${ticker[8]}`}</span>
                  <span
                    className="body-typo-md volume"
                    style={{ color: ticker[6] < 0 ? "red" : "green" }}
                  >{`${(ticker[6] * 100).toFixed(2)} %`}</span>
                </div>
                <div className="flex-row">
                  <span className="body-typo-md volume">{`High: ${ticker[9]}`}</span>
                  <span className="body-typo-md volume">{`Low: ${ticker[10]}`}</span>
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
