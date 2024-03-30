import React from "react";
import myProfile from "../assets/my_profile.jpg"

const Bio =()=>{
    return <div className="container-a" id="bio">
     <div className="about">
        <div className="about-img">
            <img src={myProfile} alt="" />
        </div>
        <div className="about-content">
            <h2>About me</h2>
            <p>
            i'm full stack developer at jamhuriya university of technology and science in mogadishu somalia.
            i'm currently working as a full-stack developer. i graduated high school at al musbah primary and secondory school in
            2021. i started education in 
            </p>
        </div>
     </div>
    </div>
}

export default Bio