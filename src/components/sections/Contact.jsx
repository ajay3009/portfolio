import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg text-gray-800 mb-2">Email</h4>
                <p className="text-gray-600">ajaysandy@gmail.com</p>
              </div>
              <div>
                <h4 className="text-lg text-gray-800 mb-2">Phone</h4>
                <p className="text-gray-600">+91 (852) 798-3557</p>
              </div>
              <div>
                <h4 className="text-lg text-gray-800 mb-2">Location</h4>
                <p className="text-gray-600">New Delhi, IN</p>
              </div>
            </div>

            <h3 className="text-2xl text-gray-800 mt-8 mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a href="https://github.com/ajay3009" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-primary transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ajay-kumar-pandit-b15666bb/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-primary transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
            <h3 className="text-2xl text-gray-800 mb-6">Send Me a Message</h3>
            <div>
              <input 
                type="text" 
                placeholder="Name" 
                required 
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                required 
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Subject" 
                required 
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <textarea 
                placeholder="Message" 
                rows="5" 
                required 
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors resize-y"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;