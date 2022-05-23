import logo from "./logo.svg";
import "./App.css";
import TickerList from "./Components/TickerList/TickerList";
import TickerDetail from "./Components/TickerDetail/TickerDetail";
import { TickerSearchProvider } from "./contexts/TickerSearchContext/TickerSearchContext";

function App() {
  return (
    <div className="App">
      <TickerSearchProvider>
        <TickerDetail />
      </TickerSearchProvider>
    </div>
  );
}

export default App;
