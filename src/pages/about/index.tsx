import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Head from 'next/head';

const AboutPage = () => {
  const aboutCards = [
    { title: 'Background', icon: 'carbon:user-profile', description: "Hi there! I'm a passionate software developer who loves creating beautiful and functional web applications.", rotate: -2, bgColor: '#FFE4E1' },
    { title: 'Interests', icon: 'carbon:star', description: "With a strong foundation in modern web technologies and a keen eye for design, I strive to build experiences that are both user-friendly and visually appealing.", rotate: 2, bgColor: '#E0FFFF' },
    { title: 'Values', icon: 'carbon:heart', description: "When I'm not coding, you can find me exploring new technologies and contributing to open-source projects.", rotate: -1, bgColor: '#F0FFF0' },
    { title: 'Goals', icon: 'carbon:target', description: "I believe in continuous learning and pushing the boundaries of what's possible in web development.", rotate: 1, bgColor: '#FFF0F5' },
  ];

  const educationData = [
    {
      title: "Junior High School",
      institution: "SMP Budi Utomo Surakarta",
      period: "2010 - 2023",
      logo: "https://i.ibb.co.com/JkKBH8j/download-removebg-preview-2.png",
      bgColor: "#FFE4E1",
      dotColor: "#FFD700",
      position: "right"
    },
    {
      title: "Vocational High School - Software Engineering",
      institution: "SMK Negeri 5 Surakarta",
      period: "2023 - Now",
      logo: "https://i.ibb.co.com/dtkx0Cf/download-removebg-preview-1.png",
      bgColor: "#E0FFFF",
      dotColor: "#98FB98",
      position: "left"
    },
    {
      title: "Self Learning",
      institution: "Everywhere",
      period: "Whenever",
      logo: "https://i.ibb.co.com/WpPN7gM/download-removebg-preview-3.png",
      bgColor: "#F0FFF0",
      dotColor: "#FF69B4",
      position: "right"
    }
  ];

  return (
    <>
    <Head>
      <title>About - Ilh4m</title>
      <meta name="description" content="About me" />
    </Head>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#E5E5FF] py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 relative bg-white p-8 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-12"
        >
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#FFD700] rounded-full border-2 border-black"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#FF69B4] rounded-full border-2 border-black"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#98FB98] rounded-full border-2 border-black"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#87CEEB] rounded-full border-2 border-black"></div>

          <h1 className="text-4xl font-bold text-black text-center mb-8">ABOUT ME</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="p-6 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                style={{ transform: `rotate(${card.rotate}deg)`, backgroundColor: card.bgColor }}
              >
                <div className="flex flex-col items-center text-center">
                  <Icon icon={card.icon} className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-700">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Where I Live</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/3">
              <img 
                src="https://i.ibb.co.com/ysVJmFr/niels-baars-Qn-Jjj-QSUHk-U-unsplash.jpg"
                alt="Karanganyar City"
                className="w-full h-auto rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-lg text-gray-700 mb-4">
                I'm based in Karanganyar, Central Java, Indonesia - a vibrant metropolis known for its dynamic tech scene and rapid development. 
                Living in the heart living here provides me with endless opportunities to connect with 
                fellow developers and stay at the forefront of technological innovation.
              </p>
              <p className="text-lg text-gray-700">
                The city's fast-paced environment and growing startup ecosystem have been instrumental in shaping my 
                career and keeping me motivated to create impactful solutions through technology.
              </p>
            </div>
          </div>        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black"></div>
            
            <div className="flex flex-col gap-8">
              {educationData.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ x: edu.position === 'right' ? -100 : 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className={`relative w-1/2 ${edu.position === 'right' ? 'pr-8 ml-auto' : 'pl-8'}`}
                >
                  <div className={`absolute ${edu.position === 'right' ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[${edu.dotColor}] rounded-full border-2 border-black`}></div>
                  <div className={`bg-[${edu.bgColor}] p-4 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                    <div className="flex items-center gap-4">
                      <img src={edu.logo} alt={`${edu.institution} Logo`} className="w-12 h-12 object-contain" />
                      <div>
                        <h3 className="font-bold text-lg">{edu.title}</h3>
                        <p className="text-gray-700">{edu.institution}</p>
                        <p className="text-sm text-gray-600">{edu.period}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>    
      </motion.div>
      </>
  );
};

export default AboutPage;