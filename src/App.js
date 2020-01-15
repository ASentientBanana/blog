import React from 'react';
import './App.css';
import {Navigation} from './Components/Navigation'
import {PostList} from './Components/PostList'
import {Social} from './Components/Social'

function App() {
  return (
    <div className='appBody'>
    <Navigation />
    <div className="home">
      <PostList />
      <Social />
    </div>
    



    </div>

  );
}

export default App;
