/** @type {import('next').NextConfig} */
const nextConfig = {
	exportTrailingSlash: true,
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: ''
			}
		]
	}
}

module.exports = nextConfig
