import React from "react";
import productincart from "../svg/productincart.svg";
import minusamount from "../svg/minusamount.svg";
import plusamount from "../svg/plusamount.svg";
import trashbin from "../svg/trashbin.svg";
import "../component/css/productincart.css";
import { useState } from "react";

const ProductinCart = (props) => {
    const [amount,setAmount] = useState(1);
    const handleDecrement = () => {
        if (amount > 0) setAmount(amount - 1);
      };
    
      const handleIncrement = () => {
        setAmount(amount + 1);
      };
  return (
    <div>
        <div style={{ display: "flex" ,height:300}}>
      <img
        src={productincart}
        alt="productincart"
        style={{
          width: 'auto',
          height: "100%",
          cursor: "pointer",
          objectFit: "contain"
        }}
      />
      <div style={{paddingLeft:20}}>
        <p
          style={{
            fontSize: 28,
            fontWeight: 650,
            color: "#000",
            textAlign: "left",
            margin: 0,
            overflow:"hidden",
            width:'95%',
            textOverflow:'ellipsis',
            display:'-webkit-box',
            WebkitLineClamp:2,
            WebkitBoxOrient:'vertical',
            wordWrap:'break-word',
            wordBreak:'break-word',
          }}
        >
          PRODUCT NAME {props.Name} ASDDDDDDDDDDDlkJASdlkajs aslkdj aslkd jaslkdjalskjd lkas jdlkasjd lkasjdlkajsdlk jaslkd jaslk  djlaksj dlkasj dlkj
          

        </p>
        <div style={{paddingTop:20}}><p
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#000",
            textAlign: "left",
            margin: 0,
          }}
        >
          Size: {props.Size}
        </p>
        <p
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#000",
            textAlign: "left",
            margin: 0,
          }}
        >
          Width: {props.Width}
        </p>
        <p
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#000",
            textAlign: "left",
            margin: 0,
          }}
        >
          Color: {props.Color}
        </p>
        <p
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#000",
            textAlign: "left",
            margin: 0,
          }}
        >
          Price: {props.Price}
        </p></div>

        <div className="btnInCartContainer">
          <button className="minusBtn" onClick={handleDecrement}>
            <img src={minusamount} alt="" />
          </button>
          <div className="amountContainer">
          <p id="propsAmount" className="Amount">{props.amount}{amount}</p>

          </div>
          <button className="plusBtn" onClick={handleIncrement}>
            <img src={plusamount} alt="" />
          </button>
          <button className="trashbinBtn">
            <img src={trashbin} alt="trashbin" />
          </button>
        </div>
      </div>
    </div>
    
      <hr class="product-in-cart-separator" />
    
    </div>
  );
};

export default ProductinCart;
