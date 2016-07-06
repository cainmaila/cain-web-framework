var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'source-map',
    entry: {
        'index': ['./src/index.js'],
    },
    output: {
        filename: '[name].js',
        publicPath: 'js/',
        path: path.join(__dirname, 'www', 'js')
    },
    resolve: {
        root: [
            path.resolve('src/'),
        ],
        alias: {
            'header_Mod': 'components/header_mod.vue',
            'home_Mod':'components/home.vue',
            'myComponent_MOD': 'components/mycomponent.vue',
            'myComponent2_MOD': 'components/mycomponent_2.vue',
            'myStore': 'store/store.js',
            'mySction': 'store/action.js',
            'myGetters': 'store/getters.js',
            'myEvents': 'store/events.js',
        },
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            query: {
                presets: ['es2015', 'stage-0']
            }
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(html|json)$/,
            loader: 'raw'
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js',
            minChunks: Infinity
        }),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     d3: 'd3'
        // })
    ]
};