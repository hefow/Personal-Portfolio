import React from "react";
import Header from "../components/Header"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Banner from "../components/Banner"
import Bio from "../components/Bio"
import Contact from "../components/Contact"


const Home =()=>{
    return <div>
        {/* header section */}
        <Header/>
        {/* Banner section */}
        <Banner/>
        {/* Skills section */}
        <Skills/>
        {/* projects section */}
        <Projects/>
        {/* about section */}
        <Bio/>
        {/* contact section */}
        <Contact/>
    </div>
}


export default Home