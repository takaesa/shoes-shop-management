import React from 'react'
import "./css/productcomponent.css"
import Checkbox from '../../Login/Checkbox'
import { useState } from 'react'
import product from "../../svg/product.svg"
const ProductComponent = () => {
    const [checkbox, setcheckbox] = useState(false);
    const checkboxlabel = "";
    return (
        <div className='sellerProductComponentContainer'>
            <div style={{ display: 'flex', padding: '.5rem', alignItems: 'center', height: 'inherit', paddingLeft:'1.5rem' }}>
                <div style={{paddingTop:'.8em'}}><Checkbox
                    id="productCheckbox"
                    label={checkboxlabel}
                    checked={checkbox}
                    onChange={() => setcheckbox(!checkbox)}
                /></div>
                
                <div className='productImgContainer'><img src={product} alt='productimg' /></div>
                <p className='productNameTxt'>Product Name</p>
            </div>
            <div><p className='brandNameTxt'>Brand Name</p></div>
            <div><p className='brandNameTxt'>100 $ </p></div>
            <div><p className='brandNameTxt'>10 stock</p></div>
            <div><p className='brandNameTxt'>100 sales</p></div>
            <div><p className='editOption'>Edit</p></div>
        </div>
    )
}

export default ProductComponent