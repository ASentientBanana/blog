import React,{useEffect,useRef,useState} from 'react';
import '../../Styles/Post.css';
import { withRouter } from 'react-router-dom';



 const Post =({match})=>{

    const [post,setPost] = useState({});
     const postRef = useRef();
     const getPost = async()=>{
        const postres = await fetch(`http://localhost:3003/curentpost/${match.params.post_id}`);
        const postdata = await postres.json();
        console.log(postdata)
        postRef.current.innerHTML += postdata['post_body'];
    }
     useEffect(()=>{
         getPost();
     },[])

    return(

        <div className="post-container" ref={postRef}>
            <h1>{post['post_body']}</h1>
        </div>
    );

}



export default Post;