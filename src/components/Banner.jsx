import React, { useEffect, useState } from "react";
import myProfile from "../assets/my_profile.jpg"

function Banner(){
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])
    return(
        <section className={`text-center py-16 mt-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
        <div className="mb-2">
          <img  src={myProfile} alt="Profile" width={200} height={200} className="mx-auto rounded-full bg-teal-600 transition-transform duration-300 hover:scale-110" />
        </div>
        <span className="bg-white py-2 px-4 rounded-full text-teal-600 inline-block transition-all duration-300 hover:bg-teal-600 hover:text-white">I&apos;m ahmed 👏</span>
        <div className="mt-4">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Hi, I&apos;m Full-Stack Developer <br />with MERN-stack expertise</h1>
          <p className="text-slate-600">Building seamless web applications from concept to completion.</p>
          <button className="bg-teal-600 text-white py-4 px-6 rounded-2xl mt-4 cursor-pointer hover:bg-teal-700 transition-all duration-300 hover:shadow-lg">Get in Touch</button>
        </div>
      </section>
    )
}

export default Banner