import React from 'react';
import './Header.css';
import {User} from './userInterface'

function Header(props:User) {
    return (
        <div>
        <header>
            <h1> Ice Cream Wars</h1>
        </header>
            <p className='welcomeName'>Welcome, {props.name}</p>
        </div>
    )
}

export default Header