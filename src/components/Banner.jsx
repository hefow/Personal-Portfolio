import React from "react";
import myProfile from "../assets/my_profile.jpg"

function Banner(){
    return(
        <div className="bio" id="banner">
       
        <div className="description">
            <h1 >Hey, I'm hefow <br /> <span>Developer</span></h1>
            <p>
                i'm full stack developer at jamhuriya university of technology and science in mogadishu somalia
            </p>
            <button>Learn More</button>
        </div>  
        <div className="img">
        <img src={myProfile} alt="this is my profile" />
        </div>
    </div>
    )
}

export default Banner