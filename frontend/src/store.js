import { applyMiddleware, combineReducers, compose, createStore } from "redux";
//import data from "./data";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderMineListReducer,
  orderPayReducer,
} from "./reducers/orderReducer";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducer";
import {
  userDetailsReducer,
  userRegisterReducer,
  userSigninReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducer";

const intialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingDetails: localStorage.getItem("shippingDetails")
      ? JSON.parse(localStorage.getItem("shippingDetails"))
      : {},
    paymentMethod: localStorage.getItem("paymentMethod")
      ? JSON.parse(localStorage.getItem("paymentMethod"))
      : "paypal",
  },
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
});

//static product request

// const reducer = (state, acton) => {
//   return { products: data.products };
// };

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  intialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
