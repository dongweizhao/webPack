/**
 * Created by dongweizhao on 16-1-14.
 */
module.exports = {
    entry: {
      page1:'./entry.js',
      m3:'./m3.js'
    },
    output: {
        path: __dirname+"/asset/",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};