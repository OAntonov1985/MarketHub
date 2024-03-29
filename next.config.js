/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["markethub-mfbw.onrender.com", "storage.googleapis.com", "brain.com.ua", "netlify.com", "markethubstore.netlify.app"],
    },
};

module.exports = nextConfig;
