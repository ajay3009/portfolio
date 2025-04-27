import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white animate-fadeIn">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeIn">
          About <span className='text-blue-500'>Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Senior Frontend/Full Stack Developer with experience in creating web 
                applications. I specialize in JavaScript technologies across the whole 
                stack (React.js, Angular, Next.js, Node.js, Express, MongoDB, MySQL).
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
                <h4 className="text-4xl text-primary mb-2">14+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform">
                <h4 className="text-4xl text-primary mb-2">20+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform">
                <h4 className="text-4xl text-primary mb-2">5+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
            <div class="flex space-x-4 mt-8">
                        <a href="/portfolio/files/Ajay_Resume.pdf" download="Ajay_Resume.pdf" class="bg-blue-500 hover:bg-blue-600 text-white hover:text-white px-6 py-2 rounded-lg transition flex items-center">
                            <i class="fas fa-download mr-2"></i> Download CV
                        </a>
                        <a href="mailto:ajaysandy@gmail.com" class="border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-2 rounded-lg transition">
                            Contact Me
                        </a>
                    </div>
          </motion.div>
          <div class="grid grid-cols-2 gap-4 mb-8">
                        <div class="flex items-center">
                            <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>Problem Solving</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>Responsive Design</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>Clean Code</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>Team Collaboration</span>
                        </div>
                    </div>
        </div>
      </div>
    </section>
  );
};

export default About;