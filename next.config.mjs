import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,

    async redirects() {
        return [
        {
            source: '/',
            destination: '/introduction',
            permanent: true, // or false if you want it temporary
        },
        ];
    },
};

export default withMDX(config);