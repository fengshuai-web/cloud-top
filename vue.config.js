const path = require("path"); //引入path模块

function resolve(dir) {
  return path.join(__dirname, dir);
}

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  pages: {
    index: {
      // 页面入口
      entry: "examples/main.js",
      // 模板来源
      template: "public/index.html",
      // 输出文件名
      filename: "index.html"
    }
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#1890FF",
          // "primary-color": "#9867f7",
          "layout-color": "#9867f7"
          // "layout-color": "#ee88aa"
        },
        javascriptEnabled: true
      }
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("./packages")
      }
    },
    devtool: isDev ? "source-map" : false
  }
};
