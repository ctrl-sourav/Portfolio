import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectTaskManager from '@/assets/project-taskmanager.jpg';
import projectWeather from '@/assets/project-weather.jpg';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform build using React, Tailwind CSS and modern API integration. Features include user authentication, product management, shopping cart, and order tracking.',
      image: projectEcommerce,
      tech: ['React', 'Node.js', 'TypeScript', 'API',  'Tailwind CSS'],
      github: 'https://github.com/ctrl-sourav/Nexus_cart',
      demo: 'https://nexus-cart.vercel.app/',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates. Built with React, TypeScript and Tailwind CSS , designed to boost individual productivity and streamline daily planning.',
      image: projectTaskManager,
      tech: ['React',  'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/ctrl-sourav/Flow_pilot',
      demo: 'https://flow-pilot-peach.vercel.app/',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts, interactive charts, and responsive design.',
      image: projectWeather,
      tech: ['React', 'TypeScript', 'Weather API', 'Tailwind CSS'],
      github: 'https://github.com/ctrl-sourav/SkyCast',
      demo: 'https://sky-cast-orpin.vercel.app/',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Next.js, featuring dark mode, animations, and responsive design.',
      image: projectEcommerce,
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript','API'],
      github: 'https://github.com/ctrl-sourav/Portfolio',
      demo: 'https://portfolio-soumyasourav-kuanr.vercel.app/',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className={`glass-card overflow-hidden ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex gap-8`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 relative group">
                <motion.div
                  className="relative overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button 
                        size="sm" 
                        className="bg-background/90 text-foreground hover:bg-background"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="bg-background/90 border-foreground/20 hover:bg-background"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 p-6 flex flex-col justify-center">
                {project.featured && (
                  <span className="text-primary font-mono text-sm mb-2">
                    Featured Project
                  </span>
                )}
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button 
                    className="gradient-primary text-primary-foreground"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="glass-button border-primary/50 text-primary"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button 
            size="lg"
            variant="outline"
            className="glass-button border-primary/50 text-primary hover:scale-105 transition-transform"
            asChild
          >
            <a href="https://github.com/ctrl-sourav?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
