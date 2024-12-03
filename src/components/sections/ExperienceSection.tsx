import { motion } from "framer-motion";

export const ExperienceSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center py-20 px-8 bg-[#FFE5E5]"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto my-12 p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <motion.h2 
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            whileHover={{ scale: 1.02 }}
            className="text-4xl font-black mb-8 uppercase border-b-4 border-black pb-4"
          >
            Experience & Skills
          </motion.h2>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="bg-[#74FFED] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-xl font-bold mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TailwindCSS', 'TypeScript'].map((tech) => (
                  <span key={tech} className="bg-white px-3 py-1 border-2 border-black">{tech}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#FFB4E6] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-xl font-bold mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MongoDB', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="bg-white px-3 py-1 border-2 border-black">{tech}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#FFD874] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-xl font-bold mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'Python', 'PHP'].map((tech) => (
                  <span key={tech} className="bg-white px-3 py-1 border-2 border-black">{tech}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Experience Timeline and Availability */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="col-span-2"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Work Timeline</h3>
                
                {[
                  {
                    date: "2023 - Present",
                    role: "Freelance Developer",
                    company: "Self-employed",
                    description: "Working on various web development projects for clients."
                  },
                  {
                    date: "2022 - 2023",
                    role: "Junior Web Developer",
                    company: "Tech Company",
                    description: "Developed and maintained web applications using React and Node.js."
                  }
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#E8E8E8] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">{job.role}</h4>
                      <span className="text-sm bg-black text-white px-2 py-1">{job.date}</span>
                    </div>
                    <p className="text-gray-600 font-bold">{job.company}</p>
                    <p className="mt-2">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="bg-[#98FF98] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-fit"
            >
              <h3 className="text-xl font-bold mb-4">Availability Status</h3>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold">Available for Work</span>
              </div>
              <p className="text-sm">Open to:</p>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Full-time positions</li>
                <li>Freelance projects</li>
                <li>Remote work</li>
              </ul>
            </motion.div>
          </div>

          {/* Additional Section - Certifications */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-[#FFB6C1] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "Web Development Bootcamp",
                  issuer: "Udemy",
                  date: "2023"
                },
                {
                  name: "React Advanced Patterns",
                  issuer: "Frontend Masters",
                  date: "2023"
                }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-4 border-2 border-black"
                >
                  <h4 className="font-bold">{cert.name}</h4>
                  <p className="text-sm">{cert.issuer} - {cert.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
