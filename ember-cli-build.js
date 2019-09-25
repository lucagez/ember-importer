'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const fs = require('fs');

const CURRENT_PLATFORM = process.env.CURRENT_PLATFORM || 'walmart';

const importModule = (app, features, base) => {
  app.import(`vendor/components/${base}/index.js`);
  features.forEach(feature => {
    app.import(`vendor/components/${base}/${feature}.js`);
  });
}
const importFolder = (app, path) => fs
  .readdirSync(path)
  .forEach(file => app.import(`${path}/${file}`));

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {});

  const { contributions } = require(`./config/${CURRENT_PLATFORM}/table-attrs.json`);
  
  app.import('vendor/index.js');
  app.import('vendor/common.js');
  
  importFolder(app, 'vendor/common');
  importModule(app, contributions, 'contributions');

  return app.toTree();
};
