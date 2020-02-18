import React, { useContext, useEffect } from "react";
import { CommentContext } from "../../../Context/CommentContext";

const Comments = () => {
  const [comments, setComments] = useContext(CommentContext);
  useEffect(() => {}, [comments]);

  return (
    <div className="comment-div">
      {comments.map((c, index) => (
        <div key={index}>
          <h4>user : </h4>
          <span>{c.comment_body}</span>
        </div>
      ))}
    </div>
  );
};
export default Comments;
