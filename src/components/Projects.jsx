import React from "react";
import fbClone from "../assets/Facebook-clone.png"
import cRent from "../assets/CarRent.png"
import airlane from "../assets/Airlane.png"

const Projects =()=>{
 return <div className="container" id="project">
 <div className="card">
   <img src={fbClone} alt="Avatar" />
   <div className="description">
     <a href="#"><b>Facebook clone</b></a>
     <p>This is project about facebook clone, i used javaScript hmtl and css</p> 
   </div>
 </div>
 <div className="card">
   <img src={cRent} alt="Avatar" />
   <div className="description">
     <a href=""><b>Car Rental Application</b></a>
     <p>This is project about desktop application i used C# And SqlDatabase</p> 
   </div>
 </div>
 <div className="card">
   <img src={airlane} alt="Avatar" />
   <div className="description">
     <a href="#"><b>Airline Resevation system</b></a>
     <p>This is project about desktop application and i used C# and SqlDb</p> 
   </div>
 </div>
 </div>
}

export default Projects