import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='flex flex-row items-center justify-center w-full px-8'
      >
        <div className="md:w-1/2 mb-12 md:mb-0 animate-fadeIn">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Hi, I'm</h1>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-500">Ajay Kumar Pandit</h1>
          <h2 className="text-3xl md:text-4xl text-gray-600 mb-6">Senior Frontend Developer</h2>
          <p className="text-lg mb-8 text-gray-600 max-w-lg">
            I build exceptional digital experiences that are fast, accessible, and visually appealing.
          </p>
          <div className="flex space-x-4 flex-col sm:flex-row">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition shadow-lg"
            >
              View My Work
            </button>
            <button
              className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg transition"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fadeIn delay-200">
                    <div class="relative">
                        <div class="w-64 h-64 md:w-80 md:h-80 bg-blue-100 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80" alt="John Doe" class="w-full h-full object-cover"/>
                        </div>
                        <div class="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                    <i class="fas fa-code text-xl"></i>
                                </div>
                                <div class="ml-3">
                                    <p class="font-bold">14+ Years</p>
                                    <p class="text-sm text-gray-500">Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
      </div>
      </motion.div>
      
    </section>
  );
};

export default Hero;