import React from 'react'
import "../css/producttypepage.css"
import Header from './Header'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import arrowexpand from "../svg/arrowexpand.svg"
import remove from "../svg/remove.svg"
import allfilter from "../svg/allfilter.svg"
import Product from '../component/Product'

const ProductTypePage = (...props) => {
  const [isSearchOverlayVisible, setSearchOverlayVisible] = useState(false);
  const handleSearchFiltertClick = () => {
    setSearchOverlayVisible(true);
  };

  const handleOverlayBackgroundClick = (e) => {
    if (e.target.className === "search-overlay") {
      setSearchOverlayVisible(false);
    }
  };

  const [isPriceOpen, setisPriceOpen] = useState(false);
  const [isBrandOpen, setisBrandOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  }
  return (

    <div>
      <Header></Header>
      <div>
        <nav className="navigation">
          <ol className="orderListContainer">
            <li>
              <a className="navLink" href="/">
                {props.userType}Woman
              </a>
              <span role="presentation" class="splashContainer">
                /
              </span>
            </li>
            <li>
              <a className="navLink" href="/">
                {props.userType}Athletics & Sneakers
              </a>
              <span role="presentation" class="splashContainer">
                /
              </span>
            </li>
            <li>
              <a className="navLinkCurrent" href="/">
                {props.userType}Fashion & Lifestyle Sneakers
              </a>
            </li>
          </ol>
        </nav>

        <h2 style={{ fontSize: 38, fontWeight: 600, textTransform: 'uppercase', margin: 0, paddingTop: 20, paddingLeft: 30 }}>
          WOMEN’S FASHION SNEAKERS & LIFESTYLE SHOES {props.productType}
        </h2>
        <div className='filterOptionContainer'>
          <div className='filterDropDownBtnContainer'>
            <button className='filterDropDownBtn' onClick={() => { toggleDropdown("price") }}>Price
              <img className={activeDropdown === "price" ? "arrowExpand" : "arrowClose"} src={arrowexpand} alt='' />
            </button>

            {activeDropdown === "price" && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">Item 1</li>
                <li className="dropdown-item">Item 2</li>
                <li className="dropdown-item">Item 3</li>
              </ul>
            )}

          </div>
          <div className='filterDropDownBtnContainer'>
            <button className='filterDropDownBtn' onClick={() => { toggleDropdown("brand") }}>Brand
              <img className={activeDropdown === "brand" ? "arrowExpand" : "arrowClose"} src={arrowexpand} alt='' />
            </button>

            {activeDropdown === "brand" && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">Item 1</li>
                <li className="dropdown-item">Item 2</li>
                <li className="dropdown-item">Item 3</li>
              </ul>
            )}

          </div>

          <div className='allFilterContainer'> 
            <p style={{fontSize:18,fontWeight:600,color:'#808089'}}>View All Filter</p>
            <img src={allfilter} alt='all filter'/>
          </div>
        </div>

        <div className='subFilterContainer'>
          <div style={{ fontSize: 16, fontWeight: 400, cursor: 'pointer', }}>Clear All</div>
          <button className='subFilterBtn'> <img style={{ paddingRight: '.6rem', width: '33%', aspectRatio: '1/1 ' }} src={remove} alt='' /> Price
          </button>
          <div className='sortByDropDownContainer' onClick={() => { toggleDropdown("sortBy") }}>
            <div className='sortByDropDown'>Sort By: Best Match
              <img className={activeDropdown === "sortBy" ? "arrowExpand" : "arrowClose"} src={arrowexpand} alt='' />

            </div>
            {activeDropdown === "sortBy" && (
              <ul className="sortby-dropdown-menu">
                <li className="dropdown-item">Sort 1</li>
                <li className="dropdown-item">Item 2</li>
                <li className="dropdown-item">Item 3</li>
              </ul>
            )}
          </div>


        </div>

        <div className='productTypeContainer'>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
      </div>
            

      <Footer></Footer>
    </div>
  )
}

export default ProductTypePage