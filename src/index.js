import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/Product.scss";
import "./styles/Base.scss";
import "./styles/DetailsView.scss";
import "./styles/Index.scss";
import "./styles/Footer.scss";
import "./styles/Navbar.scss";
import "./styles/Cart.scss";
import "./styles/PaymentForm.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals