import React from 'react'

import sellerlogo from "../svg/sellerlogo.svg";
import profileimg from "../svg/profileimg.svg";
import hamburger from "../svg/hamburger.svg";
import sellersearch from "../svg/sellersearch.svg";
import sellermessage from "../svg/sellermessage.svg";
import sellernotification from "../svg/sellernotification.svg";

import "./css/products.css"
import ProductComponent from './component/ProductComponent';

const Products = (...props) => {
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
        <section className="totalProductContainer">
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
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
              <ProductComponent></ProductComponent>
            </div>
          </div>

          <div style={{display:'flex',marginLeft:'auto', alignItems:'center', paddingTop:'1rem', gap:'1rem',justifyContent:'flex-end'}}>
            <p style={{fontSize:16, fontWeight:400, color:'#777777'}}>10 Products Selected</p>
            <div className="deletebuttonContainer"><button
            className="delete-button"
            >
              Delete
          </button></div>
          </div>
          
        </section>
      </main>
    </div>
  )
}

export default Products