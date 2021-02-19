import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import CartScreen from "./pages/CartScreen";
import ProductList from "./pages/ProductList";
import OrderHistory from "./pages/OrderHistory";
import OrderScreen from "./pages/OrderScreen";
import PaymentMethodScreen from "./pages/PaymentMethodScreen";
import PlaceOrderScreen from "./pages/PlaceOrderScreen";
import ProductScreen from "./pages/ProductScreen";
import ProfileScreen from "./pages/ProfileScreen";
import RegisterScreen from "./pages/RegisterScreen";
import ShippingDetailsScreen from "./pages/ShippingDetailsScreen";
import SigninScreen from "./pages/SigninScreen";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container ">
        <Navbar />
        <main>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route exact path="/products" component={ProductList}></Route>
          <Route exact path="/signin" component={SigninScreen}></Route>
          <PrivateRoute
            exact
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <Route exact path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/register" component={RegisterScreen}></Route>
          <Route
            path="/shipping"
            component={ShippingDetailsScreen}
            exact
          ></Route>
          <Route path="/payment" component={PaymentMethodScreen} exact></Route>
          <Route path="/placeorder" component={PlaceOrderScreen} exact></Route>
          <Route path="/order/:id" component={OrderScreen} exact></Route>
          <Route
            path="/user/orderhistory"
            component={OrderHistory}
            exact
          ></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
