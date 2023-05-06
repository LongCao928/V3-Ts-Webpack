const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: './',
  // outputDir: 'dist',
  // assetsDir: 'static',
  // 是否开启 eslint 自动校验
  lintOnSave: true,
  // 不输出 map 文件，以加速生产环境构建
  productionSourceMap: false,
  devServer: {
    // devMiddleware: {
    //   publicPath: '/',
    // },
    hot: true,
    // port: '9999',
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    },
    // 反向代理
    proxy: {
      '/api/': {
        target: 'http://jsonplaceholder.typicode.com',
        ws: true,
        pathRewrite: {
          '^/api/': ''
        },
        changeOrigin: true,
        secure: false
      }
    }
  },
  configureWebpack: () => {
    return {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
        fallback: {
          // 默认情况下，webpack5 不再包含用于 node.js 模块的 polyfills，所以引入 path-browserify
          // path: require.resolve('path-browserify')
        }
      },
      // 生产环境(process.env.NODE_ENV === "production")清除 console.log
      /*config.optimization = {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              mangle: true,
              compress: {
                warnings: false,
                drop_console: false,
                drop_debugger: false,
                // 清除 console.log
                pure_funcs: ['console.log']
              },
              output: {
                // 删除注释
                comments: false
              }
            }
          })
        ]
      }*/
    };
  },
  chainWebpack: config => {
    // 当有很多页面时，它会导致太多毫无意义的请求
    config.plugins.delete('prefeth')
    // 开发环境 sourcemap 不包含列信息
    config.when(process.env.NODE_ENV === 'development',
      config => config.devtool('cheap-source-map')
    )
    // 将运行代码单独生成文件
    if (process.env.NODE_ENV !== 'development') {
      config.cache({
        // 将缓存类型设置为 filesystem, 默认是 memory
        type: 'filesystem',
        buildDependencies: {
          // 更改配置文件时重新缓存
          config: [__filename]
        }
      })
      config.optimization.runtimeChunk('single')
    }
  }
});
