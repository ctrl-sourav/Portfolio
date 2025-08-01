import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences = [
    {
      title: 'Web-Dev Intern',
      company: 'Crushaders Tech Solution',
      location: 'Bhubaneswar, Odisha, India',
      period: ' May 2024 - Jun 2024',
      description: [
        ' Drove the development of responsive web interfaces.',
        'Collaborated with the team to integrate front-end components with back-end APIs',
        
        'Built responsive web applications using React and TypeScript'
      ],
      type: 'work'
    },
   
  ];

  const education = [
    {
      title: ' B.Tech, CSE',
      company: 'GITA',
      location: 'Bhubaneswar, Odisha, India',
      period: '2022 - 2026',
      description: [
        'Graduated in CSE with 8.9 CGPA',
        'Specialized in Software Engineering and Web Development',
        
      ],
      type: 'education'
    },

    {
      title: ' XII, CBSE',
      company: 'SBD International School',
      location: 'Bhadrak, Odisha, India',
      period: '2022',
      description: [
        ' Percentage: 75.6%',
        
        
      ],
      type: 'education'
    },

    {
      title: ' X, CBSE',
      company: 'SBD International School',
      location: 'Bhadrak, Odisha, India',
      period: '202',
      description: [
        ' Percentage: 91.2%',
        
        
      ],
      type: 'education'
    }

    
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

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const TimelineItem = ({ item, index }: { item: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent"></div>
      
      {/* Timeline dot */}
      <motion.div
        className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-primary glow-blue"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: index * 0.2, duration: 0.4 }}
      />

      {/* Content card */}
      <motion.div
        className="glass-card p-6 ml-6"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
            <div className="flex items-center text-primary mb-2">
              <Building className="h-4 w-4 mr-2" />
              {item.company}
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <div className="flex items-center mb-1">
              <Calendar className="h-4 w-4 mr-2" />
              {item.period}
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              {item.location}
            </div>
          </div>
        </div>

        <ul className="space-y-2">
          {item.description.map((desc: string, i: number) => (
            <li key={i} className="text-muted-foreground flex items-start">
              <span className="text-primary mr-2 mt-2">•</span>
              {desc}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 px-6 bg-card/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-8 text-primary">
              Work Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <TimelineItem key={index} item={exp} index={index} />
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-8 text-secondary">
              Education
            </h3>
            
            {education.map((edu, index) => (
              <TimelineItem 
                key={index} 
                item={edu} 
                index={index + experiences.length} 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;