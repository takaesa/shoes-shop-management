import React from "react";

import "../css/mainbody.css";
import rightscroller from "../svg/rightscroller.svg";
import discount1 from "../svg/discount1.svg";
import discount2 from "../svg/discount2.svg";
import discount3 from "../svg/discount3.svg";
import arrowright from "../svg/arrowright.svg";
import arrowright1 from "../svg/arrowright.svg";

import discount4 from "../svg/discount4.svg";
// import favoriteHover from "../svg/favoriteHover.svg"
import Product from "../component/Product.js";
import scrollleftinactive from "../svg/scrollleftinactive.svg";
import scrollrightactive from "../svg/scrollrightactive.svg";
import shop1 from "../svg/shop1.svg";
import shop2 from "../svg/shop2.svg";
import shop3 from "../svg/shop3.svg";
import shop4 from "../svg/shop4.svg";
import shopmoto from "../svg/shopmoto.svg";
import shopchelsea from "../svg/shopchelsea.svg";
import shoplaceup from "../svg/shoplaceup.svg";
import shopwestern from "../svg/shopwestern.svg";
import { useState, useEffect } from "react";
import adidas from "../svg/adidas.svg"
import bearpaw from "../svg/bearpaw.svg"
import birkenstock from "../svg/birkenstock.svg"
import crocs from "../svg/crocs.svg"
import heydude from "../svg/heydude.svg"
import koolaburra from "../svg/koolaburra.svg"
import newbalance from "../svg/newbalance.svg"
import nike from "../svg/nike.svg"

const Body = () => {
  // const BrandNameLink = 'https://localhost:7143/ProductBrand'

  // const [brandName, setBrandNames] = useState([]);
  // useEffect(() => {
  //   fetch(BrandNameLink, { mode: 'no-cors'})
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setBrandNames(data);
  //     });
  // }, []);
  return (

    <div>
      <div className="trendingSearchContainer">
        <p style={{ fontSize: 14, fontWeight: 500 }}>Trending Searches</p>

        <div className="trendingSearchItems">
          {/* {
            brandName.map(
                (item) => 
                  (<button className="trenditem">{item.productBrandName}</button>)
            )
          } */}
          <button className="trenditem"><a href="/productPage">MSI</a></button>
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
          <div style={{ display: "flex", paddingTop: 10 }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                margin: 0,
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
          <div style={{ display: "flex", paddingTop: 10 }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                margin: 0,
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
          <div style={{ display: "flex", paddingTop: 10 }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                margin: 0,
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
          <div style={{ display: "flex", paddingTop: 10 }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                margin: 0,
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
          <div style={{ display: "flex", paddingTop: 10 }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                margin: 0,
              }}
            >
              Shop All Sale Boots{" "}
            </p>
            <img src={arrowright} alt="" />
          </div>
        </div>
      </div>

      <div className="sectionName">
        <p>FALL INTO SAVINGS</p>

        <div style={{ display: 'flex' }} className="productScrollContainer">
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

      <div className="sectionName">
        <p>2X POINTS ON ALL CROCS, ALL MONTH!</p>

        <div style={{ display: 'flex' }} className="productScrollContainer">
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

      <p className="fallFlashSales">FALL MUST-HAVES</p>

      <div className="discountContainer">
        <div className="discountItem">
          <img
            style={{ width: 400, height: 550, objectFit: "contain" }}
            src={shop1}
            alt=""
          />
          <div style={{ display: "flex", paddingTop: 10 }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                margin: 0,
              }}
            >
              Shop Koolaburra by UGG{" "}
            </p>
            <img src={arrowright1} alt="" />
          </div>
        </div>
        <div className="discountItem">
          <img
            style={{ width: 400, height: 550, objectFit: "contain" }}
            src={shop2}
            alt=""
          />
          <div style={{ display: "flex", paddingTop: 10 }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                margin: 0,
              }}
            >
              Shop Retro Sneakers{" "}
            </p>
            <img src={arrowright} alt="" />
          </div>
        </div>
        <div className="discountItem">
          <img
            style={{ width: 400, height: 550, objectFit: "contain" }}
            src={shop3}
            alt=""
          />
          <div style={{ display: "flex", paddingTop: 10 }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                margin: 0,
              }}
            >
              Shop HEYDUDE{" "}
            </p>
            <img src={arrowright} alt="" />
          </div>
        </div>
        <div className="discountItem">
          <img
            style={{ width: 400, height: 550, objectFit: "contain" }}
            src={shop4}
            alt=""
          />
          <div style={{ display: "flex", paddingTop: 10 }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                margin: 0,
              }}
            >
              Shop Skecher Slip-ins{" "}
            </p>
            <img src={arrowright} alt="" />
          </div>
        </div>
        <div className="discountItem">
          <img
            style={{ width: 400, height: 550, objectFit: "contain" }}
            src={shop1}
            alt=""
          />
          <div style={{ display: "flex", paddingTop: 10 }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                margin: 0,
              }}
            >
              Shop Koolaburra by UGG{" "}
            </p>
            <img src={arrowright} alt="" />
          </div>
        </div>
      </div>

      <p className="fallFlashSales">FALL BOOT SHOP</p>

      <div className="discountContainer">
        <div className="discountItem">
          <img
            style={{ width: 400, height: 550, objectFit: "contain" }}
            src={shopmoto}
            alt=""
          />
          <div style={{ display: "flex", paddingTop: 10 }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                margin: 0,
              }}
            >
              Shop Moto{" "}
            </p>
            <img src={arrowright1} alt="" />
          </div>
        </div>
        <div className="discountItem">
          <img
            style={{ width: 400, height: 550, objectFit: "contain" }}
            src={shopchelsea}
            alt=""
          />
          <div style={{ display: "flex", paddingTop: 10 }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                margin: 0,
              }}
            >
              Shop Chelsea{" "}
            </p>
            <img src={arrowright} alt="" />
          </div>
        </div>
        <div className="discountItem">
          <img
            style={{ width: 400, height: 550, objectFit: "contain" }}
            src={shoplaceup}
            alt=""
          />
          <div style={{ display: "flex", paddingTop: 10 }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                margin: 0,
              }}
            >
              Shop Lace-Up{" "}
            </p>
            <img src={arrowright} alt="" />
          </div>
        </div>
        <div className="discountItem">
          <img
            style={{ width: 400, height: 550, objectFit: "contain" }}
            src={shopwestern}
            alt=""
          />
          <div style={{ display: "flex", paddingTop: 10 }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                margin: 0,
              }}
            >
              Shop Western{" "}
            </p>
            <img src={arrowright} alt="" />
          </div>
        </div>
        <div className="discountItem">
          <img
            style={{ width: 400, height: 550, objectFit: "contain" }}
            src={shopmoto}
            alt=""
          />
          <div style={{ display: "flex", paddingTop: 10 }}>
            <p
              style={{
                paddingRight: 30,
                fontSize: 20,
                fontWeight: 500,
                margin: 0,
              }}
            >
              Shop Moto{" "}
            </p>
            <img src={arrowright} alt="" />
          </div>
        </div>
      </div>

      <div className="sectionName">
        <p>BRANDS OF FALL</p>

        <div style={{ display: 'flex' }} className="productScrollContainer">
          <img style={{ paddingRight: 30 }} src={scrollleftinactive} alt="" />
          <img src={scrollrightactive} alt="" />
        </div>
      </div>

      <div className="brandContainer">
        <div className="brandLogo">
          <img className="brandImage"
            src={adidas}
            alt=""
          />
        </div>
        <div className="brandLogo">
          <img className="brandImage"
            src={birkenstock}
            alt=""
          />
        </div>
        <div className="brandLogo">
          <img className="brandImage"
            src={bearpaw}
            alt=""
          />
        </div>
        <div className="brandLogo">
          <img className="brandImage"
            src={bearpaw}
            alt=""
          />
        </div>
        <div className="brandLogo">
          <img className="brandImage"
            src={bearpaw}
            alt=""
          />
        </div>
        <div className="brandLogo">
          <img className="brandImage"
            src={bearpaw}
            alt=""
          />
        </div>
        <div className="brandLogo">
          <img className="brandImage"
            src={bearpaw}
            alt=""
          />
        </div>
        <div className="brandLogo">
          <img className="brandImage"
            src={bearpaw}
            alt=""
          />
        </div>
        
        
      </div>


    </div>
  );
};

export default Body;
