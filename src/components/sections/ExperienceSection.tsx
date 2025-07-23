import { motion } from "framer-motion";
import { Icon, loadIcon } from "@iconify/react";
import { useEffect, useState } from "react";

export const ExperienceSection = () => {
  const techStacks = [
    {
      title: "Web Development",
      bgColor: "bg-[#74FFED]",
      icon: "mdi:web",
      skills: ['HTML', 'CSS', 'React', 'Next.js', 'TailwindCSS', 'Svelte', 'Astro']
    },
    {
      title: "Backend",
      bgColor: "bg-[#FFB4E6]",
      icon: "mdi:server",
      skills: ['Node.js', 'Express', 'Bun', 'Hono', 'NestJs', 'Laravel', 'GraphQL']
    },
    {
      title: "Languages",
      bgColor: "bg-[#FFD874]",
      icon: "mdi:code-braces",
      skills: ['JavaScript', 'TypeScript', 'Java', 'PHP']
    },
    {
      title: "Infrastructure & Devops",
      bgColor: "bg-[#FFD874]",
      icon: "mdi:cloud",
      skills: ['Git', 'Docker', 'Github Actions', 'Vercel', 'Linux', 'cPanel']
    },
    {
      title: "Toolstack",
      bgColor: "bg-[#FFD874]",
      icon: "mdi:tools",
      skills: ['VSCode', 'Laragon', 'Github', 'Postman', 'Android Studio']
    },
    {
      title: "Databases & ORM",
      bgColor: "bg-[#FFD874]",
      icon: "mdi:database",
      skills: ['MySQL', 'MongoDB', 'Prisma', 'TypeOrm', 'PostgreSQL', 'Supabase']
    }
  ];

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {techStacks.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 3 === 0 ? -50 : index % 3 === 1 ? 0 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${stack.bgColor} p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon icon={stack.icon} className="w-5 h-5" />
                  <h3 className="text-xl font-bold">{stack.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.skills.map((skill) => {
                    const getWorkingIcon = async (skill: string) => {
                        const iconName = skill.toLowerCase().replace('.', 'dot')
                        
                        try {
                          const providers = [
                            `simple-icons:${iconName}`,
                            `devicon:${iconName}`,
                            `skill-icons:${iconName}`,
                            `logos:${iconName}`
                          ]
                          
                          for (const provider of providers) {
                            const iconExists = await loadIcon(provider)
                            if (iconExists) {
                              return provider
                            }
                          }
                      
                          return 'mdi:code-tags'
                          
                        } catch {
                          return 'mdi:code-tags'
                        }
                      }
                      
                      const [iconSet, setIconSet] = useState('mdi:code-tags')
                      
                      useEffect(() => {
                        getWorkingIcon(skill).then(icon => setIconSet(icon))
                      }, [skill])
                      
                      return (
                        <span key={skill} className="bg-white px-3 py-1 border-2 border-black flex items-center gap-1">
                          <Icon icon={iconSet} className="w-4 h-4" />
                          {skill}
                        </span>
                      )
                      
                  })}
                </div>              
            </motion.div>           
            ))}
          </div>

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

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-[#FFB6C1] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <h3 className="text-2xl font-bold mb-4">Certifications & Awards</h3>
            <div className="space-y-6">
              {(() => {
                const achievements = [
                  {
                    name: "1st Place in LKS SMK Web Technologies - Surakarta",
                    issuer: "Competition Committee",
                    date: "2025",
                    type: "competitions"
                  },
                  {
                    name: "Dart Programming - Beginner",
                    issuer: "Dicoding Indonesia",
                    date: "2024",
                    type: "certifications"
                  },
                  {
                    name: "Flutter Programming - Beginner",
                    issuer: "Dicoding Indonesia",
                    date: "2024",
                    type: "certifications"
                  },
                ];

                const groupedAchievements = achievements.reduce((acc, item) => {
                  if (!acc[item.type]) acc[item.type] = [];
                  acc[item.type].push(item);
                  return acc;
                }, {} as Record<string, typeof achievements>);

                const typeOrder = ['competitions', 'awards', 'certifications'] as const;
                const typeLabels: Record<string, string> = {
                  competitions: 'Competitions',
                  awards: 'Awards', 
                  certifications: 'Certifications'
                };
                const typeColors: Record<string, string> = {
                  competitions: 'bg-neoYellow-200',
                  awards: 'bg-neoBlue-200',
                  certifications: 'bg-white'
                };

                return typeOrder.map(type => {
                  if (!groupedAchievements[type]) return null;
                  return (
                    <div key={type}>
                      <div className={`inline-block px-3 py-1 mb-3 text-sm font-bold border-2 border-black ${typeColors[type]}`}>
                        {typeLabels[type]}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {groupedAchievements[type].map((item, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            className={`p-4 border-2 border-black ${typeColors[type]}`}
                          >
                            <h4 className="font-bold">{item.name}</h4>
                            <p className="text-sm">{item.issuer} - {item.date}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                }).filter(Boolean);
              })()}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};