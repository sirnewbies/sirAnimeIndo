/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "placehold.co",
            },
            {
                hostname: "cdn.myanimelist.net",
            },
            {
                
                hostname: "i0.wp.com",
            },
            {
                
                hostname: "i3.wp.com",
            },
            {
                hostname: "i1.wp.com",
            },
            {
                hostname: "i2.wp.com",
            },
            {
                hostname: "img.topddl.net"
            },
            {
                hostname: "image.tmdb.org"
            },
            {
                hostname: "m.media-amazon.com"
            },
            {
                hostname: "i.mydramalist.com"
            },
            {
                hostname: "otakudesu.wiki"
            },
            {
                hostname: "otakudesu.cam"
            }
        ]
    }
}

module.exports = nextConfig