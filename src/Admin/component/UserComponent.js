import React from 'react'
import './css/usercomponent.css'

import { useState } from 'react'
import product from "../../svg/product.svg"
import arrowexpand from "../../svg/arrowexpand.svg"
import chooseproductimg from "../../svg/chooseproductimg.svg"
const UserComponent = (...props) => {
    const [isAdminEditProductOverlayVisible, setAdminEditUserOverlayVisible] = useState(false);
    const [isAdminDeleteUserOverlayVisible, setAdminDeleteUserOverlayVisible] = useState(false);


    const handleDeleteUserClick = () => {
        setAdminDeleteUserOverlayVisible(true);
    }


    const handleOverlayBackgroundClick = (e) => {
        if (e.target.className === "adminEditUserOverlay") {
            setAdminEditUserOverlayVisible(false);
        }
        else if (e.target.className === "adminDeleteUserOverlay") {
            setAdminDeleteUserOverlayVisible(false);
        }
    };
    return (
        <div className='adminManageUserComponentContainer'>
            <div style={{ display: 'flex', padding: '.5rem', alignItems: 'center', height: 'inherit', paddingLeft: '2rem' }}>
                <div className='manageUserProfileImgContainer'><img src={product} alt='productimg' /></div>
                <p className='userNameTxt'>User Name</p>
            </div>

            <div className='phonenumberTxt'>
                0999999999
            </div>
            <div className='phonenumberTxt'>
                12
            </div>
            <div className='phonenumberTxt'>
                0
            </div>

            <div className='viewActivityBtnContainer'>
                View activity history
            </div>

            <div className='options-btn-area'>
                <div className='delete-btn-container' onClick={handleDeleteUserClick}>
                    <button className='delete-btn'>Delete</button>
                </div>
            </div>

            <section className="editProductContainer">
                {isAdminDeleteUserOverlayVisible && (
                    <div className="adminDeleteUserOverlay" onClick={handleOverlayBackgroundClick}>
                        <div className="adminDeleteUserOverlay-content">
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

export default UserComponent