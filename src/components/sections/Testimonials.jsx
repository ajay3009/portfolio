import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      text: 'John transformed our outdated website into a modern, user-friendly platform. His attention to detail and problem-solving skills are exceptional. Our conversion rates increased by 40% after the redesign.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO, Digital Solutions',
      text: 'Working with John on our SaaS product was a game-changer. He not only delivered the project ahead of schedule but also suggested improvements we hadn\'t considered. His technical expertise is matched only by his professionalism.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, BrandCo',
      text: 'John built our e-commerce platform from scratch, handling everything from database design to frontend implementation. The site has been running flawlessly for two years with minimal maintenance needed. Highly recommend!',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What people I've worked with say about me and my work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md relative"
            >
              <span className="absolute text-6xl text-primary/10 -top-4 left-4 font-serif">"</span>
              <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                {testimonial.text}
              </p>
              <div className="border-t border-gray-100 pt-4">
                <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;