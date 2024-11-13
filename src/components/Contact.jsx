import React, { useEffect, useState } from "react";
import location from "../assets/location.png"
import email from "../assets/email.png"
import phone from "../assets/phone.png"

const Contact =()=>{
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
    return (
        <div>
        <hr className="mt-12 border-slate-300" />

      <section className={`flex justify-center mt-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '3.6s' }}>
        <form onSubmit={handleSubmit} className="flex flex-col p-6 shadow-md w-full max-w-md bg-white rounded-lg transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Contact me</h2>
          <label htmlFor="Firstname" className="text-slate-700">Firstname:</label>
          <input
            type="text"
            id="Firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border border-slate-300 rounded m-1 p-2 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all duration-300"
          />
          <label htmlFor="Lastname" className="text-slate-700">Lastname:</label>
          <input
            type="text"
            id="Lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border border-slate-300 rounded m-1 p-2 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all duration-300"
          />
          <label htmlFor="Email" className="text-slate-700">Email:</label>
          <input
            type="email"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-slate-300 rounded m-1 p-2 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all duration-300"
          />
          <button type="submit" className="py-2 px-4 bg-teal-600 text-white rounded-lg cursor-pointer mt-4 hover:bg-teal-700 transition-all duration-300 hover:shadow-md">
            Submit
          </button>
        </form>
      </section>
      </div>
    )
}

export default Contact