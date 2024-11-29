import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Input from "../component/Input";
import Checkbox from "./Checkbox";
import { useState } from "react";
import "../css/signin.css"

// import SignUp from '../Login/SignUp'

const SignIn = () => {
  const [passwordRemember, setpasswordRemember] = useState(false);
  const passowrdLabel = "Remember Me";

  return (
    <div>
      <Header />

      <h1
        style={{ textAlign: "center", paddingTop: 30, margin: 0 }}
        className="signup"
      >
        SIGN IN
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 0,
          paddingTop: 10,
        }}
      ></div>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <div className="signUpInformationContainer" style={{ width: "600px" }}>
          <p style={{ textAlign: "end", color:'#797472' }}>*Required</p>
          <Input type={"email"} placeholder={"Email*"} />
          <Input type={"password"} placeholder={"Password*"} />

          <Checkbox
            id="rememberMeCheckbox"
            label={passowrdLabel}
            checked={passwordRemember}
            onChange={() => setpasswordRemember(!passwordRemember)}
          />
          <div className="buttonContainer"><button
            className="signin-button"
            >
              Sign In
          </button></div>
          
          <div style={{display:"flex",justifyContent:"center"}}>
          <a href="forgotpassword" style={{ fontSize: 16, fontWeight: "bold", color: "#797472",textAlign:"center" }}>
          Forgot Password?
          </a>
          </div>
          
          <hr className="hr"></hr>
          <div style={{display:"flex", justifyContent:"center", flexDirection:"column",textAlign:"center"}}>
            <p         
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#000000",
              margin:0,
              paddingTop:20
            }}
          >
            DON'T HAVE ACCOUNT?{" "}
            </p>
            <p         
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "#797472",
              margin:0,
              paddingTop:10,
              paddingBottom:35
            }}
          >
            Creating an account is easy. Just follow this link to enjoy the benefits of being a registered customer.{" "}
            </p>
            
          </div>
          <div className="buttonContainer">
            <button
            className="signup-button"
            >
              Sign Up
          </button></div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;
