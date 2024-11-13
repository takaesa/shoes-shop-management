import "./style.css";
import React from "react";
import searchIcon from "./svg/search.svg";
import profile from "./svg/profile-thin.svg";
import cart from "./svg/cart-thin.svg";

function Home() {
  return (
    <div className="header">
      <div className="advertise">
        Get $10 back on pick up orders, FREE delivery, & more! Join Now!
      </div>
      <div className="selections">
        <div className="logo">Logo</div>
        <div className="items">
          <a className="item" href="woman">
            WOMAN
          </a>
          <a className="item" href="woman">
            MENS
          </a>
          <a className="item" href="woman">
            KIDS
          </a>
          <a className="item" href="woman">
            ACCESSORIES
          </a>
          <a className="item" href="woman">
            BRANDS
          </a>
          <a className="item" href="woman">
            DEALS
          </a>
          <a className="item" href="woman">
            NIKE DEALS
          </a>
        </div>
        <div style={{ display: "flex" }}>
          <div className="login">
            Sign In
            <img className="profileIcon" src={profile} alt="profile" />
            <img className="profileIcon" src={cart} alt="cart" />
          </div>
          <div className="search">
            Search
            <img className="Icon" src={searchIcon} alt="searchIcon" />
          </div>
        </div>
      </div>

      <hr class="separator" />

    </div>
  );
}

export default Home;
