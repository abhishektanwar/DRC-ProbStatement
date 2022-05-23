import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const TickerSearchContext = createContext();

const TickerSearchProvider = ({ children }) => {
  const [searchTicker, setSearchTicker] = useState("");
  const [tickerList, setTickerList] = useState([]);
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
    setInterval(() => {
      getTickerList();
      setFetchTickerStatus((prev) => ({ ...prev, loading: false }));
    }, 5000);
  }, []);
  const handleTickerSearch = (value) => {
    setSearchTicker(value);
  };

  return (
    <TickerSearchContext.Provider
      value={{
        searchTicker,
        handleTickerSearch,
        tickerList,
        setTickerList,
        fetchTickerStatus,
      }}
    >
      {children}
    </TickerSearchContext.Provider>
  );
};

const useTickerSearch = () => useContext(TickerSearchContext);

export { useTickerSearch, TickerSearchProvider };
