import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '../assets/profile.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'Next.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express', icon: '🚂' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Python', icon: '🐍' },
    { name: 'TypeScript', icon: '📘' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl transform rotate-6 opacity-20" />
              <img
                src={profileImage}
                alt="Ahmed - Software Developer"
                className="relative rounded-3xl shadow-elegant w-full max-w-md h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Passionate Developer & Creative Problem Solver
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 5 years of experience in software development, I specialize in building 
              robust web applications using the MERN stack and creating beautiful mobile 
              experiences with Flutter.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
             I’m passionate about crafting intuitive user interfaces and building seamless web and mobile experiences. Currently focused on creating scalable, full-stack solutions that deliver real impact.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-4 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-card rounded-xl p-4 text-center shadow-md card-hover cursor-pointer"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="text-sm font-medium text-card-foreground">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
