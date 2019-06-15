module.exports = {
    entry  : './src/index.js',
    output : {
        path     : __dirname,
        filename : './dist/aframe-bus.min.js'
    },
    module : {
        loaders: [ {
                test   : /.js$/,
                loader : 'babel-loader'
            }
        ]
    }
};
