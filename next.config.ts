import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Social redirects
      {
        source: '/github',
        destination: 'https://github.com/pe3ep',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://x.com/pe3epwithyou',
        permanent: true,
      },
      {
        source: '/x',
        destination: 'https://x.com/pe3epwithyou',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/pe3epwithyou/',
        permanent: true,
      },
      {
        source: '/inst',
        destination: 'https://www.instagram.com/pe3epwithyou/',
        permanent: true,
      },
      {
        source: '/twitch',
        destination: 'https://twitch.tv/pe3epwithyou',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
