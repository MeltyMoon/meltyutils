const { writeFileSync, readFileSync } = require("fs"),
	{ resolve } = require("path"),
	{ version } = require("../package.json"),
	sri = require("node-sri");

let data = readFileSync(resolve(__dirname, "./readme-base.md")).toString("utf-8");
data = data.replace(/\$VERSION/g, version);
sri.hash({
	file: resolve(__dirname, "../dist/meltyutils.js"),
	algo: "sha384"
}, (err, hash) => {
	if (err) {
		throw err;
	}

	data = data.replace(/\$INTEGRITY/g, hash);
	writeFileSync(resolve(__dirname, "../README.md"), data);
});