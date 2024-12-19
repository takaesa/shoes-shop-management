import React from 'react'
import "../css/producttypepage.css"
import Header from './Header'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import arrowexpand from "../svg/arrowexpand.svg"
import remove from "../svg/remove.svg"
import allfilter from "../svg/allfilter.svg"
import Product from '../component/Product'
import Checkbox from '../Login/Checkbox'
const ProductTypePage = (...props) => {

  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState(0);

  const [filterOptions, setFilterOptions] = useState({
    options1: false,
    options2: false
  })

  const toggleAccordion = (accordionID) => {
    if (activeAccordion === accordionID) {
      setActiveAccordion(null);
    }
    else {
      setActiveAccordion(accordionID);
    }
  }

  useEffect(() => {
    const count = Object.values(filterOptions).filter(value => value).length;
    setSelectedFilters(count);
  }, [filterOptions])

  const handleFilterChange = (optionKey) => {
    setFilterOptions(prev => ({
      ...prev,
      [optionKey]: !prev[optionKey]
    }))
  }

  const handleFilter = (filterName) => {
    setFilterOptions(prev => {
      const newOptions = {
        ...prev, [filterName]: !prev[filterName]
      }
    })
  }

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
        {/* <div className='filterOptionContainer'>
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
        </div> */}


        <div style={{ display: 'flex', paddingBottom: '2rem' }}>
          <div className='filter-area'>
            <div className='allFilterContainer'>
              <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'black', margin: 0 }}>View All Filter</p>
              <img src={allfilter} alt='all filter' />
            </div>
            <div className='filter-accordion'>
              <button
                className='accordion-btn'
                onClick={() => toggleAccordion('filter')}
                aria-expanded={activeAccordion === 'filter'}
              >
                <div className='accordion-header'>
                  <span className='accordion-title'>Filters</span>
                  {selectedFilters > 0 && (
                    <span className='filter-badge'>{selectedFilters}</span>
                  )}
                </div>
                <img
                  src={arrowexpand}
                  alt=''
                  className={activeAccordion === 'filter' ? 'arrow-expanded' : 'arrow-collapsed'}
                />
              </button>

              {activeAccordion === 'filter' && (
                <div className='accordion-content'>
                  <div className='filter-options'>
                    <Checkbox id={'selectAllRange'} label={"All"} />
                    <Checkbox id={'range100to200'} label={"From 100$ - 200$"} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div style={{ flex: 1, maxWidth: '78%' }}>
            <div className='subFilterContainer'>
              <button className='clearAllBtn'>Clear All</button>
              <button className='subFilterBtn'>
                <img style={{ marginRight: '.6rem', width: '1.5rem', aspectRatio: '1/1 ' }} src={remove} alt='' /> Price
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
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </div>


      <Footer></Footer>
    </div>
  )
}

export default ProductTypePage