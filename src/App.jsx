import DetailsView from "./components/DetailsView";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Index from "./screens/Index";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
            <Route path="/*" element={<Index />} />
            <Route path="/product/:tittle" element={<DetailsView />} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
