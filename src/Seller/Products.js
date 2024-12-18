import React from 'react'

import sellerlogo from "../svg/sellerlogo.svg";
import profileimg from "../svg/profileimg.svg";
import hamburger from "../svg/hamburger.svg";
import sellersearch from "../svg/sellersearch.svg";
import sellermessage from "../svg/sellermessage.svg";
import sellernotification from "../svg/sellernotification.svg";
import searchIcon from "../svg/search.svg";

import "./css/products.css"
import ProductComponent from './component/ProductComponent';

import arrowexpand from "../svg/arrowexpand.svg"
import chooseproductimg from "../svg/chooseproductimg.svg"
import addvariation from "../svg/addvariation.svg"
import { useState } from 'react';

import Input from '../component/Input';

const Products = (...props) => {
  const [activeContent, setActiveContent] = useState("productList");

  const [isBrandOpen, setisBrandOpen] = useState(false);

  const toggleDropdown = (id) => {
    setisBrandOpen(!isBrandOpen);
  }

  const [isSellerAddProductOverlayVisible, setSellerAddProductOverlayVisible] = useState(false);

  const handleAddNewProductClick = () => {
    setSellerAddProductOverlayVisible(true);
  };


  const [isSellerEditProductOverlayVisible, setSellerEditProductOverlayVisible] = useState(false);

  const handleOverlayBackgroundClick = (e) => {
    if (e.target.className === "sellerAddNewProductOverlay") {
      setSellerAddProductOverlayVisible(false);
    }
    else if (e.target.className === "sellerEditProductOverlay")
    {
      setSellerEditProductOverlayVisible(false);
    }
  };
  return (
    <div style={{ display: "flex", height: "100vh", width: "auto" }}>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="managerContainer">
          <div className="sellerLogoContainer">
            <img className="sellerLogo" src={sellerlogo} alt="" />
          </div>
          SELLER
        </div>
        <hr className="sidebar-separator" />

        <div className="profileContainer">
          <div className="profileImgContainer">
            <img className="profileImg" src={profileimg} alt="" />
          </div>
          <p className="username">Alexander Smith aasdf alksdjflksaj asdlkfj</p>
        </div>

        <div class="sidebar">
          <nav className="menu">
            <ul>
              <li className=" ">
                <a className="menuItem" href="/sellerhome">
                  Home
                </a>
              </li>
              <li className=" active">
                <a className="menuItem" href="/sellerproducts">
                  Products
                </a>
              </li>
              <li className=" ">
                <a className="menuItem" href="/sellerorders">
                  Orders
                </a>
              </li>{" "}
            </ul>
          </nav>
        </div>
      </aside>
      <main className="main-content">
        <header className="content-header">
          <div>
            <button className="menu-toggle">
              <img src={hamburger} alt="" />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              paddingRight: "1rem",
              gap: "1rem",
            }}
          >
            <div className="message-button">
              <img
                style={{ width: "24px", aspectRatio: "1/1" }}
                src={sellersearch}
                alt=""
              />
            </div>
            <div className="message-button">
              <img
                style={{ width: "24px", aspectRatio: "1/1" }}
                src={sellermessage}
                alt=""
              />
              <span className="message-badge">1</span>
            </div>
            <div className="message-button">
              <img
                style={{ width: "24px", aspectRatio: "1/1" }}
                src={sellernotification}
                alt=""
              />{" "}
              <span className="notification-badge">1</span>
            </div>
          </div>
        </header>
        <div>
          {activeContent === "productList" && <section className="totalProductContainer">
            <div style={{ display: 'flex', paddingBottom: '1rem' }}>
              <div className="sellersearch">
                <img className="Icon" src={searchIcon} alt="searchIcon" />
                <div className="vl"></div>
                <input className='searchInputfield' placeholder='Search styles, brands & more'></input>
              </div>
              <div className="sellerAddNewProductBtnContainer">
                <button className='sellerAddNewProductBtn' onClick={() => handleAddNewProductClick()}>Add New Product</button>
              </div>
            </div>
            <div className='productMainContent'>
              <div className="totalAmount">
                <p style={{ fontSize: 18, margin: 0, fontWeight: 600, display: 'flex', alignItems: 'center' }}>Total Products ({props.amount}100)</p>
                <div className='selectAllProductBtnContainer'>
                  <button className="selectAllProductBtn">Select All</button>
                </div>
              </div>
              <hr class="total-amount-separator" />

              <div className='description-bar'>
                <div>Products</div>
                <div>Brand</div>
                <div>Price</div>
                <div>Stock</div>
                <div>Sales</div>
                <div>Option</div>
              </div>
              <div className='sellerproductList'>
                <ProductComponent onEditProduct = {() => setSellerEditProductOverlayVisible(true)}></ProductComponent>
              </div>
            </div>

            <div style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center', paddingTop: '1rem', gap: '1rem', justifyContent: 'flex-end' }}>
              <p style={{ fontSize: 16, fontWeight: 400, color: '#777777' }}>10 Products Selected</p>
              <div className="deletebuttonContainer"><button
                className="delete-button"
              >
                Delete
              </button></div>
            </div>

          </section>}

          <section className="addNewProductContainer">
            {isSellerAddProductOverlayVisible && (
              <div className="sellerAddNewProductOverlay" onClick={handleOverlayBackgroundClick}>
                <div className="sellerAddNewProductOverlay-content">
                  <div>
                    <h2 style={{ fontSize: 22, fontWeight: 'bold', color: '#2E7EA3', margin: 0 }}>Add a New Product</h2>

                    <div className='basicInformationContainer'>
                      <h3 style={{ margin: 0, fontSize: 22, fontWeight: 500, color: '#2E7EA3', padding: '0 0 1em 1em' }}>Basic Information</h3>

                      <div style={{ display: 'flex', width: '85%' }}>
                        <div className='productNameLabel' style={{ flex: '35%', justifyContent: 'flex-end', textAlign: 'right', paddingRight: '1rem', alignItems: "center", display: 'flex' }}>Product Name</div>
                        <div style={{ flex: '65%', paddingLeft: '1rem' }}>
                          <input style={{ width: '100%', padding: '.5em 0 .5em 1em', border: '1px solid #797472', borderRadius: 5, color: 'black' }} type='text' placeholder='Product Name'></input>
                        </div>
                      </div>

                      <div style={{ display: 'flex', width: '85%', paddingTop: '1rem' }}>
                        <div className='productNameLabel' style={{ flex: '35%', justifyContent: 'flex-end', textAlign: 'right', paddingRight: '1rem', alignItems: "center", display: 'flex' }}>Brand</div>
                        <div style={{ flex: '65%', paddingLeft: '1rem' }}>
                          <div style={{ width: '100%', display: 'flex', marginLeft: 'auto', margin: 0 }}>
                            <div className='brandDropDownBtnContainer'>
                              <button className='brandDropDownBtn' onClick={() => { toggleDropdown("brand") }}>Please select category
                                <img style={{ paddingRight: '2rem' }} className={isBrandOpen ? "arrowExpand" : "arrowClose"} src={arrowexpand} alt='' />
                              </button>

                              {isBrandOpen && (
                                <ul className="brand-dropdown-menu">
                                  <li className="brand-dropdown-item">Adidas</li>
                                  <li className="brand-dropdown-item">Crocs</li>
                                  <li className="brand-dropdown-item">Item 1</li>
                                </ul>
                              )}

                            </div>
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', width: '85%', paddingTop: '1rem' }}>
                        <div className='productNameLabel' style={{ flex: '35%', justifyContent: 'flex-end', textAlign: 'right', paddingRight: '1rem', display: 'flex' }}>Product Images</div>
                        <div style={{ flex: '65%', paddingLeft: '1rem' }}>
                          <div className='chooseProductImgsContainer'>
                            <img className='chooseProductImgs' src={chooseproductimg} alt='' />
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', width: '85%', paddingTop: '1rem', paddingBottom:'1rem' }}>
                        <div className='productNameLabel' style={{ flex: '35%', justifyContent: 'flex-end', textAlign: 'right', paddingRight: '1rem', display: 'flex' }}>Product Descriptions</div>
                        <div style={{ flex: '65%', paddingLeft: '1rem' }}>
                          <div className='productDescriptionContainer'>
                            <textarea style={{ width: '100%', padding: '.5em .5em .5em 1em', border: '1px solid #797472', borderRadius: 5, minHeight: 200, scrollbarWidth: 'none', resize: 'none' }} ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', padding: '2em 8em 2em 0' }}>
                      <div className='cancelAddNewProductContainer'>
                        <button className='cancelAddNewProductBtn'>Cancel</button>
                      </div>
                      <div className='publishNewProductContainer'>
                        <button className='publishNewProductBtn'>Save and Publish</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}
          </section>
          
          <footer className="footer"></footer>
        </div>

      </main>
    </div>
  )
}

export default Products