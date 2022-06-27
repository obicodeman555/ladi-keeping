import React from "react";
import logo from "../assets/svgs/brand-logo.svg";
import "./brand-logo.css";

const BrandLogo = () => {
  return (
    <div className="brand-logo__img-block flex-container">
      <span className="flex-container direction-column">
        <img src={logo} alt="Application brand logo" />
      </span>
    </div>
  );
};

export default BrandLogo;
