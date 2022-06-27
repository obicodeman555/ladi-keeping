import React from "react";
import "./button-white.css";

const Button = ({ btnText }) => {
  return (
    <div className="primary-white-button">
      <button type="button">{btnText}</button>
    </div>
  );
};

export default Button;
