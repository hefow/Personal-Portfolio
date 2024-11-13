import React from "react";
import Header from "../components/Header"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Banner from "../components/Banner"
import Bio from "../components/Bio"
import Contact from "../components/Contact"
import Services from "../components/Services";
import Footer from "../components/Footer";


const Home =()=>{
    return <div className="bg-slate-100 min-h-screen text-slate-800">
        <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>
        {/* header section */}
        <Header/>
        {/* Banner section */}
        <Banner/>
        {/* Skills section */}
        <Skills/>
        <Services/>
        {/* projects section */}
        <Projects/>
        {/* about section */}
        <Bio/>
        {/* contact section */}
        <Contact/>
        <Footer/>
    </div>
}


export default Home