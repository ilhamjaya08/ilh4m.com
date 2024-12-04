/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://ilham.live', 
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000, 
    exclude: ['/api/*'], 
    robotsTxtOptions: {
        policies: [
        {
            userAgent: '*',
            allow: '/',
        },
        {
            userAgent: '*',
            disallow: ['/api'], 
        },
        ],
        additionalSitemaps: [
        'https://ilham.live/sitemap-1.xml', 
        ],
    },
};

export default config;