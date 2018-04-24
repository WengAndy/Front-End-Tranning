const path = require('path');

// 當前目錄： path.resolve(__dirname) || script跑的地方： path.resolve('./src')
module.exports = {
  // 要對哪些資料夾進行resolve，感覺不加也不會壞
  modules: [
    path.resolve(__dirname, '../src'),
    'node_modules'
  ],
  alias: {
    components: path.resolve(__dirname, 'src/components'),
    containers: path.resolve(__dirname, 'src/containers/'),
    // static: path.resolve(__dirname, 'src/static/'),
    // theme: path.resolve(__dirname, 'src/theme/'),
  },
  extensions: [
    '.js',
    '.jsx'
  ]
};
