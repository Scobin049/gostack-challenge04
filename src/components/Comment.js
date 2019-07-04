import React from "react";

import "./Comment.css";

function Comment({ data }) {
  console.log(data);
  return (
    <div className="comment-item">
      <img src={data.author.avatar} width="32" height="32" />
      <div className="comment-content">
        <p>{data.content}</p>
      </div>
    </div>
  );
}

export default Comment;
