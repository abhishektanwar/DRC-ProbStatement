import logo from "./logo.svg";
import "./App.css";
import TickerList from "./Components/TickerList/TickerList";
import TickerDetail from "./Components/TickerDetail/TickerDetail";
import { TickerProvider } from "./contexts/TickerSearchContext/TickerContext";

function App() {
  return (
    <div className="App">
      <TickerProvider>
        <TickerDetail />
      </TickerProvider>
    </div>
  );
}

export default App;
