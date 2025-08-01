import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Code, Coffee, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Using direct path to uploaded image

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stats = [
    { icon: Code, label: 'Years of study', value: '4' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1,000+' },
    { icon: Zap, label: 'Continuous Growth Mindset', value: '∞' },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Text content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Soumya, a passionate full-stack developer with a love for creating 
                digital experiences that are not only functional but also beautiful and intuitive.
              </p>
              
              <p>
                I'm a final-year Computer Science and Engineering undergraduate, passionate about learning new technologies and applying them to real-world challenges. I'm actively seeking opportunities to grow, innovate, and contribute to impactful projects.
              </p>
              
              <p>
                I specialize in modern JavaScript frameworks, with a particular focus on React, 
                TypeScript, and Node.js and efficient in languages such as C, C++, Java, python. I'm also passionate about emerging technologies and 
                always eager to learn new tools that can improve my craft.
              </p>
            </div>

            <motion.div
              className="mt-8"
              variants={itemVariants}
            >
               
   
              <Button 
                size="lg"
                className="gradient-accent text-accent-foreground hover:scale-105 transition-transform"
                
              >
                <Download className="mr-2 h-5 w-5" />
                My Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Photo and stats */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Profile photo */}
            <motion.div
              className="relative mx-auto w-80 h-80"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 gradient-primary rounded-full blur-xl opacity-30" />
              <img
                src="/profile-photo.jpg"
                alt="Soumya Sourav Kuanr"
                className="relative w-full h-full object-cover rounded-full border-4 border-primary/30 shadow-2xl"
              />
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-4 text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
