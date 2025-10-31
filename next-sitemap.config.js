/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://ilh4m.com', 
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
        'https://ilh4m.com/sitemap-1.xml', 
        ],
    },
};

export default config;