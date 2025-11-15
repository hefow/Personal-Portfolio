import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: {
    _id: string;
    title: string;
    // date: string;
    image?: string | { url: string }[];
    content: string;
    readTime?: string;
    // tags: string[];
  };
}

const BlogCard = ({ post }: BlogCardProps) => {

    const imageSrc =
    Array.isArray(post.image)
      ? post.image[0]?.url || ''
      : post.image || '';

    console.log('BlogCard Image Source:', imageSrc);
  return (
    <motion.article
      whileHover={{ y: -10 }}
      className="bg-card rounded-2xl overflow-hidden shadow-elegant card-hover cursor-pointer group"
    >
      <Link to={`/blog/${post._id}`}>
        <div className="relative overflow-hidden h-56">
          <img
            src={imageSrc}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {post.readTime}
          </div>
        </div>

        <div className="p-6">
          {/* <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div> */}

          <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-secondary transition-colors">
            {post.title}
          </h3>

          {/* <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div> */}

          <Button
            variant="ghost"
            className="text-secondary hover:text-secondary/80 p-0 h-auto font-medium group"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
