const path = require('path'); //CommomJS (padrao do node)

//Configuracao do webpack
module.exports = {
    mode: 'development',
    entry: './frontend/main.js',//arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module:{
        rules: [{
            exclude: /node_modules/,
            test:  /\.js$/,
            use: {
                loader: 'babel-loader', 
                options: {
                    presets: ['@babel/env']
                }
            },
        }]
    },
    devtool: 'source-map'//Faz o mapeamento de erros, arquivos
};