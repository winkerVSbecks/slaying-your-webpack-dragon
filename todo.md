+ From Grunt to Gulp to webpack. 📈
  + What is webpack?
  + Why do we need it?
+ Core Concepts
  + Entries & Outputs 📦
  + Loaders ✨
  + Plugins 🎩
+ `HtmlWebpackPlugin`
+ Focus on the CSS pipeline with webpack
  + Style, CSS, PostCSS, etc. loaders
  + Static assets in CSS
  + Handling static assets
  * Extracting CSS into a separate file using the `ExtractTextWebpackPlugin`
* Code splitting 101 ✂️
  * `ExtractTextPlugin`
  * DefinePlugin
  * Code-splitting
    * webpack-bundle-analyzer
    * devtools network tab
    * bundle-buddy
  * `CommonsChunkPlugin`
* Tree Shaking or dead code elimination 🤷🏽
* CLIs!

---

## Performance Hints

```js
performance: {
  hints: 'warning', // enum
  maxAssetSize: 200000, // int (in bytes),
  maxEntrypointSize: 400000, // int (in bytes)
  assetFilter: function(assetFilename) {
    // Function predicate that provides asset filenames
    return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
  },
},
```

---

# Review the entire config

---

## ~~JavaScript~~ Webpack fatigue

- webpack CLI
- Use CLIs. Every major JS framework has one.
- Understand the Core Concepts.
- Start small. Write your own config.
- [webpack.academy](https://webpack.academy/)
- Read the source code for create-react-app or vue webpack starter
- webpack-blocks
