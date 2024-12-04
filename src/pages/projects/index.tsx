import { motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { DM_Sans } from "next/font/google";
import Head from "next/head";

const dmsans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '900']
});

const projects = [
  {
    title: "E-Commerce Platform",
    image: "https://picsum.photos/400/300",
    description: "A full-stack e-commerce platform built with Next.js and Stripe integration",
    tech: ["React", "Next.js", "Stripe", "TailwindCSS"],
    githubUrl: "https://github.com/username/project",
    liveUrl: "https://project-demo.com",
    type: "Web Application",
    year: 2023
  },
  {
    title: "AI Image Generator",
    image: "https://picsum.photos/400/310",
    description: "AI-powered image generation tool using DALL-E API",
    tech: ["Python", "FastAPI", "OpenAI", "React"],
    githubUrl: "https://github.com/username/project11",
    liveUrl: "https://project11-demo.com",
    type: "AI Application",
    year: 2023
  },
  {
    title: "Blockchain Wallet",
    image: "https://picsum.photos/400/311",
    description: "Cryptocurrency wallet with multiple chain support",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"],
    githubUrl: "https://github.com/username/project12",
    type: "Blockchain",
    year: 2022
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const types = ["All", ...new Set(projects.map(project => project.type))];

  const filteredProjects = projects
    .filter(project => 
      (filter === "All" || project.type === filter) &&
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      if (sortBy === "newest") return b.year - a.year;
      return a.year - b.year;
    });

  return (
    <>
      <Head>
        <title>Projects - Ilham.live</title>
        <meta name="description" content="Browse through my portfolio of projects" />
      </Head>
      <div className={`${dmsans.className} min-h-screen bg-[#ffba79] py-20`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto px-8"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-10 max-w-7xl mx-auto p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <motion.h1 
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="text-5xl font-black mb-8 uppercase border-b-4 border-black pb-4"
            >
              Project Gallery
            </motion.h1>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex-1"
              >
                <input
                  type="text"
                  placeholder="Search projects..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 border-4 border-black focus:outline-none"
                />
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex gap-4"
              >
                <select
                  onChange={(e) => setFilter(e.target.value)}
                  className="p-3 border-4 border-black bg-white"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>

                <select
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-3 border-4 border-black bg-white"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-[#FFE4E1] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover border-b-4 border-black"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-sm bg-black text-white px-2 py-1">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-white px-3 py-1 text-sm border-2 border-black"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-black text-white px-3 py-1.5 text-sm hover:bg-gray-800 transition-colors"
                      >
                        <Icon icon="mdi:github" className="w-4 h-4" />
                        GitHub
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 bg-[#4CAF50] text-white px-3 py-1.5 text-sm hover:bg-[#45a049] transition-colors"
                        >
                          <Icon icon="mdi:web" className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
