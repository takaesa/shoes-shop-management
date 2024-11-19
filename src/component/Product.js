import React from 'react'
import "./css/product.css"
import favorite from "../svg/favorite.svg";
import product from "../svg/product.svg";
// import favoriteHover from "../svg/favoriteHover.svg"
import productColor from "../svg/productColor.svg";
import starRating from "../svg/starRating.svg"

const Product = (props) => {
  return (
    <div className='Product'><div style={{ background: "#F6F6F6" }}>
    <button className="favoriteBtn">
      <img className="favoriteIcon" src={favorite} alt="" />
    </button>

    <img className="productPicture" src={product} alt="" />
  </div>

  <div className="colorList">
    <div className="colorItem">
      <img className="productColor" src={productColor} alt="" />
    </div>
    <div className="colorItem">
      <img className="productColor" src={productColor} alt="" />
    </div>
    <div className="colorItem">
      <img className="productColor" src={productColor} alt="" />
    </div>

    <div className="extendedColor">
      + 10{/* {props.productPicture.count} */} Colors
    </div>
  </div>

  <div 
  // onClick={navigator.Navigate()} 
  >
  <div className="brandPriceContainer">
    <div className="brandName">Product Brand 
      {/* {props.brandName} */}
      </div>
    <div className="price">
      <label className="originalPrice">
      $ 
      {/* {product.originalPrice} */}44.99
      </label>
      <label className="discountPrice">
      $
      {/* {product.discountPrice} */}34.99
      </label>
    </div>
  </div>

  <div className="productName">
    Product Name AMNBASMNB SADALSKJ  DLKASJDLK ASJL KDJ
    {/* {props.productName} */}
  </div>

  <div className="starRatingList">
    <img src={starRating} alt=""/>
    <img src={starRating} alt=""/>
    <img src={starRating} alt=""/>
    <img src={starRating} alt=""/>
    <img src={starRating} alt=""/>
  </div>
  </div></div>
  )
}

export default Product