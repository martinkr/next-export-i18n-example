module.exports = {
	reactStrictMode: true,

	webpack: function (config, { isServer }) {
		config.experiments = { topLevelAwait: true };
		// Fixes npm packages that depend on `fs` module
		// if (!isServer) {
		// 	config.resolve.fallback = { fs: false };
		// }
		config.module.rules.push(
			// {
			// test: /\.ya?ml$/,
			// use: 'yaml-loader',
			// type: 'json'
			// }
			// {
			// 	test: /\.ya?ml$/,
			// 	type: 'javascript/dynamic', // only for webpack 4+
			// 	use: [
			// 		{ loader: 'json-import-loader' },
			// 		{ loader: 'json-loader' },
			// 		{ loader: 'yaml-loader' },
			// 	],
			// },
		);



		return config;
	},
};
