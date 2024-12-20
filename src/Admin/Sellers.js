import React from 'react'
import "./css/sellers.css"
import sellerlogo from "../svg/sellerlogo.svg";
import profileimg from "../svg/profileimg.svg";
import hamburger from "../svg/hamburger.svg";
import sellersearch from "../svg/sellersearch.svg";
import sellermessage from "../svg/sellermessage.svg";
import sellernotification from "../svg/sellernotification.svg";
import chooseproductimg from "../svg/chooseproductimg.svg"
import searchIcon from "../svg/search.svg";
import arrowexpand from "../svg/arrowexpand.svg"

import SellerComponent from './component/SellerComponent';

import { useState } from "react";

const Sellers = (...props) => {
  const [isAdminAddProductOverlayVisible, setAdminAddProductOverlayVisible] = useState(false);
  const [isAdminEditProductOverlayVisible, setAdminEditSellerOverlayVisible] = useState(false);
  const [isAdminDeleteProductOverlayVisible, setAdminDeleteSellerOverlayVisible] = useState(false);

  const [isBrandOpen, setisBrandOpen] = useState(false);
  const toggleDropdown = (id) => {
    setisBrandOpen(!isBrandOpen);
  }
  const [activeContent, setActiveContent] = useState("productList");

  const handleAddNewProductClick = () => {
    setAdminAddProductOverlayVisible(true);
  };

  const handleOverlayBackgroundClick = (e) => {
    if (e.target.className === "adminAddProductOverlay") {
      setAdminAddProductOverlayVisible(false);
    }
    else if (e.target.className === "adminEditProductOverlay") {
      setAdminEditSellerOverlayVisible(false);
    }
    else if (e.target.className === "adminDeleteProductOverlay") {
      setAdminDeleteSellerOverlayVisible(false);
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
                <a className="menuItem" href="/admin/category">
                  Categories
                </a>
              </li>
              <li className="">
                <a className="menuItem" href="/admin/vouchers">
                  Vouchers
                </a>
              </li>
              <li className=" ">
                <a className="menuItem" href="/admin/manageusers">
                  Users
                </a>
              </li>{" "}
              <li className=" active">
                <a className="menuItem" href="/admin/managesellers">
                  Sellers
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
          <section className="totalProductContainer">
          <div style={{ display: 'flex', paddingBottom: '1rem' }}>
              <div className="sellersSearchArea">
                <img className="Icon" src={searchIcon} alt="searchIcon" />
                <div className="vl"></div>
                <input className='searchInputfield' placeholder='Search Seller'></input>
              </div>
            </div>
            <div className='manageSellersMainContent'>
              {/* <hr class="total-amount-separator" /> */}

              <div className='manage-sellers-description-bar'>
                <div style={{ justifySelf: 'flex-start', paddingLeft: '2em' }}>Username</div>
                <div>Phone Number</div>
                <div>Product Types</div>
                <div>Sold</div>
                <div>Report</div>
                <div>Option</div>
              </div>
              <div className='manageSellerList'>
                <SellerComponent deleteSeller={() => setAdminDeleteSellerOverlayVisible(true)}> </SellerComponent>
                <SellerComponent deleteSeller={() => setAdminDeleteSellerOverlayVisible(true)}> </SellerComponent>
                <SellerComponent deleteSeller={() => setAdminDeleteSellerOverlayVisible(true)}> </SellerComponent>
                <SellerComponent deleteSeller={() => setAdminDeleteSellerOverlayVisible(true)}> </SellerComponent>
                <SellerComponent deleteSeller={() => setAdminDeleteSellerOverlayVisible(true)}> </SellerComponent>
                <SellerComponent deleteSeller={() => setAdminDeleteSellerOverlayVisible(true)}> </SellerComponent>
              </div>
            </div>

          </section>

          <footer className="footer"></footer>
        </div>

      </main>
    </div>
  )
}

export default Sellers