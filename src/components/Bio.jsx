import React, { useEffect, useState } from "react";
import myProfile from "../assets/my_profile.jpg"

const Bio =()=>{
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])
    return(
        <section className="bg-white flex flex-wrap justify-around py-12">
        <div className={`mt-2 w-full sm:w-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.8s' }}>
          <img src={myProfile} alt="Profile" width={300} height={300} className="border-4 border-teal-600 mt-2 mx-auto transition-all duration-300 hover:shadow-xl" />
        </div>
        <div className="p-4 ml-4 space-y-4 text-slate-800 w-full sm:w-1/2">
          {[
            { bg: 'bg-teal-100', content: 'I am a dedicated and detail-oriented MERN stack developer with a passion for crafting innovative web and mobile solutions. With expertise in full-stack development, UI/UX design, and mobile app development' },
            { bg: 'bg-teal-50', content: 'As a passionate MERN stack developer, I enjoy creating full-stack applications that solve real-world problems.' },
            { bg: 'bg-slate-100', content: 'I build web applications like School management system and StudyGroupOrganizer with a team' }
          ].map((item, index) => (
            <div key={index} className={`${item.bg} p-4 rounded transition-all duration-300 hover:shadow-md ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${2 + index * 0.2}s` }}>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </section>
    )
}

export default Bio