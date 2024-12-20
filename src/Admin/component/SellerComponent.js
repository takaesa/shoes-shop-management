import React from 'react'
import "./css/sellercomponent.css"

import { useState } from 'react'
import product from "../../svg/product.svg"
import arrowexpand from "../../svg/arrowexpand.svg"
import chooseproductimg from "../../svg/chooseproductimg.svg"
const SellerComponent = (...props) => {
  const [isAdminEditProductOverlayVisible, setAdminEditSellerOverlayVisible] = useState(false);
  const [isAdminDeleteSellerOverlayVisible, setAdminDeleteSellerOverlayVisible] = useState(false);


  const handleDeleteSellerClick = () => {
    setAdminDeleteSellerOverlayVisible(true);
  }


  const handleOverlayBackgroundClick = (e) => {
    if (e.target.className === "adminEditSellerOverlay") {
      setAdminEditSellerOverlayVisible(false);
    }
    else if (e.target.className === "adminDeleteSellerOverlay") {
      setAdminDeleteSellerOverlayVisible(false);
    }
  };
  return (
    <div className='adminManageSellersComponentContainer'>
      <div style={{ display: 'flex', padding: '.5rem', alignItems: 'center', height: 'inherit', paddingLeft: '2rem' }}>
        <div className='manageSellerProfileImgContainer'><img src={product} alt='productimg' /></div>
        <p className='userNameTxt'>User Name</p>
      </div>

      <div className='phonenumberTxt'>
        0999999999
      </div>
      <div className='phonenumberTxt'>
        199
      </div>
      <div className='phonenumberTxt'>
        10
      </div>

      <div className='viewDashboardBtnContainer'>
        View dashboard
      </div>

      <div className='options-btn-area'>
        <div className='delete-btn-container' onClick={handleDeleteSellerClick}>
          <button className='delete-btn'>Delete</button>
        </div>
      </div>

      <section className="editProductContainer">
        {/* {isAdminEditProductOverlayVisible && (
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
        )} */}
        {isAdminDeleteSellerOverlayVisible && (
          <div className="adminDeleteSellerOverlay" onClick={handleOverlayBackgroundClick}>
            <div className="adminDeleteSellerOverlay-content">
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 'bold', color: 'black', margin: 0, textAlign: 'center' }}>Delete Seller</h2>
                <h4 style={{ fontSize: 16, fontWeight: '500', color: '#797472', margin: 0, textAlign: 'center', paddingTop: '.5rem' }}>Are you sure to delete this seller?</h4>

                <div style={{ display: 'flex', gap: '1rem', padding: '2rem 0 0 0', justifyContent: 'center', width: '100%' }}>
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

export default SellerComponent