import React, { useEffect, useState } from "react";

function Footer(){
   const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])
   return(
      <footer className={`bg-white py-8 text-center text-slate-600 mt-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '3.8s' }}>
      &copy; hefow all rights reserved
    </footer>
   )
}
export default Footer