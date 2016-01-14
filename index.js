var loaderUtils = require("loader-utils");

module.exports = function(source) {
  var query = loaderUtils.parseQuery(this.query);

  if (this.cacheable) {
    this.cacheable();
  }

  if (query.source !== undefined) {
    console.log('--- START', query.source);
    console.log(source);
    console.log('--- END', query.source);
  }

  if (query.time !== undefined) {
    
  }

  return source;
};
