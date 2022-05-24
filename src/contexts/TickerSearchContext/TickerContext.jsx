import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const TickerContext = createContext();

const TickerProvider = ({ children }) => {
  const [searchTicker, setSearchTicker] = useState("");
  const [tickerList, setTickerList] = useState([]);
  const [tickerToSubscribe, setTickerToSubscribe] = useState("tBTCUSD");
  const [tickerDetails, setTickerDetails] = useState([]);
  const [fetchTickerStatus, setFetchTickerStatus] = useState({
    loading: false,
    error: false,
    errorMessage: "",
  });
  const getTickerList = async () => {
    try {
      const res = await axios.request({
        url: "https://api-pub.bitfinex.com/v2/tickers",
        method: "GET",
        params: { symbols: "ALL" },
      });
      console.log(res);
      if (res.status === 200) {
        setTickerList(res.data);
        setFetchTickerStatus((prev) => ({
          ...prev,
          error: false,
          errorMessage: "",
        }));
      }
    } catch (err) {
      console.log("err", err);
      setFetchTickerStatus((prev) => ({
        ...prev,
        error: true,
        errorMessage: "Failed to load ticker list",
      }));
    } finally {
      setFetchTickerStatus((prev) => ({ ...prev, loading: false }));
    }
  };
  useEffect(() => {
    setFetchTickerStatus((prev) => ({ ...prev, loading: true }));
    const interval = setInterval(() => {
      getTickerList();
      setFetchTickerStatus((prev) => ({ ...prev, loading: false }));
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const handleTickerSearch = (value) => {
    setSearchTicker(value);
  };

  return (
    <TickerContext.Provider
      value={{
        searchTicker,
        handleTickerSearch,
        tickerList,
        setTickerList,
        fetchTickerStatus,
        tickerDetails,
        setTickerDetails,
        tickerToSubscribe,
        setTickerToSubscribe,
      }}
    >
      {children}
    </TickerContext.Provider>
  );
};

const useTicker = () => useContext(TickerContext);

export { useTicker, TickerProvider };
