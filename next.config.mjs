/** @type {import('next').NextConfig} */
const nextConfig = {

    // reactStrictMode: false,
    // // experimental: {
    // //     serverActions: true,
    // //     outputStandalone: false,
    // // },
    // output: 'standalone',
    
    async redirects() {
        return [
            {
                source: '/',
                destination: '/login',
                permanent: true,
            },
        ];
    },

    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 's3-alpha-sig.figma.com',
    //             pathname: '**'
    //         }
    //     ]
    // }
};

export default nextConfig;
