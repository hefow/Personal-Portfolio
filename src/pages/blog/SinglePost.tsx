import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { blogPosts } from '@/data/blogPosts';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navbar from '../../components/NavBar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { fetchBlogPostById } from '@/services/blogApi';
import PostSkeleton from '@/components/PostSkeleton';
// import ScrollToTop from '@/components/ScrollToTop';
  interface Post {
    _id: string;
    title: string;
    date: string;
    image: string;
    readTime: string;
    content: string;
    tags: string[];
  };

const SinglePost = () => {
  const { _id } = useParams();
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true);

  console.log('_id:', _id);
  useEffect(()=>{
    if(_id){
        fetchBlogPostById(_id)
        .then((data)=> {setPost(data.post), console.log('Fetched post data:', data.post)})
        .catch((error)=> console.error("Error fetching post:", error))
        .finally(()=> setLoading(false));
    }
  },[_id]);
  console.log(post);



    if (loading) {
    return (
        <div className="min-h-screen">
            <PostSkeleton />
        </div>
    );
  }
    if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-10">
          <article className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link to="/#blog">
                  <Button variant="ghost" className="mb-8 group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                  </Button>
                </Link>

                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    {post.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                {/* <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1 bg-secondary/10 text-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                </div>

                <div className="relative overflow-hidden rounded-2xl mb-12 shadow-elegant">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                <div
                  className="prose prose-lg dark:prose-invert max-w-none
                    prose-headings:text-foreground prose-headings:font-bold
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-code:text-secondary prose-code:bg-secondary/10 prose-code:px-1 prose-code:rounded"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 pt-8 border-t border-border">
                  <Link to="/blog">
                    <Button className="group">
                      <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                      View All Posts
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </article>
        </main>
        <Footer />
        {/* <ScrollToTop /> */}
      </div>
    </ThemeProvider>
  );
};

export default SinglePost;
