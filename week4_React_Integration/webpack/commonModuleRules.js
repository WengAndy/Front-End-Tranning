// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const jsRules = {
//   // use: 'babel-loader',
//   test: /\.js$/,
//   exclude: /node_modules/,
//   use: [
//     'babel-loader',
//     // 'eslint-loader',
//   ],
// };
const path = require('path');

const jsRules = (useEslint = false) => {
  let use = ['babel-loader'];
  if (useEslint) {
    use = [...use, 'eslint-loader'];
  }
  return {
    use,
    test: /\.js$/,
    exclude: /node_modules/
  };
};

const cssRules = {
  // postcss-loader幫CSS加前綴 css-loader讓webpack 可以讀css內容，style-loader把css加樣式
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      options: {
        importLoaders: true
      }
    }
    // { loader: 'postcss-loader' },
  ]
};

const scssRules = {
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'resolve-url-loader',
    'sass-loader',
  ],
};

const imageRules = {
  test: /\.(jpe?g|png|gif|svg|jpg)$/,
  loader: 'url-loader',
  options: {
    limit: 1000, // 單位：byte  40k以下都會被編成base64，以上就變成檔案
    name: 'img/[name].[ext]' // img/[name].[ext]
  },
  exclude: [
    path.resolve(__dirname, '../src/static/icons/open-iconic')
  ]
};

const svgIconRules = {
  test: /\.(svg)$/,
  use: [
    {
      loader: 'svg-inline-loader'
    }
  ],
  include: [
    path.resolve(__dirname, '../src/static/icons/open-iconic')
  ]
};


const fontRules = {
  test: /\.(woff|woff2|ttf|eot)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        limit: 40000, // 單位：byte  40k以下都會被編成base64，以上就變成檔案
        name: 'fonts/[hash].[ext]'
      }
    }
  ]
};

// // 方法二：使用ExtractTextPlugin分離css檔案
// {
//  test: /\.s?css/,
//  loader: ExtractTextPlugin.extract({
//    fallbackLoader: 'style-loader',
//    loader: ['css-loader', 'postcss-loader']
//  })
// },

const csvRules = {
  test: /\.csv/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 0, // 單位：byte  0k以下都會被編成base64，以上就變成檔案
        name: 'csv/[hash].[ext]'
      }
    }
  ]
};

const rawLoaderRules = {
  test: /\.html$/,
  use: [
    {
      loader: 'raw-loader'
    }
  ],
};

module.exports = {
  jsRules, cssRules, scssRules, imageRules, fontRules, csvRules, svgIconRules, rawLoaderRules
};
