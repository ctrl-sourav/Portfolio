import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch, 
  Palette,
  Server,
  Wrench
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 85 },
      ],
      color: 'primary',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'MongoDb', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'RESTful APIs', level: 95 },
      ],
      color: 'secondary',
    },
    {
      title: 'DevOps',
      icon: GitBranch,
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS/Vercel', level: 88 },
        { name: 'GitHub Actions', level: 82 },
        
      ],
      color: 'accent',
    },
    {
      title: 'Design',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Prototyping', level: 78 },
        { name: 'Design Systems', level: 85 },
      ],
      color: 'primary',
    },
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'C', level: 95 },
        { name: 'C++', level: 95 },
        { name: 'Java', level: 90 },
        { name: 'Python', level: 95 },
        
      ],
      color: 'primary',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="glass-card p-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl mr-4 ${
                  category.color === 'primary' ? 'bg-primary/20' :
                  category.color === 'secondary' ? 'bg-secondary/20' :
                  'bg-accent/20'
                }`}>
                  <category.icon className={`h-6 w-6 ${
                    category.color === 'primary' ? 'text-primary' :
                    category.color === 'secondary' ? 'text-secondary' :
                    'text-accent'
                  }`} />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          category.color === 'primary' ? 'bg-primary' :
                          category.color === 'secondary' ? 'bg-secondary' :
                          'bg-accent'
                        }`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
