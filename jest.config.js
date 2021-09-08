/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	globals: {
		'ts-jest': {
			// using a custom tsconfig file
			tsconfig: 'tsconfig.jest.json',
		},
	},
	setupFilesAfterEnv: [
		// '@testing-library/react/cleanup-after-each',
		// '@testing-library/jest-dom/extend-expect',
	],
};
