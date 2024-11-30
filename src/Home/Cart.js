import Product from "../component/Product.js";
import scrollleftinactive from "../svg/scrollleftinactive.svg";
import scrollrightactive from "../svg/scrollrightactive.svg";
import "../css/cart.css";
import Header from "../Home/Header.js";
import Footer from "../Home/Footer.js";
import { useEffect } from "react";

import flexiblepayment from "../svg/flexiblepayment.svg";

const Cart = (props) => {
  useEffect(() => {
    const progressFill = document.querySelector(".progressFill");

    const progressPoints = 180; // Current points
    const maxPoints = 200; // Maximum points
    const progressPercentage = (progressPoints / maxPoints) * 100;

    progressFill.style.width = `${progressPercentage}%`;
  }, []);

  return (
    <div>
      <Header />

      <div className="cartContainer">
        <div className="cartState">
          <p style={{ margin: 0 }}>YOUR CART IS CURRENTLY EMPTY</p>

          <div className="progressContainer">
            <div className="pointContainer">
              <img
                style={{ height: 40, width: "auto", objectFit: "contain" }}
                src={flexiblepayment}
                alt="Flexible Payment"
              />
              <span
                style={{
                  paddingLeft: 20,
                  fontSize: 16,
                  color: "black",
                  fontWeight: 600,
                }}
              >
                {" "}
                You've earned {props.point} points towards your next reward{" "}
              </span>
            </div>
            <div
              style={{
                alignSelf: "center",
                display: "flex",
                width: "100%",
                justifyContent: "center",
                paddingTop:20
              }}
            >
              <div className="progressBar">
                <div className="progressFill"></div>
                <div className="progressMax">200</div>
              </div>
              <p style={{fontSize:14,fontWeight:500,color:'#000',position:'relative',right:0,margin:'15 0 0 -15'}}>200</p>
            </div>
          </div>
        </div>

        <div className="buttonContainer">
          <button className="signin-button">Sign In</button>
          <button className="signup-button">Create Account</button>
        </div>
      </div>

      <div className="sectionName">
        <p>YOU MAY ALSO LOVE</p>

        <div className="productScrollContainer">
          <img style={{ paddingRight: 30 }} src={scrollleftinactive} alt="" />
          <img src={scrollrightactive} alt="" />
        </div>
      </div>

      <div className="productList">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
