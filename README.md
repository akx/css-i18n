css-i18n
========

Mappings of CSS properties, keywords and colors to various languages!

It's silly!

Adding a new language
---------------------

* Copy `data/base.json` to `data/XX.json`, where XX should preferably be
  an [IETF language tag][ietf], but because this is silly,
  I won't mind `pirate.json` or `fi-turku.json`, for instance.
* Translate the things!
* Make a pull request!

Updating base data
------------------

The base data is from [mdn/data](https://github.com/mdn/data).
Use `make` (or `node scripts/generate-base.js`) to generate new base data.

TODO: Updating translations when the base data is updated.

[ietf]: https://en.wikipedia.org/wiki/IETF_language_tag
