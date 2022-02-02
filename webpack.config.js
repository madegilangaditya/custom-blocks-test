const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,
	entry: {
		'services-block': './blocks/services-block',
		'contact-cta': './blocks/contact-cta',
		'contact-form': './blocks/contact-form',
	},
};