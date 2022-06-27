import React from "react";
import { NavLink } from "react-router-dom";
import "./icon-tab-link.css";
const IconTabLink = ({ icon, linkText, linkTo }) => {
  return (
    <div className="icon-tab-link__block flex-container direction-column">
      <NavLink to={linkTo} className="">
        <span className="flex-container js-ctr align-center">{icon}</span>
        <span className="capitalize-text">{linkText}</span>
      </NavLink>
    </div>
  );
};

export default IconTabLink;
