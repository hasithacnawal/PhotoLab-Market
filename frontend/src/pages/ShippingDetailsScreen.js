import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
  const [paymentMethod, setPaymentMethod] = useState(cart.paymentMethod);
  const [aEmail, setAEmail] = useState(userInfo.email);
  //const [cardType, setCardType] = useState(shippingDetails.cardType);
  const [cardNumber, setCardNumber] = useState(shippingDetails.cardNumber);
  const [nameOnCard, setNameOnCard] = useState(shippingDetails.nameOnCard);
  const [mm, setMm] = useState(shippingDetails.mm);
  const [yyyy, setYyyy] = useState(shippingDetails.yyyy);
  const [cvv, setCvv] = useState(shippingDetails.cvv);
  const [postalCode, setPostalCode] = useState(shippingDetails.postalCode);
  const [country, setCountry] = useState(shippingDetails.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch save shipping address

    dispatch(
      saveShippingDetails({
        aEmail,
        cardNumber,
        nameOnCard,
        mm,
        yyyy,
        cvv,
        postalCode,
        country,
      })
    );

    setPaymentMethod("Credit Card");
    props.history.push("/placeorder");
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>

      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Card Details</h1>
        </div>
        <div>
          <label htmlFor="aEmail">
            {" "}
            Alternative Email (Download Link Will Send To This Email)
          </label>
          <input
            type="text"
            id="aEmail"
            placeholder="Enter Alter Email"
            value={aEmail}
            onChange={(e) => setAEmail(e.target.value)}
            required
          ></input>
          {/* <label htmlFor="cardNumber"> Card Type</label>
          <select
            type="text"
            id="cardType"
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
            required
          >
            <option>Visa</option>
            <option>American Express</option>
            <option>Master Card</option>
          </select> */}
          <label htmlFor="cardNumber"> Card Number</label>
          <input
            type="text"
            id="cardNumber"
            placeholder="Enter Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          ></input>

          <div className="row-form">
            <label htmlFor="address"> Name On Card</label>
            <input
              type="text"
              id="adress"
              placeholder="Enter Name on Card"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
            ></input>
            <label htmlFor="cvv"> Cvv </label>
            <input
              type="text"
              id="cvv"
              placeholder="Enter cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            ></input>
          </div>
          <div className="row-form">
            <label htmlFor="mm"> Expiroty </label>
            <input
              type="text"
              id="mm"
              placeholder="Month"
              value={mm}
              onChange={(e) => setMm(e.target.value)}
            ></input>

            <input
              type="text"
              id="yyyy"
              placeholder="Year"
              value={yyyy}
              onChange={(e) => setYyyy(e.target.value)}
            ></input>
          </div>

          <label htmlFor="postalCode"> Postal Code</label>

          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></input>

          <label htmlFor="country"> Country </label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></input>
        </div>

        <div className="row-center">
          <lable />
          <button
            className="primary block"
            type="submit"
            disabled={cardNumber == null}
          >
            Continue
          </button>

          <lable />
          <button className="primary sign">
            <Link to="/payment" style={{ color: "white" }}>
              Skip
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}
