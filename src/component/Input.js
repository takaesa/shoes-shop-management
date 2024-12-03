import React, { useState } from "react";
import "./css/input.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const Input = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="input_wrapp">
      <div className="input_container">
        {props.icon && <div className="input_icon">{props.icon}</div>}

        <input
          id={props.id}
          type={showPassword ? "text" : props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          className={props.className}
        />
        {props.type === "password" && (
          <div className="input_icon" onClick={handleTogglePassword}>
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
