import React, { useEffect, useState } from "react";
import fbClone from "../assets/Facebook-clone.png"
import cRent from "../assets/CarRent.png"
import airlane from "../assets/Airlane.png"
import daluul from "../assets/daluul.png"



const Projects =()=>{
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
 return (
  <div>
    <h1 className={`text-center mt-8 font-black text-3xl text-slate-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '2.6s' }}>Projects</h1>
      <section className="flex flex-wrap justify-around mt-8 p-2 gap-1">
          <div className={`shadow-md p-4 bg-white rounded-lg mb-4 w-full sm:w-1/4 transition-all duration-300 hover:shadow-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `2.8s` }}>
            <img src={fbClone} alt={`Project`} width={200} height={150} className="mx-auto" />
            <h4 className="font-bold text-slate-800 mt-2">School management</h4>
            <button className="bg-teal-600 text-white py-2 px-4 rounded-2xl mt-2 w-full hover:bg-teal-700 transition-all duration-300 hover:shadow-md">
              <a href="https://github.com/ahmedibrahim23/School-Management-using-react" className="no-underline text-white">Visit</a>
            </button>
          </div>
          <div className={`shadow-md p-4 bg-white rounded-lg mb-4 w-full sm:w-1/4 transition-all duration-300 hover:shadow-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `2.8s` }}>
            <img src={daluul} alt={`Project`} width={200} height={150} className="mx-auto" />
            <h4 className="font-bold text-slate-800 mt-2">Daluultech web</h4>
            <button className="bg-teal-600 text-white py-2 px-4 rounded-2xl mt-2 w-full hover:bg-teal-700 transition-all duration-300 hover:shadow-md">
              <a href="https://daluultech.vercel.app/" className="no-underline text-white">Visit</a>
            </button>
          </div>
      </section>
  </div>
 )
}

export default Projects