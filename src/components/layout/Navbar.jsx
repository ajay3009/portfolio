import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '#skills', text: 'Skills' },
    { href: '#experience', text: 'Experience' },
    { href: '#testimonials', text: 'Testimonials' },
  ];

  return (
    <nav className={`fixed w-full bg-[#151515] shadow-lg z-50 ${isScrolled ? 'py-2' : 'py-4'} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#home" className="text-3xl font-bold text-white hover:text-primary transition-colors">AKP</a>
        
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-between w-7 h-6 z-50"
          aria-label="Toggle menu"
        >
          <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="text-gray-300 font-medium hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.text}
            </a>
          ))}
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-[#151515]/98 pt-24 px-8 flex flex-col gap-4 md:hidden"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 text-lg hover:text-white transition-colors duration-300 py-2"
                >
                  {link.text}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;