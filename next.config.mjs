/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        'media.istockphoto.com',    // Add this domain
        'bumblebeebabywear.com',   // Add other domains you use
        'encrypted-tbn1.gstatic.com',
        'm.media-amazon.com',
        'rukminim2.flixcart.com',
         'example.com'
      ],
    },
  }
  
  export default nextConfig;
  
  
  