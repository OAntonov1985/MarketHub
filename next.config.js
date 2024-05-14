/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            { hostname: "markethub-mfbw.onrender.com" },
            { hostname: "storage.googleapis.com" },
            { hostname: "brain.com.ua" },
            { hostname: "netlify.com" },
            { hostname: "firebasestorage.googleapis.com" }
        ]
        // domains: ["markethub-mfbw.onrender.com", "storage.googleapis.com", "brain.com.ua", "netlify.com", "markethubstore.netlify.app", "firebasestorage.googleapis.com"],
    },

};

module.exports = nextConfig;
