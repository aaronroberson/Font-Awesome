// package metadata file for Meteor.js
var packageName = 'aaronroberson:fontawesome-scss';
var where = 'client';
var version = '4.4.0';
var summary = '500+ scalable, retina friendly and customizable vector icons and scss files.';
var gitLink = 'https://github.com/aaronroberson/Font-Awesome';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

  api.addAssets([
  	// We bundle all font files, but the client will request only one of them via the CSS @font-face rule
    'fonts/fontawesome-webfont.eot',   // IE8 or older only understands EOT. IE9+ will read it too because it loads the first occurrence of `src`
    'fonts/fontawesome-webfont.svg',   // SVG fallback for iOS < 5 - http://caniuse.com/#feat=svg-fonts, http://stackoverflow.com/a/11002874/1269037
    'fonts/fontawesome-webfont.ttf',   // Android Browers 4.1, 4.3 - http://caniuse.com/#feat=ttf
    'fonts/fontawesome-webfont.woff',  // Most modern browsers
    'fonts/fontawesome-webfont.woff2', // Chrome 36+, Opera 23+; improves compression
    'fonts/FontAwesome.otf'
  ], where);

  api.addFiles([
  	'scss/_animated.scss',
  	'scss/_bordered-pulled.scss',
  	'scss/_core.scss',
  	'scss/_fixed_width.scss',
  	'scss/_icons.scss',
  	'scss/_larger.scss',
  	'scss/_list.scss',
  	'scss/_mixins.scss',
  	'scss/_path.scss',
  	'scss/_rotated-flipped.scss',
  	'scss/_stacked.scss',
  	'scss/_variables.scss',
  	'scss/font-awesome.scss'
  ], where);
});
