import "./App.css";
import TickerDetail from "./Components/TickerDetail/TickerDetail";
import { TickerProvider } from "./contexts/TickerContext/TickerContext";

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
