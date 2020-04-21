import React from "react";
import "./Post.scss";

const Post = (props) => {
  return (
    <div className="post_wrapper">
      <header className="post">
        <div className="photo">
          <img src={props.author.photo}></img>
        </div>
        <div className="post_container">
          <div className="headLine">
            <h1 className="author">{props.author.name}</h1>
            <span className="sub">{props.author.nickname}</span>
            <span className="sub">•</span>
            <span className="sub">{props.date}</span>
          </div>
          <p className="content">{props.content}</p>
          <img className="post_image" src={props.image}></img>
        </div>
      </header>
    </div>
  );
};

export default Post;
