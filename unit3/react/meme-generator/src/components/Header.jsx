import React from'react';
import Trolling from '../images/trolling.png';
export default function Header() {
    return (
        <header className="header"> 
        <img 
            src ={Trolling}
            className='header-img'
        />
        <h2 className="header-title">Meme Generator</h2>
        <h4 className="header-project">React Course - Project 3</h4>
        </header>
    )

}