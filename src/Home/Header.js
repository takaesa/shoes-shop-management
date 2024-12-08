import "../css/header.css";
import React, { useState } from "react";
import searchIcon from "../svg/search.svg";
import profile from "../svg/profile-thin.svg";
import cart from "../svg/cart-thin.svg";
import instore from "../svg/instore.svg";
import arrowExpand from "../svg/arrowexpand.svg";
import available from "../svg/availableIcon.svg";
import delivery from "../svg/delivery.svg";
import shoppingbag from "../svg/shoppingbag.svg";

function Login(props) {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div className="login">
        {/* Sign In */}
        <label>Hi, {props.userName}</label>
        <img className="profileIcon" src={profile} alt="profile" />
        <img className="profileIcon" src={cart} alt="cart" />
      </div>
      <div className="search">
        Search
        <img className="Icon" src={searchIcon} alt="searchIcon" />
      </div>
    </div>
  );
}

function Header() {
  const [hoveredMenu, sethoveredMenu] = useState(null)

  const menuItems = {
    WOMANS:{
      title:"ATHLETICS & SNEAKERS",
      items:["Fashion & Lifestyle","Platform", "High Top", "Training & Gym", "Running"]
    },
    MENS:{
      title:"ATHLETICS & SNEAKERS",
      items:["Fashion & Lifestyle","Platform", "High Top", "Training & Gym", "Running"]
    },
    KIDS:{
      title:"ATHLETICS & SNEAKERS",
      items:["Fashion & Lifestyle","Platform", "High Top", "Training & Gym", "Running"]
    }
  }
  const handleMouseEnter = (menuKey) => {
    sethoveredMenu(menuKey)
  }
  const handleMouseLeave = () => {
    sethoveredMenu(null)
  }

  return (
    <div className="header">
      <div className="advertise">
        Get $10 back on pick up orders, FREE delivery, & more! Join Now!
      </div>
      <div className="selections">
        <div className="logo">Logo</div>
        <div className="menuContainer">
          {Object.keys(menuItems).map((menuKey) =>(
            <div
            key={menuKey}
            className="menuItem"
            onMouseEnter={() => handleMouseEnter(menuKey)}
            onMouseLeave={handleMouseLeave}
          >
            {menuKey}
          </div>
          ))}
          {hoveredMenu && (
            <div className="" onMouseEnter={()=>handleMouseEnter(hoveredMenu)} onMouseLeave={handleMouseLeave}>
              <div className="menuOverlayContent">
                <h3>{menuItems[hoveredMenu].title}</h3>
                <ul>
                  {menuItems[hoveredMenu].items.map((item,index)=>(
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <a className="menuItem" href="woman">
            WOMAN
          </a>
        </div>
        <Login></Login>
      </div>

      <hr class="separator" />

      <div className="subheader">
        <div className="shopLocation">
          <img src={instore} alt="instore" />
          <div className="location">
            <div className="detailLocation">
              The Shoppes on Six (Elkhart, IN)
            </div>
            <div className="openTime">
              <img style={{marginRight: 5}} src={available} alt=""></img>
              Open Until 9PM</div>
          </div>
          <img style={{marginLeft:10, marginTop:-15}} src={arrowExpand} alt="instore" />
        </div>
        <div className="options">
            <div className="Container">
              <img style={{marginRight:10}} src={delivery} alt="instore" />
              Get Free Shipping! 
            </div>
            <div className="Container">
              <img style={{marginRight:10}} src={instore} alt="instore" />
              Free In-Store Pickup!
            </div>
            <div className="Container">
              <img style={{marginRight:10}} src={shoppingbag} alt="instore" />
              Shop What’s Trending!
          </div>
        </div>
        <div className="customerServices">
          <a className="serviceText" href="woman">Order Status</a>
          <div className="vl"></div>
          <a className="serviceText" href="woman">Customer Service</a>
          <div className="vl"></div>
          <a className="serviceText" href="woman">Gift Cards</a>
        </div>
      </div>

      <hr class="separator" />

      <div className="footer"></div>
    </div>
  );
}

export default Header;
