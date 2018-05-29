const base = require('../data/base');
const svMap = {};
[require('swedish-css-properties'), require('swedish-css-values')].forEach(data =>
  Object.entries(data).forEach(([en, sv]) => svMap[en] = sv),
);
const swedish = {};
Object.entries(base).forEach(([kind, map]) => {
  swedish[kind] = Object.keys(map).reduce((acc, key) => ((acc[key] = svMap[key] || ''), acc), {});
});

process.stdout.write(JSON.stringify(swedish, null, 2));
