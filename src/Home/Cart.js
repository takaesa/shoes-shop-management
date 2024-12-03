import Product from "../component/Product.js";
import scrollleftinactive from "../svg/scrollleftinactive.svg";
import scrollrightactive from "../svg/scrollrightactive.svg";
import "../css/cart.css";
import Header from "../Home/Header.js";
import Footer from "../Home/Footer.js";
import { useEffect } from "react";
import ProductinCart from "../component/ProductinCart.js";

import flexiblepayment from "../svg/flexiblepayment.svg";
import Input from "../component/Input.js";
import securecheckout from "../svg/securecheckout.svg"
import headphones from "../svg/headphones.svg"

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
                paddingTop: 20,
              }}
            >
              <div className="progressBar">
                <div className="progressFill"></div>
                <div className="progressMax">200</div>
              </div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#000",
                  position: "relative",
                  right: 0,
                  margin: "15 0 0 -15",
                }}
              >
                200
              </p>
            </div>
          </div>

          <div className="cartLayout">
            <div className="cartItems">
              <p
                style={{
                  fontSize: 26,
                  fontWeight: 600,
                  color: "#000",
                  textAlign: "left",
                  margin: 0,
                }}
              >
                YOUR BAG (3{props.count} ITEMS)
              </p>
              <hr class="cart-separator" />
              <p
                style={{
                  fontSize: 26,
                  fontWeight: 600,
                  color: "#000",
                  textAlign: "left",
                  margin: 0,
                }}
              >
                DELIVER TO UIT SCHOOL (3{props.count} ITEMS)
              </p>
              <hr class="cart-separator" />
              <div className="ProductInCartList">
                <ProductinCart></ProductinCart>
                <ProductinCart></ProductinCart>
                <ProductinCart></ProductinCart>
                <ProductinCart></ProductinCart>
              </div>
            </div>

            <div>
            <div className="orderSummary">
              <div
                style={{
                  backgroundColor: "#F7F7F6",
                  borderBottom: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#000",
                    textAlign: "left",
                    margin: 0,
                    padding: "20 20 20 20",
                  }}
                >
                  ORDER SUMMARY
                </p>
              </div>
              <div className="summContainer">
                <div>
                  <div className="subTotal">
                    <p style={{ margin: 0 }}>Subtotal</p>
                    <p className="subTotalPrice">$209.97{props.subprice}</p>
                  </div>
                </div>
                <div>
                  <div className="sale">
                    <p style={{ margin: 0 }}>Sale Price</p>
                    <p className="salePrice">-$209.97{props.saleprice}</p>
                  </div>
                </div>
                <div>
                  <div className="sale">
                    <p style={{ margin: 0 }}>Shipping</p>
                    <p className="salePrice">$209.97{props.ship}</p>
                  </div>
                </div>

                <hr class="summary-separator" />

                <div className="amountDue">
                  <p style={{ margin: 0 }}>Amount Due</p>
                  <p className="amountDuePrice">$209.97{props.subprice}</p>
                </div>
                <div className="discountCodeContainer">
                  <div>
                  <Input
                    id={"discountCode"}
                    type={"text"}
                    placeholder={"Enter a Promo"}
                  />

                  </div>
                  <div id="applyDiscountCodeBtn" className="applyDiscountCodeBtnContainer">
                    <button className="applyCodeBtn">Apply</button>
                  </div>
                </div>
                <div id="secureCheckoutBtn" className="secureCheckoutBtnContainer">
                    <button className="secureCheckoutBtn">
                    <div>
                      <img style={{margin:0, paddingRight:10, marginBottom:3,scale:'1.2'}} src={securecheckout} alt="securecheckout"/>
                    </div>Secure Checkout</button>
                  </div>
              </div>
            </div>
            <div className="customerServiceContainer">
                  <div>
                    <img src={headphones} alt=""/>
                  </div>
                  <p style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#000",
                    textAlign: "left",
                    margin: 0,
                    paddingTop:20
                  }}>CUSTOMER SERVICE</p>
                  <p style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#000",
                    textAlign: "left",
                    margin: 0,
                    paddingTop:10
                  }}>Your Customer Service Team is available to assist you from 7am to 10pm CST, 7 days a week.</p>
            </div>
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
