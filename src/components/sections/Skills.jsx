import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript/ES6', level: 90 },
        { name: 'Typescript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'React Native', level: 85 },
        { name: 'Ionic Framework', level: 75 },
        { name: 'Angular', level: 80 },
        { name: 'Next.js', level: 75 },
        { name: 'Redux', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'SCSS', level: 85 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 65 },
        { name: 'Express', level: 65 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 65 },
        { name: 'MySQL', level: 65 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'SQL Server', level: 75 },
        { name: 'Firebase', level: 70 }
      ]
    },
    {
      title: 'Testing',
      skills: [
        { name: 'Jest', level: 75 },
        { name: 'Karma', level: 75 },
        { name: 'Jasmine', level: 75 },
        { name: 'Testing Library/React', level: 75 },
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Webpack', level: 80 },
        { name: 'Vite', level: 80 },
        { name: 'Gulp', level: 80 },
        { name: 'Grunt', level: 80 },
        { name: 'Rollup', level: 60 },
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'SVN', level: 90 },
        { name: 'Figma', level: 80 }
      ]
    },
    {
      title: 'Libraries',
      skills: [
        { name: 'Material UI', level: 85 },
        { name: 'BootStrap', level: 85 },
        { name: 'PrimeNg', level: 80 },
        { name: 'D3.js', level: 60 },
        { name: 'Echarts', level: 60 }
      ]
    },
    {
      title: 'Learning',
      skills: [
        { name: 'Docker', level: 25 },
        { name: 'Kubernetes', level: 20 },
        { name: 'AWS', level: 30 },
        { name: 'REST APIs', level: 30 },
        { name: 'Java', level: 40 },
        { name: 'Spring Boot', level: 40 }
      ]
    }

  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-9xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">
            <span className="text-primary">My</span> Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here are my core competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl text-gray-800 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-primary rounded"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;