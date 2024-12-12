import React from 'react'
import "./css/sellingproductamount.css"
import moreinfor from "../../svg/moreinfor.svg"
import shoppingbag from "../../svg/tabler_shopping-bag.svg"

const SellingProductAmount = () => {
    return (
        <div>
            <div className="sellingProductContainer">
                <div style={{display:"flex",padding:'1rem 2.5rem',gap:'2.5rem'}}>
                    <div>
                        <div className='sellingproductamount'>
                            150
                        </div>
                        <div className='sellingproductname'>
                            Product name
                        </div>
                    </div>
                    <img src={shoppingbag} alt='' />
                </div>



                <div className='moreinformation'>
                    <span style={{paddingRight:'1rem'}}>More infor</span>
                    <img src={moreinfor} alt="moreinfor" />
                </div>

            </div>
        </div>
    )
}

export default SellingProductAmount