import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Input from "../component/Input";
import signup from "../svg/signup.svg";
import Checkbox from "./Checkbox";
import { useState } from "react";


const SignUp = () => {
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [smsChecked, setSmsChecked] = useState(false);

  const marketingLabel = "I agree to receive marketing information.";
  const smsLabel = "I agree to receive SMS texts.";

  return (
    <div>
      <Header />

      <h1
        style={{ textAlign: "center", paddingTop: 30, margin: 0 }}
        className="signup"
      >
        SIGN UP
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 0,
          paddingTop: 10,
        }}
      >
        <p
          style={{
            width: "20%",
            textAlign: "center",
            color: "#555555",
            margin: 0,
            fontSize: 14,
          }}
        >
          Complete this form and your order ships FREE! Plus earn 50 bonus
          points towards your next reward as a thank you for joining today!
        </p>
      </div>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <div className="signUpInformationContainer" style={{ width: "600px" }}>
        <p style={{ textAlign: "end", color:'#797472' }}>*Required</p>
        <Input type={"text"} placeholder={"First Name*"} />
          <Input type={"text"} placeholder={"Last Name*"} />
          <Input type={"email"} placeholder={"Email*"} />
          <Input type={"password"} placeholder={"Password*"} />
          <Input type={"text"} placeholder={"Phone Number"} />
          <Input type={"text"} placeholder={"Birthday"} />
          <Input type={"text"} placeholder={"Gender"} />
          <p className="css-0">
            Shoes Shop Does not share or sell personal info.
            <u>(See Privacy Policy)</u>{" "}
          </p>
          
          <Checkbox
        id="marketingCheckbox"
        label={marketingLabel}
        checked={marketingChecked}
        onChange={() => setMarketingChecked(!marketingChecked)}
      />
      <Checkbox
        id="smsCheckbox"
        label={smsLabel}
        checked={smsChecked}
        onChange={() => setSmsChecked(!smsChecked)}
      />
          <div></div>

          <button className="signup-button" style={{display:"flex",alignItems:"center",background:"#000", color:'white',padding:'1em 2.5em 1em 2.5em',borderRadius:15,marginTop:20}}>
            <div className="icon-container">
            <img className="signupImg" src={signup} alt="icon"/>

            </div>
            <span style={{fontSize:16,fontWeight:520,paddingLeft:10}}>Sign Up</span>
            
          </button>

          <p style={{fontSize:16,fontWeight:500,color:'#797472'}}>
           <strong style={{color:"black"}}>Already a member? </strong>If you signed up in-store you just need to use the same email address you provided to the store associate to create your online account.
          </p>
          <p style={{fontSize:16,fontWeight:500,color:'#797472', paddingBottom:40}}>
          Have an account? <span><a style={{color:'#797472',textDecoration:'underline'}} href="login">Login</a></span>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
