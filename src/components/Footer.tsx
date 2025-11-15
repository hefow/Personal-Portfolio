import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-muted-foreground">
          <p className="text-center">
            © {currentYear} Ahmed — Built with{' '}
            <Heart className="inline w-4 h-4 text-secondary fill-secondary" />{' '}
            using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
