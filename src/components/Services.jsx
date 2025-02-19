import React, { useEffect, useState } from "react";


const services = [
  {
    icon: "fas fa-code", // FontAwesome icon class
    title: "Web Development",
    description: "Build modern and responsive web applications using cutting-edge technologies.",
  },
  {
    icon: "fas fa-paint-brush",
    title: "UI/UX Design",
    description: "Create stunning and user-friendly interfaces that enhance user experience.",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile App Development",
    description: "Develop high-performance mobile applications for both Android and iOS platforms.",
  },
];
function Services(){

   return(
    <section className="py-16 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 w-72 text-center transition-transform transform hover:-translate-y-2"
          >
            <i className={`${service.icon} text-4xl text-blue-500 mb-4`}></i>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
   )
}

export default Services