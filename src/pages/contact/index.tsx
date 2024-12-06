import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const ContactPage = () => {
  const socialCards = [
    {
      platform: 'GitHub',
      username: '@yourusername',
      icon: 'mdi:github',
      stats: '50+ repositories',
      link: 'https://github.com/yourusername',
      bgColor: '#FFE4E1',
      rotate: -2
    },
    {
      platform: 'Instagram',
      username: '@yourusername',
      icon: 'mdi:instagram',
      stats: '1.2K followers',
      link: 'https://instagram.com/yourusername',
      bgColor: '#E0FFFF',
      rotate: 1
    },
    {
      platform: 'Facebook',
      username: 'Your Name',
      icon: 'mdi:facebook',
      stats: '500+ friends',
      link: 'https://facebook.com/yourusername',
      bgColor: '#F0FFF0',
      rotate: -1
    },
    {
      platform: 'Twitter/X',
      username: '@yourusername',
      icon: 'simple-icons:x',
      stats: '800 followers',
      link: 'https://twitter.com/yourusername',
      bgColor: '#FFF0F5',
      rotate: 2
    },
    {
      platform: 'Threads',
      username: '@yourusername',
      icon: 'ri:threads-fill',
      stats: '300 followers',
      link: 'https://threads.net/yourusername',
      bgColor: '#F0F8FF',
      rotate: -3
    },
    {
      platform: 'Reddit',
      username: 'u/yourusername',
      icon: 'mdi:reddit',
      stats: '1K karma',
      link: 'https://reddit.com/user/yourusername',
      bgColor: '#FFE4E6',
      rotate: 1.5
    },
    {
      platform: 'Telegram',
      username: '@yourusername',
      icon: 'mdi:telegram',
      stats: 'Active',
      link: 'https://t.me/yourusername',
      bgColor: '#E6E6FA',
      rotate: -1.5
    },
    {
      platform: 'Discord',
      username: 'username#0000',
      icon: 'mdi:discord',
      stats: '5 servers',
      link: 'https://discord.com/users/yourid',
      bgColor: '#F5F5DC',
      rotate: 2.5
    },
    {
      platform: 'Email',
      username: 'your@email.com',
      icon: 'mdi:email',
      stats: 'Business inquiries',
      link: 'mailto:your@email.com',
      bgColor: '#FFDAB9',
      rotate: -2.5
    }
  ];

  return (
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
  );
};

export default ContactPage;
