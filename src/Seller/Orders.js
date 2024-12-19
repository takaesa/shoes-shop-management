import React from 'react'
import sellerlogo from "../svg/sellerlogo.svg";
import profileimg from "../svg/profileimg.svg";
import hamburger from "../svg/hamburger.svg";
import sellersearch from "../svg/sellersearch.svg";
import sellermessage from "../svg/sellermessage.svg";
import sellernotification from "../svg/sellernotification.svg";
import chooseproductimg from "../svg/chooseproductimg.svg"
import searchIcon from "../svg/search.svg";

import "./css/orders.css"
import { useState } from 'react';

import OrderComponent from './component/OrderComponent';

const Orders = (...props) => {

  const [openDropDown, setOpenDropDown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropDown((prev) => (prev === id ? null : id))
  }

  const [activeTab, setActiveTab] = useState("All");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
              <li className=" ">
                <a className="menuItem" href="/sellerproducts">
                  Products
                </a>
              </li>
              <li className=" active">
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
          <section className="ordersContainer">
            <div className='ordersMainContent'>
              <div className="totalAmount">
                <p style={{ fontSize: 18, margin: 0, fontWeight: 600, display: 'flex', alignItems: 'center' }}>Total Orders ({props.amount}100)</p>
              </div>

              <hr class="total-amount-separator" />

              <div className='statusTab'>
                <button
                  className={`tablinks ${activeTab === "All" ? "tabActive" : ""}`}
                  onClick={() => handleTabClick("All")}
                >
                  All
                </button>
                <button
                  className={`tablinks ${activeTab === "To Pay" ? "tabActive" : ""}`}
                  onClick={() => handleTabClick("To Pay")}
                >
                  To Pay
                </button>
                <button
                  className={`tablinks ${activeTab === "To Ship" ? "tabActive" : ""}`}
                  onClick={() => handleTabClick("To Ship")}
                >
                  To Ship
                </button>
                <button
                  className={`tablinks ${activeTab === "To Receive" ? "tabActive" : ""}`}
                  onClick={() => handleTabClick("To Receive")}
                >
                  To Receive
                </button>
                <button
                  className={`tablinks ${activeTab === "Return/Refund" ? "tabActive" : ""}`}
                  onClick={() => handleTabClick("Return/Refund")}
                >
                  Return/Refund
                </button>
                <button
                  className={`tablinks ${activeTab === "Completed" ? "tabActive" : ""}`}
                  onClick={() => handleTabClick("Completed")}
                >
                  Completed
                </button>
                <button
                  className={`tablinks ${activeTab === "Cancelled" ? "tabActive" : ""}`}
                  onClick={() => handleTabClick("Cancelled")}
                >
                  Cancelled
                </button>
              </div>

              <div className='description-bar'>
                <div>Products</div>
                <div>Unit Price</div>
                <div>Quantity</div>
                <div>Total</div>
                <div>Status</div>
                <div>Option</div>
              </div>
              <div className='ordersList' style={{ display: activeTab === "All" ? "" : "none" }}>
                <OrderComponent id={props.id} isOpen={openDropDown === props.id} onToggle={toggleDropdown}/>
                <OrderComponent id={props.id} isOpen={openDropDown === props.id} onToggle={toggleDropdown}/>
                <OrderComponent id={props.id} isOpen={openDropDown === props.id} onToggle={toggleDropdown}/>
                <OrderComponent id={props.id} isOpen={openDropDown === props.id} onToggle={toggleDropdown}/>
                <OrderComponent id={props.id} isOpen={openDropDown === props.id} onToggle={toggleDropdown}/>
                <OrderComponent id={props.id} isOpen={openDropDown === props.id} onToggle={toggleDropdown}/>
                <OrderComponent id={props.id} isOpen={openDropDown === props.id} onToggle={toggleDropdown}/>
                <OrderComponent id={props.id} isOpen={openDropDown === props.id} onToggle={toggleDropdown}/>
                <OrderComponent id={props.id} isOpen={openDropDown === props.id} onToggle={toggleDropdown}/>
                <OrderComponent id={props.id} isOpen={openDropDown === props.id} onToggle={toggleDropdown}/>
              </div>
              <div className='ordersList' style={{ display: activeTab === "To Pay" ? "grid" : "none" }}>
                To Pay
              </div>
              <div className='ordersList' style={{ display: activeTab === "To Ship" ? "grid" : "none" }}>
                To Ship
              </div>
              <div className='ordersList' style={{ display: activeTab === "To Receive" ? "grid" : "none" }}>
                To Receive
              </div>
              <div className='ordersList' style={{ display: activeTab === "Return/Refund" ? "grid" : "none" }}>
                Return/Refund
              </div>
              <div className='ordersList' style={{ display: activeTab === "Completed" ? "grid" : "none" }}>
                Completed
              </div>
              <div className='ordersList' style={{ display: activeTab === "Cancelled" ? "grid" : "none" }}>
                Cancelled
              </div>
            </div>
          </section>
        </div>

      </main>
    </div>
  )
}

export default Orders