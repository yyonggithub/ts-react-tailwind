const path = require('path')
module.exports = {
  require: [path.join(__dirname, 'src/index.css')],
  assetsDir: path.join(__dirname, 'public'),
}