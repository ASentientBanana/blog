import React from 'react'
import '../Styles/Navigation.css';
import {Link} from 'react-router-dom';


export  const Navigation = ()=>{


    return(
        <div className='navigation'>
            <div className='logo-backdrop'>
                <h1>B</h1>
            </div>
            <ul>
                <Link to='/home'className='nave-lement'>
                <li  >Home</li>
                </Link>
                <li className='nave-lement'>About</li>
                <li className='nave-lement'>Contact</li>
                <Link to='/create' className='nave-lement'>
                <li  >Create</li>
                </Link>
            </ul>
        </div>
    )
}