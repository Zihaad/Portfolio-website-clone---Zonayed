import React from 'react'
import './About.css';
import image from '../../assets/index'

const About = () => {
  return (
    <div className="about">
        <div className="about_text">
            <p>Hello! I'm Zihad Sarker, a passionate software engineer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in Computer Science Engineering from Chandigarh University at Punjab, India in 2020. I am available for any kind of job opportunity that suits my interests.</p>
            <div className="header-btn">
            <button className="green">Get Resume</button>
            <button className="outline">My Skills</button>
        </div>
        </div>
        <div className="about_img">
            <img src={image.images.zihad} alt="" />
        </div>
    </div>
  )
}

export default About