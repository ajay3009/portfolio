import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: 'Lead development team in building enterprise applications. Implemented CI/CD pipelines and mentored junior developers.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Creations',
      period: '2018 - 2021',
      description: 'Developed and maintained web applications using MERN stack. Collaborated with designers to implement UI/UX improvements.'
    },
    {
      title: 'Junior Web Developer',
      company: 'WebStart Agency',
      period: '2016 - 2018',
      description: 'Built responsive websites for clients. Assisted in backend development and database management.'
    }
  ];

  const education = [
    {
      degree: 'MSc in Computer Science',
      school: 'Stanford University',
      period: '2014 - 2016',
      description: 'Specialized in Software Engineering and Artificial Intelligence. Thesis on Machine Learning applications.'
    },
    {
      degree: 'BSc in Computer Science',
      school: 'MIT',
      period: '2010 - 2014',
      description: 'Focused on Web Technologies and Database Systems. Graduated with Honors.'
    },
    {
      degree: 'Web Development Bootcamp',
      school: 'General Assembly',
      period: '2015',
      description: 'Intensive 12-week program covering full stack web development with JavaScript.'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">My Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional path and educational background that shaped my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl text-gray-800 mb-8 text-center">Experience</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md mb-6"
              >
              <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">{exp.title}</h4>
                  <span className="text-sm text-primary">{exp.period}</span>
                </div>
                <h5 className="text-md text-gray-700 mb-2">{exp.company}</h5>
                <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl text-gray-800 mb-8 text-center">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md mb-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
                  <span className="text-sm text-primary">{edu.period}</span>
                </div>
                <h5 className="text-md text-gray-700 mb-2">{edu.school}</h5>
                <p className="text-sm text-gray-600 leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;