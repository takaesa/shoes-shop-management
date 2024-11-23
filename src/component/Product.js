import React from "react";
import "./css/product.css";
import favorite from "../svg/favorite.svg";
import product from "../svg/product.svg";
// import favoriteHover from "../svg/favoriteHover.svg"
import productColor from "../svg/productColor.svg";
import starRating from "../svg/starRating.svg";

const Product = (props) => {
  return (
    <div className="Product">
      <div style={{ background: "#F6F6F6" }}>
        <button className="favoriteBtn">
          <img className="favoriteIcon" src={favorite} alt="" />
        </button>

        <img id="productPicture" src={product} alt="" />
      </div>

      <div className="colorList">
        <div id="colorItem">
          <img id="productColor" src={productColor} alt="" />
        </div>
        <div id="colorItem">
          <img id="productColor" src={productColor} alt="" />
        </div>
        <div id="colorItem">
          <img id="productColor" src={productColor} alt="" />
        </div>

        <div id="extendedColor">
          + 10{/* {props.productPicture.count} */} Colors
        </div>
      </div>

      <div
      // onClick={navigator.Navigate()}
      >
        <div className="brandPriceContainer">
          <div id="brandName">
            Product Brand
            {/* {props.brandName} */}
          </div>
          <div className="price">
            <label id="originalPrice">
              ${/* {product.originalPrice} */}44.99
            </label>
            <label id="discountPrice">
              ${/* {product.discountPrice} */}34.99
            </label>
          </div>
        </div>

        <div id="productName">
          Product Name AMNBASMNB SADALSKJ DLKASJDLK ASJL KDJ
          {/* {props.productName} */}
        </div>

        <div id="starList">
          {/* props.imgList */}
          <img src={starRating} alt="" />
          <img src={starRating} alt="" />
          <img src={starRating} alt="" />
          <img src={starRating} alt="" />
          <img src={starRating} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Product;


