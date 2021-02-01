const fs = require('fs');

// SITEMAP.XML


const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">


<url>
  <loc>https://jiayispray.netlify.app/</loc>
  <lastmod>2021-01-27T11:45:33+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://jiayispray.netlify.app/home</loc>
  <lastmod>2021-01-27T11:45:33+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://jiayispray.netlify.app/achievedisplay</loc>
  <lastmod>2021-01-27T11:45:33+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://jiayispray.netlify.app/contact</loc>
  <lastmod>2021-01-27T11:45:33+00:00</lastmod>
  <priority>0.80</priority>
</url>


</urlset>`;

fs.writeFile('out_publish/sitemap.xml', sitemapXml, () => {
  console.log('sitemap.xml saved!');
});