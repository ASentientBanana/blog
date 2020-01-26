import React from "react";

export const PostListElement = ({ thumbnail, content, title }) => {
  const post_options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "testPost",
      content: "HELOOOOOOOOOOOOOOOOO"
    })
  };
  // const sendPost = fetch()

  return (
    <div>
      <div className="title-container">
      <h2 className="postTitle">Post {title}</h2>
      </div>

      <div className="PostListElement">
        <img src={thumbnail} alt="" />
        <p>{content}</p>
      </div>
    </div>
  );
};
