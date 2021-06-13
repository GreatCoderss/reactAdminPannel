import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HearderComponent from "./Components/Header/HearderComponent";

function App() {
  return (
    <BrowserRouter>
      <HearderComponent />;
    </BrowserRouter>
  );
}

export default App;
