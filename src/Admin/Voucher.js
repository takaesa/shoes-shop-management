import React from 'react'
import "./css/voucher.css"

import sellerlogo from "../svg/sellerlogo.svg";
import profileimg from "../svg/profileimg.svg";
import hamburger from "../svg/hamburger.svg";
import sellersearch from "../svg/sellersearch.svg";
import sellermessage from "../svg/sellermessage.svg";
import sellernotification from "../svg/sellernotification.svg";
import chooseproductimg from "../svg/chooseproductimg.svg"
import searchIcon from "../svg/search.svg";
import arrowexpand from "../svg/arrowexpand.svg"

import { useState } from 'react';

import CategoryComponent from './component/CategoryComponent';
import VoucherComponent from './component/VoucherComponent';
const Voucher = (...props) => {
    const [isAdminAddVoucherOverlayVisible, setAdminAddVoucherOverlayVisible] = useState(false);
    const [isAdminEditVoucherOverlayVisible, setAdminEditVoucherOverlayVisible] = useState(false);
    const [isAdminDeleteVoucherOverlayVisible, setAdminDeleteVoucherOverlayVisible] = useState(false);

    const [isBrandOpen, setisBrandOpen] = useState(false);
    const toggleDropdown = (id) => {
        setisBrandOpen(!isBrandOpen);
    }
    const handleAddNewVoucherClick = () => {
        setAdminAddVoucherOverlayVisible(true);
    };

    const handleOverlayBackgroundClick = (e) => {
        if (e.target.className === "adminAddVoucherOverlay") {
            setAdminAddVoucherOverlayVisible(false);
        }
        else if (e.target.className === "adminEditVoucherOverlay") {
            setAdminEditVoucherOverlayVisible(false);
        }
        else if (e.target.className === "adminDeleteVoucherOverlay") {
            setAdminDeleteVoucherOverlayVisible(false);
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
                            <li className="active">
                                <a className="menuItem" href="/admin/vouchers">
                                    Vouchers
                                </a>
                            </li>
                            <li className=" ">
                                <a className="menuItem" href="/admin/users">
                                    Users
                                </a>
                            </li>{" "}
                            <li className=" ">
                                <a className="menuItem" href="/admin/sellers">
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
                    <section className="totalVoucherContainer">
                        <div style={{ display: 'flex', paddingBottom: '1rem' }}>
                            <div className="sellersearch">
                                <img className="Icon" src={searchIcon} alt="searchIcon" />
                                <div className="vl"></div>
                                <input className='searchInputfield' placeholder='Search vouchers'></input>
                            </div>
                            <div className="adminAddNewVoucherBtnContainer">
                                <button className='adminAddNewVoucherBtn' onClick={() => handleAddNewVoucherClick()}>Add New Voucher</button>
                            </div>
                        </div>
                        <div className='voucherMainContent'>
                            <div className="totalAmount">
                                <p style={{ fontSize: 18, margin: 0, fontWeight: 600, display: 'flex', alignItems: 'center' }}>Total Voucher ({props.amount}100)</p>
                                <div className='selectAllVoucherBtnContainer'>
                                    <button className="selectAllVoucherBtn">Select All</button>
                                </div>
                            </div>

                            <hr class="total-amount-separator" />

                            <div className='voucher-description-bar'>
                                <div style={{ justifySelf: 'flex-start', paddingLeft: '2em' }}>Voucher Name</div>
                                <div>Discount</div>
                                <div>Min Order Price</div>
                                <div>Used</div>
                                <div>Status Date</div>
                                <div>Option</div>
                            </div>

                            <div className='adminVoucherList'>

                                {/* <CategoryComponent editProduct={() => setAdminEditVoucherOverlayVisible(true)} deleteProduct={() => setAdminDeleteVoucherOverlayVisible(true)}> </CategoryComponent> */}
                                <VoucherComponent editProduct={() => setAdminEditVoucherOverlayVisible(true)} deleteProduct={() => setAdminDeleteVoucherOverlayVisible(true)}> </VoucherComponent>
                            </div>
                        </div>

                    </section>

                    <section className="addNewProductContainer">
                        {isAdminAddVoucherOverlayVisible && (
                            <div className="adminAddProductOverlay" onClick={handleOverlayBackgroundClick}>
                                <div className="adminAddProductOverlay-content">
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
                                                <div className='productNameLabel' style={{ flex: '35%', justifyContent: 'flex-end', textAlign: 'right', paddingRight: '1rem', display: 'flex' }}>Product Images</div>
                                                <div style={{ flex: '65%', paddingLeft: '1rem' }}>
                                                    <div className='chooseProductImgsContainer'>
                                                        <img className='chooseProductImgs' src={chooseproductimg} alt='' />
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

export default Voucher