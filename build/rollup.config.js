const { resolve } = require("node:path"),
	{ babel } = require("@rollup/plugin-babel"),
	{ nodeResolve } = require("@rollup/plugin-node-resolve");

const ESM = process.env.ESM === "true";

let fileDestination = `meltyutils${ESM ? ".esm" : ""}`;
const plugins = [
	babel({
		exclude: "node_modules/**",
		babelHelpers: "bundled"
	})
];

const rollupConfig = {
	input: resolve(__dirname, `../src/index.${ESM ? "esm" : "umd"}.js`),
	output: {
		file: resolve(__dirname, `../dist/${fileDestination}.js`),
		format: ESM ? "esm" : "umd",
		generatedCode: "es2015"
	},
	plugins
}

if (!ESM) {
	rollupConfig.output.name = "meltyutils";
}

module.exports = rollupConfig;