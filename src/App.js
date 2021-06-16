import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import HearderComponent from "./Components/Header/HearderComponent";

function App() {
  return (
    <BrowserRouter>
      <HearderComponent />;
      <Footer />
    </BrowserRouter>
  );
}

export default App;
