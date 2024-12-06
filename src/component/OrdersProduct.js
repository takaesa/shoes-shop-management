import React from 'react'
import "./css/ordersproduct.css"
import favoriteproduct from "../svg/favoriteproduct.svg"

const OrdersProduct = (...props) => {
  return (
    <div className='orderProductContainer' >
        <div className='orderProductImgContainer' >
            <img src={favoriteproduct} alt='orderProduct'/>
        </div>
        <div style={{paddingLeft:10,paddingTop:20,paddingBottom:30,display:'flex',flexDirection:'column'}}>
            <h2 style={{fontSize:24,fontWeight:700,textTransform:'uppercase'}}>Product Name</h2>
            <p className='productSpecificInformationText'>Color: Blk/Wht{props.colorName}</p>
            <div>
                <p className={'productSpecificInformationText'}> Price: <span className='productOriginalPrice'>$49.99{props.originalPrice}</span> <span className='greenPrice'>{props.discountPrice} $39.99</span></p>
            </div>
            <p className='productSpecificInformationText'>Quantity: 1{props.quantity}</p>
        </div>
    </div>
  )
}

export default OrdersProduct