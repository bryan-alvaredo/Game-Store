import DetailsView from "./components/DetailsView";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Index from "./screens/Index";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <CartProvider>
          <Navbar />
          <Switch>
              <Route path="/*" element={<Index />} />
              <Route path="/product/:tittle" element={<DetailsView ></DetailsView>} />
              <Route path="/cart" element={<Cart />} />
          </Switch>
          <Footer />
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
