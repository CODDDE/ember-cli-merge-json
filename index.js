/* eslint-env node */
'use strict';

const MergeTrees = require('broccoli-merge-trees');
const MergeJSON = require('broccoli-merge-json');

module.exports = {
  name: 'ember-cli-merge-json',
  
  included(app){
    this._super.included.apply(this, arguments);
    
    const defaults = require('lodash.defaultsdeep');
    let defaultOptions = {
      enabled: true,
      srcDir: '/jsons',
      destDir: '/assets/jsons'
    };
    
    this._options = defaults(app.options['ember-cli-merge-json'] || {}, defaultOptions);
  },

  treeForPublic(tree) {
    if (this._options.enabled === true) {
      const jsons = new MergeJSON(this.app.project.root, this._options);
      return tree ? new MergeTrees([tree, jsons]) : jsons;
    } else {
      return tree;
    }
  },
  
};
