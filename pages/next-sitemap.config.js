/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || '<https://ilarischmidt.com>',
  generateRobotsTxt: true, // optional
  // other configurations...
}