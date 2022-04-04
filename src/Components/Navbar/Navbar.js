import React from 'react';
import './Navbar.css';
import image from  '../../assets';

const Navbar = () => {
  return (
    <div className="menu">
        <div className="logo">
            <img style={{width:'50px'}} src={image.images.logo} alt="logo" />
        </div>
        <nav className='navbar'>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Skill</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a className='resume' href="#">Resume</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar