import React from 'react'
import './Contact.css';


const Contact = () => {
  return (
    <div className="contact">
        <div className="text_contact">
            <p>I am interested in working with any company that thinks my skill will be helpful for them . If you  are looking for someone like mem please let me know . Or you can just 'say hi' to me.</p>
            <button className="green">Contact Me</button>
        </div>
        <div className="social-section">
            <div className="social-item">
                <h1>Email</h1>
                <p>Rakibuzzamanjihad@gmail.com (Recommended)</p>
            </div>
            <div className="social-item">
                <h1>Skype</h1>
                <p>Rakib (Always Availabe)</p>
            </div>
            <div className="social-item">
                <h1>Social</h1>
                <p>Facebook/Twitter -@rakib(Slow response)</p>
            </div>
            <div className="social-item">
                <h1>Address</h1>
                <p>Dhampti,Debidwar,Cumilla,Bangladesh -3514</p>
            </div>
        </div>
    </div>
  )
}

export default Contact