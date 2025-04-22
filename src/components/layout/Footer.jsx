import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { href: 'https://github.com', icon: 'fab fa-github' },
    { href: 'https://linkedin.com', icon: 'fab fa-linkedin' },
    { href: 'https://twitter.com', icon: 'fab fa-twitter' },
    { href: 'mailto:john.doe@example.com', icon: 'fas fa-envelope' }
  ];

  return (
    <footer className="bg-secondary py-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ajay Kumar Pandit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;