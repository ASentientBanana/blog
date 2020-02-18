import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { CommentContext } from "../../../Context/CommentContext";
export default function FormDialog({ postId }) {
  const [open, setOpen] = useState(false);
  const [comment, setComent] = useState("");
  const [comments, setComments] = useContext(CommentContext);
  const postOptions = {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const commentListUpdate = () => {
    const { comment_body } = comment;
    setComments([{ comment_body }, ...comments]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleComentText = event => {
    setComent({
      post_id: postId,
      comment_body: event.target.value
    });
  };
  const sendComment = async () => {
    try {
      fetch(`http://192.168.0.15:3003/curentpost/comment`, postOptions);
    } catch {
      fetch(`localhost:3003/curentpost/comment`, postOptions);
    }
  };
  return (
    <div className="MuiTextField-root">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Post a comment
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">(-_-)</DialogTitle>
        <DialogContent>
          <DialogContentText>Dont forget to stay on topic...</DialogContentText>
          <TextField
            id="outlined-multiline-static"
            label="Comment"
            multiline
            rows="4"
            variant="outlined"
            onChange={handleComentText}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={sendComment}
            color="primary"
            onMouseUp={() => {
              handleClose();
              commentListUpdate();
            }}
          >
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
