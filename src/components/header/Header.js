import React from "react";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";
import UserPicker from "../users/UserPicker";
import BrandLogo from "../logo/BrandLogo";
import ButtonWhite from "../button-white/Button";

import "./header.css";
import IconTabLink from "../icon-tab-link/IconTabLink";

const Header = () => {
  return (
    <header className="ladi-keeping-app__header">
      <div className="container container-padding-lg">
        <div className="ladi-keeping-app__header-top-content flex-container align-center j-sp-btw padding-inline-sm">
          <BrandLogo />
          <ButtonWhite btnText="Log out" />
        </div>
        <nav className="ladi-keeping-app__header-links flex-container align-center j-sp-btw">
          <ul className="flex-container align-center">
            <li>
              <IconTabLink
                icon={<FaCalendarAlt />}
                linkText="bookings"
                linkTo="/bookings"
              />
            </li>
            <li>
              <IconTabLink
                icon={<FaDoorOpen />}
                linkText="bookables"
                linkTo="/bookables"
              />
            </li>
            <li>
              <IconTabLink
                icon={<FaUsers />}
                linkText="users"
                linkTo="/users"
              />
            </li>
          </ul>
          <UserPicker />
        </nav>
      </div>
    </header>
  );
};

export default Header;
