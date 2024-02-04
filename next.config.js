/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['i.imgur.com', 'placeimg.com', "markethub-mfbw.onrender.com", "fakestoreapi.com", "cdn.dummyjson.com"],
    },
};

module.exports = nextConfig;
