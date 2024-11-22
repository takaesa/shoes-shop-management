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

        <div className="scrollContainer">
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

        <div className="scrollContainer">
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

        <div className="scrollContainer">
          <img style={{ paddingRight: 30 }} src={scrollleftinactive} alt="" />
          <img src={scrollrightactive} alt="" />
        </div>
      </div>

      <div className="brandContainer">
        <div className="brandLogo">
          <img
            src="https://cdn.media.amplience.net/i/scvl/Birkenstock_brandmenuBLACK?fmt=auto&w=160&$common-template$"
            alt=""
          />
        </div>
        <div className="brandLogo">
          <img
            src="https://cdn.media.amplience.net/i/scvl/brand-menu-logo-nike?fmt=auto&w=160&$common-template$"
            alt=""
          />
        </div>
        <div className="brandLogo">
          <img
            src="https://cdn.media.amplience.net/i/scvl/brand-menu-logo-crocs?fmt=auto&w=160&$common-template$"
            alt=""
          />
        </div>
        <div className="brandLogo">
          <img
            src="https://cdn.media.amplience.net/i/scvl/brand-carousel-Adidas24?fmt=auto&w=160&$common-template$"
            alt=""
          />
        </div>
        <div className="brandLogo">
          <img
            src="https://cdn.media.amplience.net/i/scvl/brand-carousel-Bearpaw?fmt=auto&w=160&$common-template$"
            alt=""
          />
        </div>
        <div className="brandLogo">
          <img
            src="https://cdn.media.amplience.net/i/scvl/brand-menu-KOOLABURRA?fmt=auto&w=160&$common-template$"
            alt=""
          />
        </div>
        <div className="brandLogo">
          <img
            src="https://cdn.media.amplience.net/i/scvl/brand-menu-logo-newbalance?fmt=auto&w=160&$common-template$"
            alt=""
          />
        </div>
        <div className="brandLogo">
          <img
            src="https://cdn.media.amplience.net/i/scvl/HeyDude_BrandMenuBLACK?fmt=auto&w=160&$common-template$"
            alt=""
          />
        </div>
      </div>

      
    </div>
  );
};

export default Body;
