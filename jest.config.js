module.exports = {
	globals: {
		'ts-jest': {
			tsConfigFile: 'tsconfig.json'
		}
	},
	moduleFileExtensions: [
		'ts',
		'js'
	],
	transform: {
		'^.+\\.ts$': './node_modules/ts-jest/preprocessor.js'
	},
	testMatch: [
		'**/test/**/*.test.(ts|js)'
	],
	testEnvironment: 'node',
	collectCoverageFrom: [
		'src/**/*.ts',
		'!src/index.ts',
		'!src/common/interfaces/index.ts',
		'!src/common/types/index.ts',
	]
};
