import React, { useEffect, useRef, useContext } from "react";
import "../../Styles/Post.css";
import FormDialog from "./PostComment/PostComment";
import Comments from "./Comments/Comments";
import { CommentContext } from "../../Context/CommentContext";

const Post = ({ match }) => {
  const [comments, setComments] = useContext(CommentContext);

  const postRef = useRef();

  const getPost = async () => {
    let postres;
    try {
      postres = await fetch(
        `http://192.168.0.15:3003/curentpost/${match.params.post_id}`
      );
    } catch {
      postres = await fetch(
        `http://localhost:3003/curentpost/${match.params.post_id}`
      );
    }
    const postdata = await postres.json();

    // console.log(postdata)
    postRef.current.innerHTML += postdata[0]["post_body"];
    setComments(postdata);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <div className="post-container">
        <span ref={postRef}></span>
      </div>
      <div className="comment-btn">
        <FormDialog postId={match.params.post_id} />
        <Comments />
      </div>
    </div>
  );
};

export default Post;
