import React from 'react';
import './App.css';
import {Navigation} from './Components/Navigation';
import {PostList} from './Components/Home/PostList';
import {Social} from './Components/Social';
import {BrowserRouter as Router, Link , Route} from 'react-router-dom';
import {CreatePost} from './Components/PostCreator/CreatePost.jsx'
import Post from './Components/Post/Post.jsx'

const App = ()=> {
  return (
    <Router>
<div className='appBody'>
    <Navigation />
    {/* Defining Routs to home  */}
    <Route path="/create" component={CreatePost} />
    <Route path="/home" component={PostList} />
    <Route path="/" exact component={PostList} />
    <Route path="/post/:post_id" exact component={Post} />
    </div>
    </Router>
  );
}

export default App;
