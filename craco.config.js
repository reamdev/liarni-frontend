// const { resolve } = require('path')
// const { pathsToModuleNameMapper } = require('ts-jest')
// const { compilerOptions } = require('./tsconfig.json')
const CracoAlias = require('craco-alias')

module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: 'tsconfig',
				baseUrl: './src',
				tsConfigPath: './tsconfig.json'
			}
		}
	]
}