import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  //getting user info
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    console.log("submit");
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Pasword did not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>New User Register </h1>
        </div>
        {loading && <LoadingBox />}
        {error && <MessageBox variant="danger">{error} </MessageBox>}
        <div>
          <lable htmlFor="name"> Enter Name</lable>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <lable htmlFor="email"> Email Address</lable>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <lable htmlFor="password"> Password </lable>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <lable htmlFor="confirmPassword"> Confirm Password </lable>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <lable />
          <button className="primary" type="submit">
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account ?{" "}
            <Link to={`/signin?redirect=${redirect}`}> Sign-In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterScreen;
