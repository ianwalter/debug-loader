const loaderUtils = require('loader-utils')
const { print } = require('@ianwalter/print')

module.exports = function (source) {
  let id = this._module.rawRequest
  if (this.query) {
    id = loaderUtils.parseQuery(this.query).id
  }

  if (this.cacheable) {
    this.cacheable()
  }

  if (source) {
    console.log('')
    print.log('🏁', 'START', id, '\n')
    print.log(false, source, '\n')
    print.log('🏁', 'END', id)
    console.log('')
  } else {
    print.error('Empty source!', source)
  }

  return source
}
