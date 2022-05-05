import React from 'react';
import  ReactDOM  from 'react-dom/client';
//import Product from './Components/product';
import '../node_modules/bootstrap/dist/css/bootstrap.css' ;
import '../node_modules/@fortawesome/fontawesome-free/css/all.css' ;
import '../node_modules/react-toastify/dist/ReactToastify.css';
//import ShoppingCart from './Components/shoppingCart';
import App from './Components/App';
import {BrowserRouter} from "react-router-dom"
//import reportWebVitals from "./reportWebVitals";

//ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.querySelector("#root"))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
      <BrowserRouter><App/></BrowserRouter>
    
//  </React.StrictMode>
);

//reportWebVitals();