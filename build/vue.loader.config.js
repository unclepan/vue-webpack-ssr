const docsLoader =  require.resolve('./docs-loader.js');
module.exports = (isDev) => {
    return {
        preserveWhitespace: true,  // 去掉template前后空格
        extractCSS: !isDev, // .vue文件中的css单独打包出来
        cssModules: {
            localIdentName: '[path]-[name]-[hash:base64:8]',
            camelCase: true,
        },
        hotReload: true, // 热重加载
        loaders: {
            'docs': docsLoader,
            // js: 'coffe-loader',
            // html,style:'other-loader'
        }
    }
}