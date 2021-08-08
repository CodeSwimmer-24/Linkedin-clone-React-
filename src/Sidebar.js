import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function Sidebar() {
  const user = useSelector(selectUser);
  const recentItems = (topic) => (
    <div className="recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://thumbs.dreamstime.com/b/abstract-background-canvas-texture-bright-paint-purple-yellow-color-164999207.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewes you</p>
          <p className="sidebar__statNumber">2,2299</p>
        </div>
      </div>
      <div className="sidebar__button">
        <p>Recent</p>

        {recentItems("reactjs")}
        {recentItems("JavaScript")}
        {recentItems("Ruby")}
        {recentItems("Ruby on Rails")}
      </div>
    </div>
  );
}

export default Sidebar;
