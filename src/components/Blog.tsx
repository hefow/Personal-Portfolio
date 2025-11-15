import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import blog1 from '../assets/blog1.jpeg';
import blog2 from '../assets/blog2.jpeg';
import blog3 from '../assets/blog3.jpeg';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blogPosts = [
    {
      title: 'Modern Web Development Trends in 2024',
      date: 'January 15, 2024',
      summary: 'Exploring the latest trends and technologies shaping the future of web development, from AI integration to serverless architectures.',
      image: blog1,
      readTime: '5 min read',
    },
    {
      title: 'The Art of UI/UX Design',
      date: 'December 28, 2023',
      summary: 'Understanding the principles of creating beautiful and intuitive user interfaces that delight users and drive engagement.',
      image: blog2,
      readTime: '7 min read',
    },
    {
      title: 'Data Analysis for Beginners',
      date: 'December 10, 2023',
      summary: 'A comprehensive guide to getting started with data analysis, covering essential tools and techniques for extracting insights.',
      image: blog3,
      readTime: '10 min read',
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
    <section id="blog" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Latest Articles</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Insights and tutorials on web development, design, and technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-card rounded-2xl overflow-hidden shadow-elegant card-hover cursor-pointer group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {post.readTime}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.summary}
                </p>

                <Button
                  variant="ghost"
                  className="text-secondary hover:text-secondary/80 p-0 h-auto font-medium group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
