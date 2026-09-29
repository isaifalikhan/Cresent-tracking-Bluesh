/** @type {import('next-sitemap').IConfig} */
const privatePaths = ["/admin", "/admin/*", "/dashboard", "/dashboard/*", "/login", "/tracking", "/tracking/*"];

module.exports = {
  siteUrl: process.env.SITE_URL || "https://crescenttracking.com",
  generateRobotsTxt: true,
  exclude: ["/api/*", "/opengraph-image*", "/twitter-image*", ...privatePaths],
  transform: async (config, path) => {
    // Give the homepage, service pages and city pages higher priority than legal/utility pages.
    let priority = config.priority;
    if (path === "/") priority = 1.0;
    else if (/^\/(car-tracker|vehicle-tracking|bike-tracking|fleet-management|packages|contact)/.test(path)) priority = 0.9;
    else if (/^\/(privacy|privacy-policy|terms|quick-links)$/.test(path)) priority = 0.3;
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin", "/dashboard", "/login"] },
    ],
  },
};
