import React, { useEffect, useState } from "react";
import js from "../assets/js.png"
import java from "../assets/java.png"
import py from "../assets/python.png"
import csh from "../assets/Csharp.png"

const Skills =()=>{
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])
    return(
        <section className="bg-white rounded-t-[3rem] py-8">
        <div className="flex flex-wrap justify-around py-12">
          {['JavaScript', 'Python', 'Java', 'C#'].map((skill, index) => (
            <h5 key={skill} className={`font-extrabold text-teal-600 mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${0.7 + index * 0.1}s` }}>{skill}</h5>
          ))}
        </div>
      </section>
    )
}

export default Skills