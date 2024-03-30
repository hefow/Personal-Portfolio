import React from "react";
import js from "../assets/js.png"
import java from "../assets/java.png"
import py from "../assets/python.png"
import csh from "../assets/Csharp.png"

const Skills =()=>{
    return <div className="skills" id="skills">
        <div className="box box1">
            <img className="skill-img" src={js} alt="" />
            <div className="title">
            <strong>90%</strong>
            </div>
        </div>
        <div className="box box2">
            <img className="skill-img" src={java} alt="" />
            <div  className="title">
            <strong>88%</strong>
            </div>
        </div>
        <div className="box box4">
            <img className="skill-img" src={csh} alt="" />
            <div className="title">
            <strong>70%</strong>
            </div>
        </div>
        <div className="box box3">
            <img className="skill-img" src={py} alt="" />
            <div className="title">
            <strong>60%</strong>
            </div>
        </div>
        
    </div>
}

export default Skills