import React, { useEffect, useState } from "react";
import menu from "../assets/menu_FILL0_wght400_GRAD0_opsz48.svg"
import close from "../assets/close_FILL0_wght400_GRAD0_opsz48.svg"



function Header(){
    const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', { firstName, lastName, email })
  }
    return(
 
    <header className={`flex justify-between mx-4 sm:mx-20 rounded-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
        <h4 className="font-semibold text-teal-600  my-4">HEFOW</h4>
        <ul className="flex gap-4 my-4">
          {['home', 'service', 'projects', 'contact'].map((item, index) => (
            <li key={item} className={isVisible ? 'animate-slide-in' : 'opacity-0'} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <a href={`#${item}`} className="text-slate-600 hover:text-teal-600 hover:underline transition-colors duration-300 ">{item}</a>
            </li>
          ))}
        </ul>
      </header>
    )
}

export default Header