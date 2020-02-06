import React ,{useState} from 'react';
import SimpleMDE from "react-simplemde-editor";
import '../../Styles/CreatePost.css'
import "easymde/dist/easymde.min.css";
import marked from 'marked';
export const CreatePost = ()=>{

    const [postText,setPostText] = useState({});
    const tempPost = {};
    const handletextChange = value => {
             tempPost.post_body = marked(value);
      };
      const handleThumbnailChange = value => {
        tempPost.post_thumbnail = value.target.value;
      };
      const handleTitleChange = value => {
        tempPost.post_title = value.target.value;
      };
      const postOptions = {
        method: 'POST',
        body: JSON.stringify(postText),
        headers: {
            'Content-Type': 'application/json',
          },
      };
      const ip ='http://192.168.0.15:3003/api/post';
      const  sendPost = async ()=>{
        fetch(ip,postOptions);
    }
 
    return(
        <div>
        <div  id='MD-Editor'>
            <div className='title-thumbnail-input-wraper'>
            <span>Title:</span><input type="text" onChange={handleTitleChange} />
            <span>Thumbnail link:</span><input type="text" onChange={handleThumbnailChange}/>
            </div>
            <SimpleMDE  onChange={handletextChange}
            />
            <button className='post-btn' onClick={sendPost} onMouseDown={()=>{setPostText(tempPost)}}>Post</button>
        </div>
        </div>
    )
}

