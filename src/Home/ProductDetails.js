import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "../css/productdetails.css";
import product from "../svg/product.svg"
import detailproduct from "../svg/detailproduct.svg"
import { useState } from "react";
import instore from "../svg/instore.svg"
import delivery from "../svg/delivery.svg"
import shipping from "../svg/shipping.svg"
import opendetail from "../svg/opendetail.svg"
import closedetail from "../svg/closedetail.svg"
import scrollleftinactive from "../svg/scrollleftinactive.svg";
import scrollrightactive from "../svg/scrollrightactive.svg";
import Product from "../component/Product.js";
const ProductDetails = (...props) => {

    const [productSizeSelected, productSizeSetSelected] = useState("6");

    const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
    const toggleDropdown = () => {
        setisProductDetailOpen(!isProductDetailOpen);
    }

    const [rating, setRating] = useState(0);
    const [starHover, setstarHover] = useState(0);

    return (
        <div>
            <Header />
            <div>
                <nav className="navigation">
                    <ol className="orderListContainer">
                        <li>
                            <a className="navLink" href="#a">
                                {props.userType}Woman
                            </a>
                            <span role="presentation" class="splashContainer">
                                /
                            </span>
                        </li>
                        <li>
                            <a className="navLink" href="#a">
                                {props.userType}Athletics & Sneakers
                            </a>
                            <span role="presentation" class="splashContainer">
                                /
                            </span>
                        </li>
                        <li>
                            <a className="navLinkCurrent " href="#a">
                                {props.userType}Fashion & Lifestyle Sneakers
                            </a>
                        </li>
                    </ol>
                </nav>

                <div className="productDetailsLayout">
                    <div className="productGallery">
                        <div className="imgItemContainer">
                            <img src={product} alt="" />
                        </div>
                        <div className="imgItemContainer">
                            <img src={product} alt="" />
                        </div>
                        <div className="imgItemContainer">
                            <img src={product} alt="" />
                        </div>
                    </div>
                    <div className="productDetailInformations">
                        <h1 style={{ fontSize: 44, fontWeight: 800, wordSpacing: 2, textTransform: 'uppercase', margin: 0 }}>{props.productName}Women's Adidas VL Court 3.0 Sneakers ( PRODUCT NAME)</h1>
                        <a style={{ margin: 0, fontSize: 18, fontWeight: 600, color: '#000', textDecoration: 'underline', cursor: 'pointer' }} href={props.brand}>{props.productBrand}Brand Name</a>
                        <div>
                            <p style={{ margin: 0, paddingTop: 20 }}><span className='productOriginalPrice'>$49.99{props.originalPrice}</span> <span className='greenPrice'>{props.discountPrice} $39.99</span></p>
                            <p style={{ margin: 0, fontSize: 18, fontWeight: 600, color: '#000', paddingTop: 20 }}>Select Color:  <span style={{ color: '#797472', fontWeight: 400 }}>blue / wht / scarlet{props.productColors}</span></p>

                            <div className="productColorsGridContainer">
                                <div className="imgItemContainer">
                                    <img src={product} alt="" />
                                </div>
                                <div className="imgItemContainer">
                                    <img src={product} alt="" />
                                </div>
                                <div className="imgItemContainer">
                                    <img src={product} alt="" />
                                </div>
                                <div className="imgItemContainer">
                                    <img src={product} alt="" />
                                </div>
                                <div className="imgItemContainer">
                                    <img src={product} alt="" />
                                </div>
                            </div>

                            <div style={{ display: 'flex', paddingTop: 20 }}>
                                <p style={{ margin: 0, fontSize: 18, fontWeight: 600, color: '#000', }}>Select Size:  <span style={{ color: '#797472', fontWeight: 500, paddingLeft: 10 }}>{productSizeSelected}</span></p>
                                <a style={{ margin: 0, marginLeft: 'auto', fontSize: 18, fontWeight: 500, color: '#000', textDecoration: 'underline', cursor: 'pointer', }} href="/sizeChart">{props.productBrand}Size Chart</a>
                            </div>

                            <div className="productSizesGridContainer">
                                <div className={productSizeSelected === "6" ? "productSizeActive" : "productSizeInactive"}
                                    onClick={() => { productSizeSetSelected("6") }}>
                                    {props.productSize}6
                                </div>
                                <div className={productSizeSelected === "7" ? "productSizeActive" : "productSizeInactive"}
                                    onClick={() => { productSizeSetSelected("7") }}>
                                    {props.productSize}7
                                </div>
                                <div className={productSizeSelected === "8" ? "productSizeActive" : "productSizeInactive"}
                                    onClick={() => { productSizeSetSelected("8") }}>
                                    {props.productSize}8
                                </div>
                                <div className={productSizeSelected === "9" ? "productSizeActive" : "productSizeInactive"}
                                    onClick={() => { productSizeSetSelected("9") }}>
                                    {props.productSize}9
                                </div>
                                <div className={productSizeSelected === "10" ? "productSizeActive" : "productSizeInactive"}
                                    onClick={() => { productSizeSetSelected("10") }}>
                                    {props.productSize}10
                                </div>
                            </div>
                            <p style={{ paddingTop: 20, margin: 0, fontSize: 18, fontWeight: 600, color: '#000', }}>Pick up at: <span style={{ color: '#797472', fontWeight: 400, paddingLeft: 10, textDecoration: 'underline' }}>The Shoppes on Six (Elkhart, IN)</span></p>

                            <div style={{ display: 'flex', paddingTop: 20 }}>
                                <p style={{ margin: 0, fontSize: 14, fontWeight: 400, color: '#000', width: '60%' }}>This item is not available for pick up, please select a store or modify your selected store.</p>
                                <div className="changeStoreBtnContainer">
                                    <button className="changeStoreBtn">
                                        Change Store
                                    </button>
                                </div>
                            </div>
                            <div style={{ display: 'grid', width: '100%', gridTemplateColumns: '48% 48%', columnGap: '4%', paddingTop: 20 }}>
                                <div style={{ padding: 20, backgroundColor: '#EFEFEF', color: '#999999' }}>
                                    <img style={{ scale: '1.5', paddingLeft: '.3em' }} src={instore} alt="" />
                                    <p>PICK UP</p>
                                    <p>Unavailable for pick up</p>
                                </div>
                                <div style={{ border: '1px solid black', padding: 20, backgroundColor: '#EFEFEF', cursor: 'pointer', color: 'black' }}>
                                    <img style={{ scale: '1.5', paddingLeft: '.3em' }} src={delivery} alt="" />
                                    <p>DELIVERY</p>
                                    <p>As soon as Sat, November 2</p>
                                </div>
                            </div>
                            <div className="buttonContainer">
                                <button className="addToCartButton">
                                    Add to Cart
                                </button>
                            </div>
                            <div style={{ display: 'flex', padding: 20, backgroundColor: '#AFC3CD', borderRadius: 25, alignItems: 'center', gap: 15 }}>
                                <div style={{ height: '100%', aspectRatio: '1/1' }}>
                                    <img src={shipping} alt="" />
                                </div>
                                <div>
                                    <p style={{ fontSize: 14, fontWeight: 400, margin: 0 }}>Earn 74 points and free shipping with this purchase with Shoe Perks!
                                    </p>
                                    <p style={{ margin: 0, paddingTop: 10 }}><span className="navLinkLogin">Log In</span> or <span className="navLinkLogin">Sign Up!</span></p>
                                </div>
                            </div>

                            <hr class="productDetailsSeparator" />

                            <div style={{ display: 'flex', cursor: 'pointer', }} onClick={toggleDropdown}>
                                <h3 style={{ fontSize: 22, fontWeight: 600, margin: 0, paddingTop: 20 }}>PRODUCT DETAIL </h3>
                                <p style={{ display: 'flex', alignItems: 'center', fontSize: 22, fontWeight: 400, margin: 0, paddingTop: 20, marginLeft: 'auto' }}>{isProductDetailOpen ? "-" : "+"}</p>
                            </div>
                            {isProductDetailOpen && (<p style={{ margin: 0, }}>
                                {props.productDetail}
                                Introducing the Adidas VL Court 3.0 Sneakers – a timeless and versatile choice for any occasions. These sneakers seamlessly blend classic style with contemporary flair, making them an essential addition to your footwear collection.
                                <ul>
                                    <li>
                                        Suede/synthetic upper
                                    </li>
                                    <li>
                                        Smooth lining with a padded insole
                                    </li>
                                    <li>
                                        Lace-up closure
                                    </li>
                                </ul>
                            </p>)}
                            <hr class="productDetailsSeparator" />
                            <h3 style={{ fontSize: 22, fontWeight: 600, margin: 0, paddingTop: 20 }}>SHIPPING & RETURNS</h3>
                        </div>
                    </div>

                </div>

                <h3 style={{ fontSize: 26, textTransform: 'uppercase', textAlign: 'center', margin: 0, paddingTop: 20 }}>show us your style</h3>

                <div className="buttonContainer">
                    <button className="addYourPhotoBtn">
                        ADD YOUR PHOTO
                    </button>
                </div>

                <div style={{ paddingLeft: 40, paddingTop: 30, }}>
                    <h4 style={{ fontSize: '20px', fontWeight: 600, margin: 0, paddingTop: 20 }}>Reviews</h4>
                    <p style={{ fontSize: '20px', fontWeight: 500, margin: 0, paddingTop: 10 }}>Review this Product</p>
                    <div style={{ display: 'flex', gap: '8px', height: '40px', paddingTop: 20 }}>
                        {[...Array(5)].map((_, index) => {
                            const starIndex = index + 1;
                            return (
                                <button key={index}
                                    style={{
                                        backgroundColor: starIndex <= (starHover || rating) ? "#000" : "#ddd",
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '7px',
                                        height: '100%',
                                        cursor: 'pointer',
                                        aspectRatio: '1/1'
                                    }}
                                    onClick={() => setRating(starIndex)}
                                    onMouseEnter={() => setstarHover(starIndex)}
                                    onMouseLeave={() => setstarHover(0)}>
                                    ★
                                </button>

                            )
                        })}
                    </div>

                    <hr class="productDetailsSeparator" />

                    <div className="sectionName">
                        <p>RELATED PRODUCTS</p>

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
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F7FAFC', padding: '50px 0px',marginBottom:50 }}>
                    <div style={{ fontSize: 22, fontWeight: 600, textTransform: 'uppercase', paddingRight: 20 }}>
                        CUSTOMERS ALSO VIEWED
                    </div>
                    <div>
                        <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <li>
                                <a style={{ color: 'black', fontSize: 16, fontWeight: 500, textDecoration: 'none' }} href="man">Adidas Shoes for Women, Slides & Accessories</a>
                            </li>
                            <li>
                                <a style={{ color: 'black', fontSize: 16, fontWeight: 500, textDecoration: 'none' }} href="man">Women's Adidas Grand Court Alpha Sneakers</a>
                            </li>
                            <li>
                                <a style={{ color: 'black', fontSize: 16, fontWeight: 500, textDecoration: 'none' }} href="man">Women's Adidas Grand Court 2.0 Sneakers</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetails;
