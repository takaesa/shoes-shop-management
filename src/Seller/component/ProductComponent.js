import React from 'react'
import "./css/productcomponent.css"
import Checkbox from '../../Login/Checkbox'
import { useState } from 'react'
import product from "../../svg/product.svg"

import arrowexpand from "../../svg/arrowexpand.svg"
import chooseproductimg from "../../svg/chooseproductimg.svg"
const ProductComponent = (...props) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked((prev) => !prev);
    };

    const [isBrandOpen, setisBrandOpen] = useState(false);

    const toggleDropdown = (id) => {
        setisBrandOpen(!isBrandOpen);
    }

    const [isSellerEditProductOverlayVisible, setSellerEditProductOverlayVisible] = useState(false);
    const handleEditProductClick = () => {
        setSellerEditProductOverlayVisible(true);
    }


    const handleOverlayBackgroundClick = (e) => {
        if (e.target.className === "sellerEditProductOverlay") {
            setSellerEditProductOverlayVisible(false);
        }
    };
    const checkboxlabel = "";
    return (
        <div className='sellerProductComponentContainer'>
            <div style={{ display: 'flex', padding: '.5rem', alignItems: 'center', height: 'inherit', paddingLeft: '1.5rem' }}>
                <div style={{ paddingTop: '.8em' }}><Checkbox
                    id="productCheckbox"
                    label={checkboxlabel}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                /></div>

                <div className='productImgContainer'><img src={product} alt='productimg' /></div>
                <p className='productNameTxt'>Product Name</p>
            </div>
            <div><p className='brandNameTxt'>Brand Name</p></div>
            <div><p className='brandNameTxt'>100 $ </p></div>
            <div><p className='brandNameTxt'>10 stock</p></div>
            <div><p className='brandNameTxt'>100 sales</p></div>
            <div onClick={handleEditProductClick}><p className='editOption'>Edit</p></div>

            <section className="editProductContainer">
                {isSellerEditProductOverlayVisible && (
                    <div className="sellerEditProductOverlay" onClick={handleOverlayBackgroundClick}>
                        <div className="sellerEditProductOverlay-content">
                            <div>
                                <h2 style={{ fontSize: 22, fontWeight: 'bold', color: '#2E7EA3', margin: 0 }}>Edit Product</h2>

                                <div className='basicInformationContainer'>
                                    <h3 style={{ margin: 0, fontSize: 22, fontWeight: 500, color: '#2E7EA3', padding: '0 0 1em 1em' }}>Basic Information</h3>

                                    <div style={{ display: 'flex', width: '85%' }}>
                                        <div className='productNameLabel' style={{ flex: '35%', justifyContent: 'flex-end', textAlign: 'right', paddingRight: '1rem', alignItems: "center", display: 'flex' }}>Product Name</div>
                                        <div style={{ flex: '65%', paddingLeft: '1rem' }}>
                                            <input style={{ width: '100%', padding: '.5em 0 .5em 1em', border: '1px solid #797472', borderRadius: 5, color: 'black' }} type='text' placeholder={props.productName}></input>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', width: '85%', paddingTop: '1rem' }}>
                                        <div className='productNameLabel' style={{ flex: '35%', justifyContent: 'flex-end', textAlign: 'right', paddingRight: '1rem', alignItems: "center", display: 'flex' }}>Brand</div>
                                        <div style={{ flex: '65%', paddingLeft: '1rem' }}>
                                            <div style={{ width: '100%', display: 'flex', marginLeft: 'auto', margin: 0 }}>
                                                <div className='brandDropDownBtnContainer'>
                                                    <button className='brandDropDownBtn' onClick={() => { toggleDropdown("brand") }}> {props.brandName} Sample BrandName
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

                                    <div style={{ display: 'flex', width: '85%', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                        <div className='productNameLabel' style={{ flex: '35%', justifyContent: 'flex-end', textAlign: 'right', paddingRight: '1rem', display: 'flex' }}>Product Descriptions</div>
                                        <div style={{ flex: '65%', paddingLeft: '1rem' }}>
                                            <div className='productDescriptionContainer'>
                                                <textarea style={{ width: '100%', padding: '.5em .5em .5em 1em', border: '1px solid #797472', borderRadius: 5, minHeight: 200, scrollbarWidth: 'none', resize: 'none' }} >{props.productDescriptions}</textarea>
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
        </div>
    )
}

export default ProductComponent