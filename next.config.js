/** @type {import('next').NextConfig} */

const setEnvVars = () => {
	const returnObj = {};
	['API_DOMAIN'].forEach((key) => {
		returnObj[key] = process.env[key];
	});
	return returnObj;
};

const nextConfig = {
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
	env: setEnvVars(),
	poweredByHeader: false,
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: 'http://localhost:19006' }, // replace this your actual origin
					{ key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
					{
						key: 'Access-Control-Allow-Headers',
						value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
					},
					{ key: 'Referrer-Policy', value: 'same-origin' },
					{ key: 'X-Frame-Options', value: 'deny' },
					{ key: 'X-Xss-Protection', value: '1; mode=block' },
				],
			},
		];
	},
};

module.exports = nextConfig;
