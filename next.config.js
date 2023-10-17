/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['fmenew.sgp1.cdn.digitaloceanspaces.com', 'themoviedb.org', 'core.flairmyevent.com', 'storage.flairmyevent.com'],
    },
}

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

module.exports = withPWA({
    reactStrictMode: true,
});

module.exports = nextConfig
