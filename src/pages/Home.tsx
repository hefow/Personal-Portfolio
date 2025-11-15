import { ThemeProvider } from '../contexts/ThemeContext';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
const Home = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          {/* Main content goes here */}
          <Hero/>
          <About/>
          <Services/>
          <Projects/>
          <Blog/>
          <Contact/>
        </main>
        <Footer/>
      </div>
    </ThemeProvider>
  );
};

export default Home;
