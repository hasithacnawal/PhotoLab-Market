import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingDetails } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingDetailsScreen(props) {
  //redirect if not signin
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingDetails } = cart;
  if (!userInfo) {
    props.history.push("/signin");
  }

  const [fullName, setFullName] = useState(shippingDetails.fullName);
  const [address, setAddress] = useState(shippingDetails.address);
  const [city, setCity] = useState(shippingDetails.city);
  const [postalCode, setPostalCode] = useState(shippingDetails.postalCode);
  const [country, setCountry] = useState(shippingDetails.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch save shipping address
    dispatch(
      saveShippingDetails({ fullName, address, city, postalCode, country })
    );

    props.history.push("/payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>

      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Details</h1>
        </div>
        <div>
          <label htmlFor="fullName"> Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>

          <label htmlFor="address"> Adderess</label>
          <input
            type="text"
            id="adress"
            placeholder="Enter adress"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>

          <label htmlFor="city"> City </label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>

          <label htmlFor="postalCode"> Postal Code</label>

          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>

          <label htmlFor="country"> Country </label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <lable />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
