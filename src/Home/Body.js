import React from "react";
import "../css/mainbody.css";
import rightscroller from "../svg/rightscroller.svg";
import discount1 from "../svg/discount1.svg";
import discount2 from "../svg/discount2.svg";
import discount3 from "../svg/discount3.svg";
import arrowright from "../svg/arrowright.svg";
import discount4 from "../svg/discount4.svg";
import favorite from "../svg/favorite.svg";
import product from "../svg/product.svg";
// import favoriteHover from "../svg/favoriteHover.svg"
import productColor from "../svg/productColor.svg";
import starRating from "../svg/starRating.svg"
import Product from "../component/Product.js"

const Body = () => {
  return (
    <div>
      <div className="trendingSearchContainer">
        <p style={{ fontSize: 14, fontWeight: 500 }}>Trending Searches</p>

        <div className="trendingSearchItems">
          <button className="trenditem">boots</button>
          <button className="trenditem">shoes</button>
          <button className="trenditem">sleepings bag</button>
          <button className="trenditem">boots</button>
          <button className="trenditem">boots</button>
          <button className="trenditem">boots</button>
          <button className="trenditem">boots</button>
          <button className="trenditem">boots</button>
          <button className="trenditem">boots</button>
          <button className="trenditem">boots</button>
          <button className="trenditem">boots</button>
        </div>

        <button className="trendScrollerBtn">
          <img src={rightscroller} alt="" />
        </button>
      </div>

      <p className="fallFlashSales">fall flash sales</p>
      <button id="feedBack">
        <p>FEEDBACK</p>
      </button>

      <div className="discountContainer">
        <div className="discountItem">
          <img
            style={{ width: 400, height: 550, objectFit: "contain" }}
            src={discount1}
            alt=""
          />
          <div style={{ display: "flex" }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                marginTop: 10,
              }}
            >
              Shop All Sale Boots{" "}
            </p>
            <img src={arrowright} alt="" />
          </div>
        </div>
        <div className="discountItem">
          <img
            style={{ width: 400, height: 550, objectFit: "contain" }}
            src={discount2}
            alt=""
          />
          <div style={{ display: "flex" }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                marginTop: 10,
              }}
            >
              Shop Basketball{" "}
            </p>
            <img src={arrowright} alt="" />
          </div>
        </div>
        <div className="discountItem">
          <img
            style={{ width: 400, height: 550, objectFit: "contain" }}
            src={discount3}
            alt=""
          />
          <div style={{ display: "flex" }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                marginTop: 10,
              }}
            >
              Shop Sneakers{" "}
            </p>
            <img src={arrowright} alt="" />
          </div>
        </div>
        <div className="discountItem">
          <img
            style={{ width: 400, height: 550, objectFit: "contain" }}
            src={discount4}
            alt=""
          />
          <div style={{ display: "flex" }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                marginTop: 10,
              }}
            >
              Shop Crocs{" "}
            </p>
            <img src={arrowright} alt="" />
          </div>
        </div>
        <div className="discountItem">
          <img
            style={{ width: 400, height: 550, objectFit: "contain" }}
            src={discount1}
            alt=""
          />
          <div style={{ display: "flex" }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                marginTop: 10,
              }}
            >
              Shop All Sale Boots{" "}
            </p>
            <img src={arrowright} alt="" />
          </div>
        </div>
      </div>

      <p className="fallIntoSaving">FALL INTO SAVINGS</p>

      <div className="productList">
        <Product/>
      </div>
    </div>
  );
};

export default Body;
