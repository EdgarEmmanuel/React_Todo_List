import React from 'react';
import '../css/layout.css';

function Header(){
    return(
        <header>
            <h1>TODO | APP</h1>
            <a href="/about">
            ABOUT 
            </a> | 
            <a href="/">
            HOME
            </a>
        </header>
    )
}

export default Header;