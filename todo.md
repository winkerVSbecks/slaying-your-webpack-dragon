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

| Optimizations | main.js Size |
|:---------|:------:|
| 🚫 | 942 kB |
| 📤 | 844 kB |
| 📤 + ✂️ | 828 kB |
| 📤 + ✂️ + 🎯 | 767 kB |
| 📤 + ✂️ + 🎯 + 🤐 | 173 kB |

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

1. What makes configs hard to read.

---

## ~~JavaScript~~ Webpack fatigue

- Need some basic Node knowledge
- Need to understand ES6 Modules
- API has a large surface area
  - Hot Module Replacement, Tree Shaking, Code Splitting, Lazy Loading, DLL, etc.
- Inheriting/copying configs
- It is incredibly configurable
- Complex configs with multiple versions (development, production)

---

## ~~JavaScript~~ Webpack fatigue

- webpack CLI
- Use CLIs. Every major JS framework has one.
- Understand the Core Concepts.
- Start small. Write your own config.
- [webpack.academy](https://webpack.academy/)
- Read the source code for create-react-app or vue webpack starter
- webpack-blocks

---

## extract-css-chunks-webpack-plugin

Like extract-text-webpack-plugin, but creates multiple css files (one per chunk). Then, as part of server side rendering, you can deliver just the css chunks needed by the current request. The result is the most minimal CSS initially served compared to emerging "render path" solutions.

---

### Coding
Triangle catalogue

1. NPM Scripts
1. Create modules
1. Bundle it simple
1. bundle with configured output (filename, path with `path.join`, etc).
1. run in the browser
1. npm task it
1. webpack.config.js!
  1. the shape of webpack config
  1. entry / output
  1. source-map
  1. module.exports 🤔
1. `--watch` and then webpack-dev-server it
1. Build a project with image, CSS file and JS.
1. Loaders
  1. resolve `.js`
  1. css loader
  1. other static assets – url vs file
1. single bundle with script tags
1. plugins
  1. DefinePlugin
  1. HtmlWebpackPlugin
1. Performance
  1. ExtractTextPlugin
  1. code-splitting
  1. CommonsChunkPlugin
