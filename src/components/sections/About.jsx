import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl text-center mb-12">
          <span className="text-primary">About</span> Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl text-gray-800 mb-6">Who am I?</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with experience in creating web 
                applications. I specialize in JavaScript technologies across the whole 
                stack (React.js, Node.js, Express, MongoDB).
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My approach combines technical expertise with creative problem-solving 
                to deliver high-quality solutions. I'm dedicated to writing clean, 
                efficient code and creating intuitive user experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform">
                <h4 className="text-4xl text-primary mb-2">5+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform">
                <h4 className="text-4xl text-primary mb-2">50+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform">
                <h4 className="text-4xl text-primary mb-2">20+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;