// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://twoshotfilms.com';

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/servicios`, lastModified: new Date() },
    { url: `${baseUrl}/servicios/eventos`, lastModified: new Date() },
    { url: `${baseUrl}/servicios/videoclip`, lastModified: new Date() },
    { url: `${baseUrl}/portfolio`, lastModified: new Date() },
    // NO incluyas aquí las páginas que tienen 'noindex'
  ];
}