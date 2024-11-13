import React, { useEffect, useState } from "react";

function Services(){
   const [isVisible, setIsVisible] = useState(false)

   useEffect(() => {
      setIsVisible(true)
   }, [])
   return(
      <div>
         <h1 className={`text-center mt-8 font-black text-3xl text-slate-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>Services</h1>
      <section className="flex flex-wrap justify-between mx-4 sm:mx-20 my-4 p-5 ">
        {[
          { img: 'ui', title: 'UI/UX', desc: 'I focus on creating intuitive, user-centered designs that ensure a seamless experience across devices.' },
          { img: 'web', title: 'Web development', desc: 'As a skilled web developer, I specialize in building responsive, high-performance web applications using modern technologies.' },
          { img: 'mobile', title: 'Mobile app', desc: 'I design and develop mobile applications with a focus on performance, usability, and cross-platform compatibility.' }
        ].map((service, index) => (
          <div key={service.title} className={`p-4 w-full sm:w-1/3 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${1.2 + index * 0.2}s` }}>
            <img src={`/placeholder.svg?height=45&width=45`} alt={service.title} width={45} height={45} className="mt-4 transition-transform duration-300 hover:scale-110" />
            <h3 className="mt-4 text-slate-800 font-bold">{service.title}</h3>
            <p className="mt-4 text-slate-600">{service.desc}</p>
          </div>
        ))}
      </section>
      </div>
   )
}

export default Services