import React ,{useRef,useEffect}from "react";
import marked from 'marked';
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

  const contentRef=useRef()
  // console.log(contentRef.current)

  useEffect(()=>{
    contentRef.current.innerHTML += content;
  },[])
  return (
    <div>
      <div className="title-container">
      <h2 className="postTitle">Post {title}</h2>
      </div>

      <div className="PostListElement" >
        <img src={thumbnail} alt="" />
        <div ref={contentRef} className="content-div">
          
        </div>

      </div>
    </div>
  );
};
