import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1 from '../assets/book-store.png';
import project2 from '../assets/inventory.png';
import project3 from '../assets/daluul.png';
import project4 from '../assets/property.png';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

const projects = [
  {
    title: 'Book Store App',
    description: 'A modern book store web application with features like book browsing, cart system, and secure checkout.',
    image: project1,
    tech: ['NextJs', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: '#',
    githubUrl: 'https://github.com/hefow/book-store-client.git',
  },
  {
    title: 'Inventory Management System',
    description: 'A complete inventory tracking system with product management, stock monitoring, and role-based access control.',
    image: project2,
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    liveUrl: '#',
    githubUrl: 'https://github.com/hefow/inventory-management.git',
  },
  {
    title: 'Daluultech Website',
    description: 'A professional company website built for Daluultech with modern UI/UX and responsive design.',
    image: project3,
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://daluultech-76nxuzabz-ahmed-s-projects-cbc6833e.vercel.app/',
    githubUrl: 'https://github.com/hefow/Daluultech.git',
  },
  {
    title: 'Property Management System',
    description: 'A platform for managing properties, homeowners, and users with advanced role-based routing and CRUD operations.',
    image: project4,
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Som-Developers/Property_Registeration_System.git',
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-card rounded-2xl overflow-hidden shadow-elegant group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <Button
                    size="sm"
                    className="bg-secondary hover:bg-secondary/90"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
