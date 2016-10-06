
module.exports = {
  /*
    book: {
        assets: './assets',
        js: [
            'theme-api.js'
        ],
        css: [
            'theme-api.css'
        ]
    },
  */
  /*
    blocks: {
        method: {
            blocks: ['sample', 'common'],
            process: function(blk) {
                var examples = [];

                _.each(blk.blocks, function(_blk) {
                    var languageName;

                    // Search if is user-defined language
                    if (_blk.name == 'sample') {
                        // Sample blocks should have a lang argument
                        if (!_blk.kwargs.lang) {
                            throw Error('sample blocks must provide a "lang" argument');
                        }

                        var language = _.find(configLanguages, { lang: _blk.kwargs.lang });

                        if (!!language) {
                            languageName = language.name;
                        } else {
                            // Default to upper-cased lang
                            languageName = _blk.kwargs.lang.toUpperCase();
                        }
                    }

                    examples.push({
                        type: _blk.name,
                        body: _blk.body.trim(),
                        lang: _blk.kwargs.lang,
                        name: languageName
                    });
                });

                return {
                    parse: true,
                    body: generateMethod(this, blk.body.trim(), examples)
                };
            }
        }
    },
  */
    hooks: {
        config: function(config) {
        /*
            // Merge user configured languages with default languages
            configLanguages = _.unionBy(config.pluginsConfig['theme-api'].languages, DEFAULT_LANGUAGES, 'lang');
        */
            return config;
        }
    }
};
