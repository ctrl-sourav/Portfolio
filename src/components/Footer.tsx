import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-card/40 border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Soumya Sourav Kuanr</h3>
            <p className="text-muted-foreground leading-relaxed">
               Full-stack developer creating digital experiences 
              that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Top */}
          <div className="flex justify-start md:justify-end">
            <motion.button
              onClick={scrollToTop}
              className="glass-button p-3 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="h-5 w-5 text-primary group-hover:text-primary transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p className="flex items-center mb-4 md:mb-0">
              © 2025 Soumya Sourav Kuanr. All rights reserved.
            
            </p>
            <p>
              Built with React, TypeScript, Framer Motion and lot's of Coffee☕ !
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;