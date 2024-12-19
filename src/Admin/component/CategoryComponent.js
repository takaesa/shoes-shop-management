import React from 'react'
import "./css/categorycomponent.css"
import { useState } from 'react'
import product from "../../svg/product.svg"

import arrowexpand from "../../svg/arrowexpand.svg"
import chooseproductimg from "../../svg/chooseproductimg.svg"
const CategoryComponent = (...props) => {

    const [isAdminEditProductOverlayVisible, setAdminEditProductOverlayVisible] = useState(false);
    const [isAdminDeleteProductOverlayVisible, setAdminDeleteProductOverlayVisible] = useState(false);

    const handleEditProductClick = () => {
        setAdminEditProductOverlayVisible(true);
    }
    const handleDeleteProductClick = () => {
        setAdminDeleteProductOverlayVisible(true);
    }


    const handleOverlayBackgroundClick = (e) => {
        if (e.target.className === "adminEditProductOverlay") {
            setAdminEditProductOverlayVisible(false);
        }
        else if (e.target.className === "adminDeleteProductOverlay") {
            setAdminDeleteProductOverlayVisible(false);
        }
    };

    return (
        <div className='adminCategoryComponentContainer'>
            <div style={{ display: 'flex', padding: '.5rem', alignItems: 'center', height: 'inherit', paddingLeft: '2rem' }}>
                <div className='productImgContainer'><img src={product} alt='productimg' /></div>
                <p className='productNameTxt'>Product Name</p>
            </div>

            <div className='shopSalesTxt'>
                100
            </div>

            <div className='options-btn-area'>
                <div className='edit-btn-container' onClick={handleEditProductClick}>
                    <button className='edit-btn' >Edit</button>
                </div>
                <div className='delete-btn-container' onClick={handleDeleteProductClick}>
                    <button className='delete-btn'>Delete</button>
                </div>
            </div>
            <section className="editProductContainer">
                {isAdminEditProductOverlayVisible && (
                    <div className="adminEditProductOverlay" onClick={handleOverlayBackgroundClick}>
                        <div className="adminEditProductOverlay-content">
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
                {isAdminDeleteProductOverlayVisible && (
                        <div className="adminDeleteProductOverlay" onClick={handleOverlayBackgroundClick}>
                            <div className="adminDeleteProductOverlay-content">
                                <div>
                                    <h2 style={{ fontSize: 22, fontWeight: 'bold', color: 'black', margin: 0, textAlign:'center' }}>Delete Category</h2>
                                    <h4 style={{ fontSize: 16, fontWeight: '500', color: '#797472', margin: 0, textAlign:'center',paddingTop:'.5rem' }}>Are you sure to delete this category?</h4>

                                    <div style={{ display: 'flex', gap: '1rem',padding:'2rem 0 0 0',justifyContent:'center', width:'100%'}}>
                                        <div className='cancelDeleteProductContainer'>
                                            <button className='cancelDeleteProductBtn'>Cancel</button>
                                        </div>
                                        <div className='deleteProductContainer'>
                                            <button className='deleteProductBtn'>Delete</button>
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

export default CategoryComponent