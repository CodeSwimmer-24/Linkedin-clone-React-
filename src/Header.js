import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import HeaderOptions from "./HeaderOptions";

import "./Heaer.css";
import { logout } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions title="Home" Icon={HomeIcon} />
        <HeaderOptions title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOptions title="Message" Icon={ChatIcon} />
        <HeaderOptions title="Notifications" Icon={NotificationsActiveIcon} />
        <HeaderOptions avatar={true} title="me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
