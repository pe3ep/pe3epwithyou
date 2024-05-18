/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => {
    return [
      {
        source: '/twitch',
        destination: 'https://twitch.tv/pe3epwithyou',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/pe3ep',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/pe3epwithyou',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/EDvz4zs3g2',
        permanent: true,
      },
      {
        source: '/telegram',
        destination: 'https://t.me/pe3epwithyou',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
