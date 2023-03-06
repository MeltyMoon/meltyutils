const { writeFileSync } = require("fs"),
	_package = require("../package.json"),
	{ resolve } = require("path");

let package = _package,
	numbers = package.version.split(".").map(n => Number(n)).reverse();

if (numbers[0] === 9) {
	numbers[0] = 0;
	if (numbers[1] === 9) {
		numbers[1] = 0;
		numbers[2] = numbers[2] + 1;
	} else {
		numbers[1] = numbers[1] + 1;
	}
} else {
	numbers[0] = numbers[0] + 1;
}

package.version = numbers.reverse().join(".");

writeFileSync(resolve(__dirname, "../package.json"), JSON.stringify({ ...package }), { encoding: "utf-8" });