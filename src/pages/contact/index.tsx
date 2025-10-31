import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Head from 'next/head';

const ContactPage = () => {
  const socialCards = [
    {
      platform: 'GitHub',
      username: '@ilhamjaya08',
      icon: 'mdi:github',
      stats: '50+ repositories',
      link: 'https://github.com/ilhamjaya08',
      bgColor: '#FFE4E1',
      rotate: -2
    },
    {
      platform: 'Instagram',
      username: '@ilham.j_08',
      icon: 'mdi:instagram',
      stats: '1.2K followers',
      link: 'https://instagram.com/ilham.j_08',
      bgColor: '#E0FFFF',
      rotate: 1
    },
    {
      platform: 'Facebook',
      username: 'Muhammad Ilham Jaya',
      icon: 'mdi:facebook',
      stats: '500+ friends',
      link: 'https://facebook.com/ilhamjaya08',
      bgColor: '#F0FFF0',
      rotate: -1
    },
    {
      platform: 'Twitter/X',
      username: '@ilhamjaya08',
      icon: 'simple-icons:x',
      stats: '800 followers',
      link: 'https://twitter.com/ilhamjaya08',
      bgColor: '#FFF0F5',
      rotate: 2
    },
    {
      platform: 'Threads',
      username: '@ilham.j_08',
      icon: 'ri:threads-fill',
      stats: '300 followers',
      link: 'https://threads.net/ilham.j_08',
      bgColor: '#F0F8FF',
      rotate: -3
    },
    {
      platform: 'Reddit',
      username: 'u/Hamm08_XD',
      icon: 'mdi:reddit',
      stats: '1K karma',
      link: 'https://reddit.com/user/Hamm08_XD',
      bgColor: '#FFE4E6',
      rotate: 1.5
    },
    {
      platform: 'Telegram',
      username: '@ilhamjaya08',
      icon: 'mdi:telegram',
      stats: 'Active',
      link: 'https://t.me/ilhamjaya08',
      bgColor: '#E6E6FA',
      rotate: -1.5
    },
    {
      platform: 'Discord',
      username: 'sebutsajailham',
      icon: 'mdi:discord',
      stats: '73 friends',
      link: 'https://discord.com/users/sebutsajailham',
      bgColor: '#F5F5DC',
      rotate: 2.5
    },
    {
      platform: 'Email',
      username: 'm.ilhamjaya1808@gmail.com',
      icon: 'mdi:email',
      stats: 'Business inquiries',
      link: 'mailto:m.ilhamjaya1808@gmail.com',
      bgColor: '#FFDAB9',
      rotate: -2.5
    }
  ];

  return (
    <>
    <Head>
      <title>Contacts - Muhammad Ilham Jaya</title>
      <meta name="description" content="My contacts" />
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
          className="mt-16 relative bg-white p-8 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#FFD700] rounded-full border-2 border-black"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#FF69B4] rounded-full border-2 border-black"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#98FB98] rounded-full border-2 border-black"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#87CEEB] rounded-full border-2 border-black"></div>

          <h1 className="text-4xl font-bold text-black text-center mb-12">GET IN TOUCH</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {socialCards.map((social, index) => (
              <motion.a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="block p-6 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                style={{ 
                  transform: `rotate(${social.rotate}deg)`,
                  backgroundColor: social.bgColor
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <Icon icon={social.icon} className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{social.platform}</h3>
                  <p className="text-gray-700 mb-2">{social.username}</p>
                  <p className="text-sm text-gray-600">{social.stats}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default ContactPage;
