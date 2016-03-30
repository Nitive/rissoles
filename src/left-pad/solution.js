function lPad(text, length, fill) {
	if (text.length >= length) {
		return text
	}
	return lPad(text + fill, length, fill);
}

export default function leftPad(text, length, fill = ' ') {
	return lPad(text.toString(), length, fill.toString())
}
