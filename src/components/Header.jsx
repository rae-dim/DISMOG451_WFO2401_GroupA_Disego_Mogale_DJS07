import React from 'react'

function Header() {
    return (
        <div className="header">
            <img src='./img/troll-face.png'
            className="header--image"
            alt="logo"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React</h4>
        </div>
        
       
    )
}

export default Header