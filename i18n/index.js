
// import de from 'js-yaml-loader!./translations.de.yaml';
// import en from 'js-yaml-loader!./translations.en.yaml';

var en = require('./translations.en.json');
var de = require('./translations.de.json')

const i18n = {
	translations: {
		en: en.i18n,
		de: de.i18n,
	},
	defaultLang: 'de'
}

module.exports = i18n;