import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <div className="header section__padding">
        <div className="title">
            <p>Hello! I am</p>
            <h1>Zihad Sarker</h1>
        </div>
        <div className="developer">
            <h3>FullStack Developer</h3>
            <ul>
                <li>Web Developer</li>
                <li>Programmer</li>
                <li>Software Engineer</li>
            </ul>
        </div>

        <div className="header-btn">
            <button className="green btn">Get Resume</button>
            <button className="outline btn">About Me</button>
        </div>
        
    </div>
  )
}

export default Header