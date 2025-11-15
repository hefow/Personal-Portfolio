
import { motion } from 'framer-motion';
import BlogCard from '../../components/BlogCard';
import PostSkeleton from '../../components/PostSkeleton';
import { useState, useEffect } from 'react';
import { fetchBlogPosts } from '@/services/blogApi';
import Navbar from '@/components/NavBar';
import { ThemeProvider } from '@/contexts/ThemeContext';

interface  Post {
    _id: string;
    title: string;
    // date: string;
    image?: string | { url: string }[];
    content: string;
    readTime?: string;
    // tags: string[];
  };

const BlogList = () => {
  const [loading, setLoading] = useState(true);
  const [posts ,setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchBlogPosts().then((data) =>{setPosts(data.posts), setLoading(false)} );
  }, []);
  console.log(posts);

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

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pt-10">
        {[1, 2, 3].map((i) => (
          <PostSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <ThemeProvider>
    <div className="min-h-screen">
      <Navbar/>
      <main className='pt-20'>
      <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
    >
      {posts.map((post) => (
        <motion.div key={post._id} variants={itemVariants}>
          <BlogCard post={post} />
        </motion.div>
      ))}
    </motion.div>
      </main>
    </div>
    </ThemeProvider>
    
  );
};

export default BlogList;
