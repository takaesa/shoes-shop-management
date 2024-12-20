import React from 'react'
import "./css/vouchercomponent.css"

import { useState } from 'react'
import product from "../../svg/product.svg"
import chooseproductimg from "../../svg/chooseproductimg.svg"

const VoucherComponent = (...props) => {
    const [isAdminEditVoucherOverlayVisible, setAdminEditVoucherOverlayVisible] = useState(false);
    const [isAdminDeleteVoucherOverlayVisible, setAdminDeleteVoucherOverlayVisible] = useState(false);

    const handleEditVoucherClick = () => {
        setAdminEditVoucherOverlayVisible(true);
    }
    const handleDeleteVoucherClick = () => {
        setAdminDeleteVoucherOverlayVisible(true);
    }


    const handleOverlayBackgroundClick = (e) => {
        if (e.target.className === "adminEditVoucherOverlay") {
            setAdminEditVoucherOverlayVisible(false);
        }
        else if (e.target.className === "adminDeleteVoucherOverlay") {
            setAdminDeleteVoucherOverlayVisible(false);
        }
    };
    return (
        <div className='adminVoucherComponentContainer'>
            <div style={{ display: 'flex', padding: '.5rem', alignItems: 'center', height: 'inherit', paddingLeft: '2rem' }}>
                <div className='voucherImgContainer'><img src={product} alt='productimg' /></div>
                <p className='voucherNameTxt'>Voucher Name</p>
            </div>

            <div className='discountTxt'>
                {props.discount} 10$
            </div>

            <div className='discountTxt'>
                {props.discount} 100$
            </div>

            <div className='discountTxt'>
                {props.discount} 10
            </div>

            <div className='discountTxt'>
                {props.discount} status date
            </div>

            <div className='options-btn-area'>
                <div className='edit-btn-container' onClick={handleEditVoucherClick}>
                    <button className='edit-btn' >Edit</button>
                </div>
                <div className='delete-btn-container' onClick={handleDeleteVoucherClick}>
                    <button className='delete-btn'>Delete</button>
                </div>
            </div>
            <section className="editVoucherContainer">
                {isAdminEditVoucherOverlayVisible && (
                    <div className="adminEditVoucherOverlay" onClick={handleOverlayBackgroundClick}>
                        <div className="adminEditVoucherOverlay-content">
                            <div>
                                <h2 style={{ fontSize: 22, fontWeight: 'bold', color: '#2E7EA3', margin: 0 }}>Edit Voucher</h2>

                                <div className='basicInformationContainer'>
                                    <h3 style={{ margin: 0, fontSize: 22, fontWeight: 500, color: '#2E7EA3', padding: '0 0 1em 1em' }}>Voucher Information</h3>

                                    <div style={{ display: 'flex', width: '85%' }}>
                                        <div className='vouchNameLabel' style={{ flex: '35%', justifyContent: 'flex-end', textAlign: 'right', paddingRight: '1rem', alignItems: "center", display: 'flex' }}>Voucher Name</div>
                                        <div style={{ flex: '65%', paddingLeft: '1rem' }}>
                                            <input style={{ width: '100%', padding: '.5em 0 .5em 1em', border: '1px solid #797472', borderRadius: 5, color: 'black' }} type='text' placeholder={props.productName}></input>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', width: '85%', paddingTop: '1rem' }}>
                                        <div className='vouchNameLabel' style={{ flex: '35%', justifyContent: 'flex-end', textAlign: 'right', paddingRight: '1rem', alignItems: "center", display: 'flex' }}>Discount</div>
                                        <div style={{ flex: '65%', paddingLeft: '1rem' }}>
                                            <input style={{ width: '100%', padding: '.5em 0 .5em 1em', border: '1px solid #797472', borderRadius: 5, color: 'black' }} type='text' placeholder={props.productName}></input>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', width: '85%', paddingTop: '1rem' }}>
                                        <div className='vouchNameLabel' style={{ flex: '35%', justifyContent: 'flex-end', textAlign: 'right', paddingRight: '1rem', alignItems: "center", display: 'flex' }}>Min Order Price</div>
                                        <div style={{ flex: '65%', paddingLeft: '1rem' }}>
                                            <input style={{ width: '100%', padding: '.5em 0 .5em 1em', border: '1px solid #797472', borderRadius: 5, color: 'black' }} type='text' placeholder={props.productName}></input>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', width: '85%', paddingTop: '1rem' }}>
                                        <div className='vouchNameLabel' style={{ flex: '35%', justifyContent: 'flex-end', textAlign: 'right', paddingRight: '1rem', alignItems: "center", display: 'flex' }}>Public Date</div>
                                        <div style={{ flex: '65%', paddingLeft: '1rem' }}>
                                            <input style={{ width: '100%', padding: '.5em 0 .5em 1em', border: '1px solid #797472', borderRadius: 5, color: 'black' }} type='text' placeholder={props.productName}></input>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', width: '85%', paddingTop: '1rem' }}>
                                        <div className='vouchNameLabel' style={{ flex: '35%', justifyContent: 'flex-end', textAlign: 'right', paddingRight: '1rem', alignItems: "center", display: 'flex' }}>Expiration Date</div>
                                        <div style={{ flex: '65%', paddingLeft: '1rem' }}>
                                            <input style={{ width: '100%', padding: '.5em 0 .5em 1em', border: '1px solid #797472', borderRadius: 5, color: 'black' }} type='text' placeholder={props.productName}></input>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', width: '85%', paddingTop: '1rem' }}>
                                        <div className='voucherNameLabel' style={{ flex: '35%', justifyContent: 'flex-end', textAlign: 'right', paddingRight: '1rem', display: 'flex' }}>Product Images</div>
                                        <div style={{ flex: '65%', paddingLeft: '1rem' }}>
                                            <div className='chooseVoucherImgsContainer'>
                                                <img className='chooseProductImgs' src={chooseproductimg} alt='' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', padding: '2em 8em 2em 0' }}>
                                    <div className='cancelAddNewVoucherContainer'>
                                        <button className='cancelAddNewVoucherBtn'>Cancel</button>
                                    </div>
                                    <div className='publishNewVoucherContainer'>
                                        <button className='publishNewVoucherBtn'>Save and Publish</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
                {isAdminDeleteVoucherOverlayVisible && (
                    <div className="adminDeleteVoucherOverlay" onClick={handleOverlayBackgroundClick}>
                        <div className="adminDeleteVoucherOverlay-content">
                            <div>
                                <h2 style={{ fontSize: 22, fontWeight: 'bold', color: 'black', margin: 0, textAlign: 'center' }}>Delete Category</h2>
                                <h4 style={{ fontSize: 16, fontWeight: '500', color: '#797472', margin: 0, textAlign: 'center', paddingTop: '.5rem' }}>Are you sure to delete this category?</h4>

                                <div style={{ display: 'flex', gap: '1rem', padding: '2rem 0 0 0', justifyContent: 'center', width: '100%' }}>
                                    <div className='cancelDeleteVoucherContainer'>
                                        <button className='cancelDeleteVoucherBtn'>Cancel</button>
                                    </div>
                                    <div className='deleteVoucherContainer'>
                                        <button className='deleteVoucherBtn'>Delete</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )
                }
            </section>
        </div>
    )
}

export default VoucherComponent