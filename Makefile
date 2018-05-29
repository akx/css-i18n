data/base.json: node_modules
	node scripts/generate-base.js > data/base.json

node_modules:
	yarn