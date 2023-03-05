module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true
	},
	extends: "eslint:recommended",
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest"
	},
	rules: {
		"default-case": ["error", "always"],
		"no-unused-vars": ["error", {
			varsIgnorePattern: "^_",
			argsIgnorePattern: "^_",
		}],
		indent: ["error", "tab", {
			ignoreComments: true,
			switchCase: false
		}],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"]
	}
}
