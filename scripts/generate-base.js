function sortedMapFrom(arraylike, value='') {
	const map = {};
	Array.from(arraylike).sort().forEach((key) => {
		map[key] = value;
	});
	return map;
}

function extractKeywordsFromSyntax(syntax) {
	syntax = syntax.replace(/<.+?>/g, '');  // remove placeholders
	const words = new Set();
	const wordRe = /[a-z-]+/gi;
	let match;
	while ((match = wordRe.exec(syntax)) !== null) {
		words.add(match[0]);
	}
	return words;
}


const properties = new Set();
const syntaxWords = new Set();
const colors = new Set(Object.keys(require('css-color-keywords')));

Object.entries(require('mdn-data/css/properties')).forEach(([property, info]) => {
	if(['experimental', 'nonstandard', 'obsolete'].includes(info.status)) {
		return;
	}
	properties.add(property);
	extractKeywordsFromSyntax(info.syntax).forEach((word) => {
		syntaxWords.add(word);
	});
});

const data = {
	properties: sortedMapFrom(properties),
	keywords: sortedMapFrom(syntaxWords),
	colors: sortedMapFrom(colors),
};

process.stdout.write(JSON.stringify(data, null, 2));
