import React from "react";
import "../css/footer.css";
import instore from "../svg/instore.svg";
import scrollleftinactive from "../svg/scrollleftinactive.svg";
import scrollrightactive from "../svg/scrollrightactive.svg";
import customerStyle from "../svg/customerStyle.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <label className="shop">SHOE PERK- SHOP. EARN. REDEEM. REPEAT</label>

      <a className="signIn" href="man">
        Sign In or Create an Account
      </a>

      <div className="advantagesList">
        <div className="advantagesContainer">
          <div className="advantageItem">
            <img
              style={{ width: 45, height: "auto" }}
              className="advantageLogo"
              src={instore}
              alt=""
            />

            <div className="advantageName">FREE IN-STORE PICK UP</div>
            <div className="advantageDescription">
              Choose the pick up option and get eligible orders ready in under 4
              hours.
            </div>
          </div>
        </div>
        <div className="advantagesContainer">
          <div className="advantageItem">
            <img
              style={{ width: 45, height: "auto" }}
              className="advantageLogo"
              src={instore}
              alt=""
            />

            <div className="advantageName">FREE IN-STORE PICK UP</div>
            <div className="advantageDescription">
              Choose the pick up option and get eligible orders ready in under 4
              hours.
            </div>
          </div>
        </div>
        <div className="advantagesContainer">
          <div className="advantageItem">
            <img
              style={{ width: 45, height: "auto" }}
              className="advantageLogo"
              src={instore}
              alt=""
            />

            <div className="advantageName">FREE IN-STORE PICK UP</div>
            <div className="advantageDescription">
              Choose the pick up option and get eligible orders ready in under 4
              hours.
            </div>
          </div>
        </div>
        <div className="advantagesContainer">
          <div className="advantageItem">
            <img
              style={{ width: 45, height: "auto" }}
              className="advantageLogo"
              src={instore}
              alt=""
            />

            <div className="advantageName">FREE IN-STORE PICK UP</div>
            <div className="advantageDescription">
              Choose the pick up option and get eligible orders ready in under 4
              hours.
            </div>
          </div>
        </div>
        <div className="advantagesContainer">
          <div className="advantageItem">
            <img
              style={{ width: 45, height: "auto" }}
              className="advantageLogo"
              src={instore}
              alt=""
            />

            <div className="advantageName">FREE IN-STORE PICK UP</div>
            <div className="advantageDescription">
              Choose the pick up option and get eligible orders ready in under 4
              hours.
            </div>
          </div>
        </div>
      </div>

      <div className="customerStyleReview">
        <div className="customerGrateful">
          <div className="scrollContainer">
            <img style={{ paddingRight: 30 }} src={scrollleftinactive} alt="" />
            <img src={scrollrightactive} alt="" />
          </div>

          <div className="compliments">
            <div style={{ fontWeight: 600, fontSize: 24, maxWidth: 350 }}>
              We Love To See Your Style!
            </div>
            <div style={{ color: "#808089", fontSize: 16, maxWidth: 280, paddingTop:20 }}>
              #shoeshop for a chance to be featured
            </div>
          </div>
        </div>

        <div className="customerStyle">
          <img className="customerImgStyle" src={customerStyle} alt="" />
          <img className="customerImgStyle" src={customerStyle} alt="" />
          <img className="customerImgStyle" src={customerStyle} alt="" />
          <img className="customerImgStyle" src={customerStyle} alt="" />
          <img className="customerImgStyle" src={customerStyle} alt="" />
          <img className="customerImgStyle" src={customerStyle} alt="" />
          <img className="customerImgStyle" src={customerStyle} alt="" />
          <img className="customerImgStyle" src={customerStyle} alt="" />
          <img className="customerImgStyle" src={customerStyle} alt="" />
        </div>
      </div>

      <hr class="separator" />

      <div className="bottom">
        <div className="join">
          <label className="firstGift">
            JOIN OUR EMAIL LIST AND GET $10 OFF YOUR PURCHASE OF $59.98
          </label>
          <input type="email" className="emailInput" placeholder="Email Address"/>
          <p style={{color:'#797472', fontSize:12, fontWeight:300, width:'98%'}}>
            By signing up via text, you agree to receive recurring automated
            promotional and personalized marketing text messages (e.g. cart
            reminders) from Shoe Carnival at the cell number used when signing
            up. Consent is not a condition of any purchase. If you are under 18,
            you must get consent from your parent or guardian. Reply HELP for
            help and STOP to cancel. Msg frequency varies. Msg & data rates may
            apply. Terms & Privacy.
          </p>
        </div>

        <div className="vlFooter"></div>

        <div className="shopInformations">
          <div className="inforContainer">
              <label className="about">About</label>
              <a className="hyperLink" href="aboutUs">About Us</a>
              <a className="hyperLink" href="about">Carrers</a>
              <a className="hyperLink" href="about">Investors</a>
              <a className="hyperLink" href="about">Blog</a>
              <a className="hyperLink" href="about">Vendor Code of Conduct</a>
          </div>
          
          <div className="inforContainer">
              <label className="about">HELP</label>
              <a className="hyperLink" href="about">Order Status</a>
              <a className="hyperLink" href="about">Customer Service</a>
              <a className="hyperLink" href="about">Contact Us</a>
              <a className="hyperLink" href="about">Returns & Exchanges</a>
              <a className="hyperLink" href="about">Shipping</a>
              <a className="hyperLink" href="about">Promotions & Exclusions</a>
              
          </div>
          <div className="inforContainer">
              <label className="about">SHOE PERKS</label>
              <a className="hyperLink" href="about">My Account</a>
              <a className="hyperLink" href="about">Create an Account</a>
              <a className="hyperLink" href="about">FAQ’s</a>
              <a className="hyperLink" href="about">Rewards</a>
          </div>
          <div className="inforContainer">
              <label className="about">STORES</label>
              <a className="hyperLink" href="about">View All Stores</a>
              <a className="hyperLink" href="about">In-store Offers</a>
              <a className="hyperLink" href="about">In-store Pickup</a>
              <a className="hyperLink" href="about">In-store Purchases</a>
          </div>
          <div className="inforContainer">
              <label className="about">SHOP</label>
              <a className="hyperLink" href="about">Coupon & Deals</a>
              <a className="hyperLink" href="about">Woman’s Shoes</a>
              <a className="hyperLink" href="about">Men’s Shoes</a>
              <a className="hyperLink" href="about">Kids Shoes</a>
              <a className="hyperLink" href="about">Accessories</a>
              <a className="hyperLink" href="about">Gift Cards</a>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
