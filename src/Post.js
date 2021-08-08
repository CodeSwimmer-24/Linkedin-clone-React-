import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import "./Post.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
const Post = forwardRef(({ name, description, message }, ref) => {
  const user = useSelector(selectUser);
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={user.photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__button">
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Like" color="Comment" />
        <InputOption Icon={ShareOutlinedIcon} title="Like" color="Share" />
        <InputOption Icon={SendOutlinedIcon} title="Like" color="Send" />
      </div>
    </div>
  );
});

export default Post;
