import React from 'react'
import '../Styles/Navigation.css'


export  const Navigation = ()=>{


    return(
        <div className='navigation'>
            <div className='logo-backdrop'>
                <h1>B</h1>
            </div>
            <ul>
                <li className='nave-lement'>Home</li>
                <li className='nave-lement'>About</li>
                <li className='nave-lement'>Contact</li>
            </ul>
        </div>
    )
}