import React from 'react';
import { Link } from 'react-router-dom'
import './Drinks.css'

const Drinks = () => {
    return (
        <nav>
            <div className='link-container'><Link className='link' to='/gatorade'>Gatorade</Link></div>
            <div className='link-container'><Link className='link' to='/dr-pepper'>Dr. Pepper</Link></div>
            <div className='link-container'><Link className='link' to='/coffee'>Coffee</Link></div>
        </nav>
    )
}

export default Drinks;