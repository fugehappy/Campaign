//  在根目录添加一个  vue.config.js  文件
//   重启项目

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  //以下配置的效果
  //   “/api/getok.php”  -->   http://122.51.238.153/getok.php
  // 修改的配置\
  devServer: {
    proxy: {
      //如果地址以/api开头，它就会请求到 http://122.51.238.153 
      '/api': {
        target: 'https://infinixmob.mez100.com.cn/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '',   //重写请求路径
        },
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  filenameHashing: false,
  productionSourceMap: false,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    home: 'src/pages/home.js',
    gallery: 'src/pages/gallery.js',
    detail: 'src/pages/detail.js',
    form: 'src/pages/form.js',
    // catalog_list: {
    //   template: 'public/catalog_list.html',
    //   entry: 'src/pages/category_list.js'
    // },
  }
}