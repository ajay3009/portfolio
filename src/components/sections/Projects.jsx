import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, cart functionality, and secure checkout.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/project1.jpg',
    liveLink: '#',
    codeLink: '#'
  },
  {
    title: 'Task Management App',
    description: 'A productivity application for teams to collaborate on projects and track progress.',
    technologies: ['Vue.js', 'Firebase', 'TailwindCSS'],
    image: '/project2.jpg',
    liveLink: '#',
    codeLink: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather information with 5-day forecast and location-based services.',
    technologies: ['JavaScript', 'API', 'CSS3'],
    image: '/project3.jpg',
    liveLink: '#',
    codeLink: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl text-center mb-12">
          <span className="text-primary">My</span> Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform"
            >
              <div className="relative h-48 group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    className="px-6 py-2 bg-primary text-secondary font-bold rounded hover:bg-primary/90 transform hover:scale-105 transition-all"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink}
                    target="_blank"
                    className="px-6 py-2 bg-primary text-secondary font-bold rounded hover:bg-primary/90 transform hover:scale-105 transition-all"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;