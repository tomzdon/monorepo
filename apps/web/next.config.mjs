import path from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@repo/ui'],
    webpack(config) {
        const __dirname = path.dirname(fileURLToPath(import.meta.url));
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            '@repo/ui': path.resolve(__dirname, '../../packages/ui')
        };

        return config;
    },
};

export default nextConfig;
