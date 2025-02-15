Package.describe({
  name: 'silentcicero:meteor-pocketbook',
  summary: 'A Mini-Wallet for Meteor dApps',
  version: '0.0.6',
  git: 'http://github.com/SilentCicero/meteor-pocketbook'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use('underscore', 'client');
  api.use('jquery', 'client');
  api.use('templating', 'client');
  api.use('reactive-var', 'client');
  api.use('less', 'client');  
  api.use('standard-minifiers', 'client');

  api.use('alexvandesande:identicon@1.0.1', 'client');
  api.use('3stack:bignumber@2.0.0', 'client');
  // api.use('underscorestring:underscore.string@3.1.1', 'client');

  api.use('silentcicero:ethereumjs-accounts@0.0.12', 'client');
  api.use('ethereum:web3@0.12.2', 'client');
  api.use('ethereum:elements@0.5.3', 'client');
  api.imply('ethereum:elements@0.5.3', 'client');
  api.use('frozeman:storage@0.1.8', 'client');
  api.use('frozeman:template-var@1.1.1', 'client');
  api.imply('frozeman:template-var@1.1.1', 'client');

  api.export(['PocketBook'], 'client');

  api.addFiles('lib/pocketbookConfig.js', 'client');
  api.addFiles('pocketbook.less', 'client');
  api.addFiles('pocketbook.html', 'client');
  api.addFiles('pocketbook.js', 'client');
  api.addFiles('toName.html', 'client');
  api.addFiles('toName.js', 'client');
});