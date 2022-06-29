import DetailsView from "./components/DetailsView";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PaymentForm from "./components/PaymentForm";
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
              <Route path="/product/:title" element={<DetailsView />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/paymentForm" element={<PaymentForm />}></Route>
          </Switch>
          <Footer />
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
