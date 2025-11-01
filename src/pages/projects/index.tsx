import { motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { DM_Sans } from "next/font/google";
import Head from "next/head";
import projectsData from "@/lib/data/projects.json";

const dmsans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '900']
});

interface Project {
  title: string;
  image: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  type: string;
  year: number;
}

const projects: Project[] = projectsData;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  // Get unique types from projects data
  const types = ["All", ...Array.from(new Set(projects.map(p => p.type)))];

  const filteredProjects = projects
    .filter(project =>
      (activeCategory === "All" || project.type === activeCategory) &&
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      if (sortBy === "newest") return b.year - a.year;
      return a.year - b.year;
    });

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => ({ ...prev, [imageUrl]: true }));
  };

  return (
    <>
      <Head>
        <title>Projects - Muhammad Ilham Jaya</title>
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

            <div className="flex flex-col gap-4 mb-8">
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
                className="flex flex-wrap gap-2"
              >
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveCategory(type)}
                    className={`px-6 py-2 border-4 border-black transition-colors ${
                      activeCategory === type
                        ? "bg-black text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </motion.div>

              <motion.div className="flex justify-end">
                <select
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-3 border-4 border-black bg-white"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </motion.div>
            </div>

            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <h3 className="text-2xl font-bold mb-2">Oops. 404 Not Found.</h3>
                <p className="text-gray-600">There are no projects here</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={`${project.githubUrl}-${index}`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-[#FFE4E1] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <div className="relative w-full h-48 border-b-4 border-black">
                      {!loadedImages[project.image] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                          <span className="text-gray-600 font-bold text-lg">Loading...</span>
                        </div>
                      )}
                      <img
                        src={project.image}
                        alt={project.title}
                        onLoad={() => handleImageLoad(project.image)}
                        className={`w-full h-48 object-cover ${
                          loadedImages[project.image] ? 'opacity-100' : 'opacity-0'
                        } transition-opacity duration-300`}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <span className="text-sm bg-black text-white px-2 py-1">
                          {project.year}
                        </span>
                      </div>
                      <span className="inline-block mb-2 text-sm bg-gray-200 px-2 py-1 border-2 border-black">
                        {project.type}
                      </span>
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
            )}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}