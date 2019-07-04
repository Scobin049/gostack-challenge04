import React from "react";
import Comment from "./Comment";

import "./Postitem.css";

function PostItem({ post }) {
  return (
    <div className="post-item">
      <div className="post-infos">
        <img src={post.author.avatar} width="32" height="32" />
        <div className="post-profile">
          <span className="post-author">{post.author.name}</span>
          <span className="post-date">{post.date}</span>
        </div>
      </div>
      <div className="post-body">
        <p className="post-text">{post.content}</p>
      </div>
      <div className="post-comments">
        {post.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
}

export default PostItem;
