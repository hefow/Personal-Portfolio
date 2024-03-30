import React from "react";
import location from "../assets/location.png"
import email from "../assets/email.png"
import phone from "../assets/phone.png"

const Contact =()=>{
    return <div className="contact" id="contacts">
       <div className="contact-info">
        <h6><img src={location} alt="" />Wadajir</h6>
        <h6><img src={email} alt="" />ahmedhefow11@gmail.com</h6>
        <h6><img src={phone} alt="" />612947216</h6>
       </div>
       <form className="login-form">
       <h2>Contact</h2>
            <div className="form-group">
                <label htmlFor="name">Email</label>
                <input type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="password">password</label>
                <input type="password" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Comment</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button>Submit</button>
       </form>
    </div>
}

export default Contact