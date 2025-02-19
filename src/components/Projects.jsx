import React, { useEffect, useState } from "react";
import fbClone from "../assets/Facebook-clone.png";
import daluul from "../assets/daluul.png";

// Default placeholder image (you can replace it with a custom one)
const defaultImage = "https://via.placeholder.com/200x150?text=No+Image";

const projects = [
  
  {
    title: "DaluulTech Web",
    image: daluul,
    link: "https://daluultech.vercel.app/",
  },
  {
    title: "E-Commerce dashboard",
    image: "", // No image provided
    link: "https://github.com/hefow/e-commerce",
  },
  {
    title: "Hotel Booking app",
    image: "", // No image provided
    link: "https://github.com/hefow/hotel_booking_app",
  },
  {
    title: "Home tax somalia",
    image: "",
    link: "https://github.com/hefow/home-tax-somalia",
  },
  {
    title: "facebook clone",
    image: fbClone,
    link: "https://github.com/hefow/Facebook-clone",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="p-6">
      <h1
        className={`text-center mt-8 font-black text-3xl text-slate-800 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Projects
      </h1>

      <section className="flex flex-wrap justify-center mt-8 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`shadow-md p-4 bg-white rounded-lg w-full sm:w-72 text-center transition-all duration-300 hover:shadow-xl ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="mx-auto w-48 h-32 object-cover rounded"
              />
            ) : (
              <div className="bg-gray-200 w-48 h-32 mx-auto flex items-center justify-center text-gray-500 font-semibold rounded">
                No Image
              </div>
            )}
            <h4 className="font-bold text-slate-800 mt-3">{project.title}</h4>
            <button onClick={() => window.open(project.link, "_blank")} className="bg-teal-600 text-white py-2 px-4 rounded-2xl mt-2 w-full hover:bg-teal-700 transition-all duration-300 hover:shadow-md">
                Visit
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
