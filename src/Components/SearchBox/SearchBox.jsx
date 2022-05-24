import { useEffect } from "react";
import { useTicker } from "../../contexts/TickerContext/TickerContext";
import "./search-box.css";

const SearchBox = ({ handleSearch }) => {
  
  const {searchTicker:searchInput,handleTickerSearch} = useTicker();
  useEffect(() => {
    if (searchInput !== "") {
      // handleSearch("");
    }
  }, [searchInput]);
  return (
    <form className="search-bar-container">
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => handleTickerSearch(e.target.value)}
      />
      <i
        className="fa fa-search"
        style={{ cursor: "pointer" }}
        onClick={() => handleSearch(searchInput)}
      >
        {" "}
      </i>
    </form>
  );
};

export default SearchBox;
