var loaderUtils = require("loader-utils");

module.exports = function(source) {
  var query = loaderUtils.parseQuery(this.query);
  var id = query.id || '';

  if (this.cacheable) {
    this.cacheable();
  }

  console.log('--- START', id);
  console.log(source);
  console.log('--- END', id);

  return source;
};
