import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Application Developer',
      company: 'Pollard BankNote',
      period: 'Dec 2022 - July 2024',
      description: 'Working as a senior application developer and handling Web and Mobile Applications. Developed and maintained web applications using React Native, React.js and Next.js. Collaborated with cross-functional teams to deliver high-quality software solutions.'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Wells Fargo',
      period: 'Apr 2021 - July 2022',
      description: 'Led a team of 4 front-end engineers in the development of credit application using React. Implemented responsive design and ensured cross-browser compatibility. Worked closely with UX/UI designers to enhance user experience.'
    },
    {
      title: 'Staff Engineer',
      company: 'Nagarro',
      period: 'Oct 2019 - Apr 2021',
      description: 'Development of the Insurance Product forthe Nedbank Group, which is offering wholesale and retail banking services. Writing unit test cases and making sure for 95% test coverage of the code. Created reusable widgets using Angular Elements.'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Birlasoft',
      period: 'July 2017 - Oct 2019',
      description: 'Converted the existing site from AngularJS into React. Implemented Redux for state management. Developed RESTful APIs using Node.js and Express. Collaborated with backend developers to integrate APIs.'
    },
    {
      title: 'Senior Web Developer',
      company: 'GNG IT Services Pvt. Ltd.',
      period: 'Apr 2010 - Apr 2017',
      description: 'Designed dynamic and browser compatible pages using HTML5, CSS3, jQuery and Javascript. Delivered responsive, cross-browser compatible and accessibility compliant websites'
    }
  ];

  const education = [
    {
      degree: 'Masters of Computer Applications (MCA)',
      school: 'University of Delhi',
      period: '2007 - 2010',
      description: 'Developing expertise in computer application development, software development, and programming.'
    },
    {
      degree: 'B.Sc. in Computer Science',
      school: 'University of Delhi',
      period: '2003 - 2006',
      description: 'Comprehensive foundation in the theoretical and practical aspects of computer systems, software development, and related technologies'
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