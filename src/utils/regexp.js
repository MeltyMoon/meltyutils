const isBooleanString = /^(t(rue)?|f(alse)?|y(es)?|n(o)?|0|1)$/i,
	booleanStringIsTrue = /^(t(rue)?|y(es)?|1)$/i,
	booleanStringIsFalse = /^(f(alse)?|n(o)?|0)$/i,
	sentenceSplitString = /\.(?=(\s|$))/g;

export {
	isBooleanString,
	booleanStringIsFalse,
	booleanStringIsTrue,
	sentenceSplitString
}

export default class RegExpUtils {
	
}