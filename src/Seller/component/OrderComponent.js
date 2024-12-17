import React from 'react'
import product from "../../svg/product.svg"
import arrowexpand from "../../svg/arrowexpand.svg"
import { useState } from 'react';
import "./css/ordercomponent.css"

const OrderComponent = () => {
      const [isStatusOpen, setisStatusOpen] = useState(false);
    
    const toggleDropdown = (id) => {
        setisStatusOpen(!isStatusOpen);
      }
    return (
        <div className='sellerOrderComponentContainer'>
            <div style={{ display: 'flex', padding: '.5rem', alignItems: 'center', height: 'inherit', paddingLeft: '1.5rem' }}>
                <div className='orderImgContainer'><img src={product} alt='productimg' /></div>
                <p className='productNameTxt'>Product Name</p>
            </div>
            <div><p className='unitPriceTxt'>100$</p></div>
            <div><p className='unitPriceTxt'>10 </p></div>
            <div><p className='unitPriceTxt'>10</p></div>
            <div className='statusDropDownBtnContainer'>
                <button className='statusDropDownBtn' onClick={() => { toggleDropdown("status") }}> To Pay
                    <img style={{ paddingRight: '2rem' }} className={isStatusOpen ? "arrowExpand" : "arrowClose"} src={arrowexpand} alt='' />
                </button>

                {isStatusOpen && (
                    <ul className="status-dropdown-menu">
                        <li className="status-dropdown-item">To Pay</li>
                        <li className="status-dropdown-item">To Ship</li>
                        <li className="status-dropdown-item">To Receive </li>
                        <li className="status-dropdown-item">Return/Refund</li>
                        <li className="status-dropdown-item">Completed </li>
                        <li className="status-dropdown-item">Cancelled </li>
                    </ul>
                )}
            </div>
            <div className='update-btn-container'>
                <button className='update-btn'>Update</button>
            </div>
        </div>
    )
}

export default OrderComponent