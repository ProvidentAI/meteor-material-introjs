Package.describe({
  summary: "Introjs for Meteor",
  version: "0.1.0",
  git: "https://github.com/zhouzhuojie/meteor-introjs.git",
  name: "rexzh0u:introjs"
});

Package.onUse(function (api) {
  api.add_files('./lib/intro.js/minified/intro.min.js', 'client');
  api.add_files('./lib/intro.js/minified/introjs.min.css', 'client');
  api.add_files('./lib/main.js', 'client');
  api.export('introJs', 'client');
});

Package.onTest(function (api) {
  api.use(['rexzh0u:introjs', 'tinytest'], ['client']);
  api.add_files('test.js', ['client']);
});
