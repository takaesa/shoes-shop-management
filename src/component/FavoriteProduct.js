import React from 'react'
import "./css/favoriteproduct.css"
import favoriteproduct from "../svg/favoriteproduct.svg"

const FavoriteProduct = (...props) => { 
  return (
    <div className='favoriteProductContainer' >
        <div className='favoriteProductImgContainer' >
            <img src={favoriteproduct} alt='favoriteProduct'/>
        </div>
        <div style={{paddingLeft:10,paddingTop:20,paddingBottom:30,display:'flex',flexDirection:'column'}}>
            <h2 style={{fontSize:24,fontWeight:700,textTransform:'uppercase'}}>Product Name</h2>
            <p className='productSpecificInformationText'>Color: Blk/Wht{props.colorName}</p>
            <div>
                <p className={'productSpecificInformationText'}> Price: <span className='productOriginalPrice'>$49.99{props.originalPrice}</span> <span className='greenPrice'>{props.discountPrice} $39.99</span></p>
            </div>
            <p className='productSpecificInformationText'>Quantity: 1{props.quantity}</p>
            <div className='removeBtnTextContainer'><p className='removeBtnTxt'>Remove</p></div>
            
        </div>
    </div>
  )
}

export default FavoriteProduct