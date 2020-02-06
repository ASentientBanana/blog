import React,{useState,useEffect} from 'react';
import {PostListElement} from './PostListElement'
import '../../Styles/PostList.css'
import {Link} from 'react-router-dom';


export const PostList  = ()=>{

  const [post_lists_state,set_post_lists_state] = useState([]);
  const fetchData = async ()=>{
    let post_response = await fetch('http://localhost:3003/getposts')
    let post_list = await post_response.json();
    set_post_lists_state(post_list['posts'])
  }
useEffect(()=>{fetchData()},[])
  return(
    <div className='postList'>
    {post_lists_state.map((post,index)=>(
      <Link to={`/post/${post['post_id']}`} key={index}>
      <PostListElement title={post['post_title']} content={post['post_body']} thumbnail={post['post_thumbnail']} key={index}/>
      </Link>
    ))}
    </div>
    

  );
}
