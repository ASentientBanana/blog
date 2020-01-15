import React from "react";


export const PostListElement = ({thumbnail,content,title}) => {
  return (
    <div>
<h2 className='postTitle'>Post {title}</h2>
<div className="PostListElement">
      <img src={thumbnail} alt=""/>
  <p>{content}</p>
    </div>
  
    </div>
    );
};
