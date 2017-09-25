- [jxnblk.com/react-design-tooling](http://jxnblk.com/react-design-tooling/#0)
- [spectacle-terminal](http://elijahmanor.com/spectacle-terminal/#/?_k=dpc6hd)
- [react-live](https://github.com/FormidableLabs/react-live)

---

* From Grunt to Gulp to webpack. 📈
  * What is webpack?
  * Why do we need it?
* Core Concepts
  * Entries & Outputs 📦
  * Loaders ✨
  * Plugins 🎩
* `HtmlWebpackPlugin`
* Focus on the CSS pipeline with webpack
  * Style, CSS, PostCSS, etc. loaders
  * Static assets in CSS
  * Handling static assets
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

## 2012
## [fit] Started building web apps for the first time
![](https://upload.wikimedia.org/wikipedia/commons/2/2f/2012-film-logo.png)

---

## My first web apps
- apps, website, they are all the same or maybe not. I'm used to saying app so I will do that.
- built with angular
- crazy with all script tags
- @imports for CSS

---

## JavaScript

```html
<!-- Libs -->
<script src="https://maps.googleapis.com/maps/api/js?v=3.14&sensor=true"></script>
<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script src="libs/keydragzoom_packed.js" type="text/javascript"></script>
<script src="libs/markerwithlabel.js"></script>
<script src="libs/driveRadius.js"></script>
<script src="libs/bootstrap.min.js"></script>

<!-- Angular Scripts -->
<script src="libs/angular/angular.js"></script>
<script src="libs/angular/angular-resource.js"></script>
<script src="libs/angular-ui.min.js"></script>
<script src="js/app-angular.js"></script>
<script src="js/directives.js"></script>
<script src="js/helpers.js"></script>
<script src="js/controllers/admin-ctrl.js"></script>
<script src="js/controllers/client-ctrl.js"></script>
<script src="js/controllers/orders-ctrl.js"></script>
<script src="js/controllers/store-ctrl.js"></script>
<script src="js/controllers/sub-order-ctrl.js"></script>
<script src="js/controllers/time-period-ctrl.js"></script>
<script src="js/controllers/user-ctrl.js"></script>
<script src="js/services.js"></script>
```

---

## All the CSS in One File!

---

## CSS

```css
@import url(http://fonts.googleapis.com/css?family=Lato);
@import url('bootstrap.min.css');
@import url('font-awesome-ie7.min.css');
@import url('font-awesome.min.css');
@import url('style.css');
@import url('jquery-ui.css');
```

---

## The first step
- CSS Pre-processors
- Concactation
- [Compass.app](http://compass.kkbox.com/doc/getting_started_with_compassapp.html)

---

## Build Tools

- For a while I relied on others to setup a grunt or gulp
- Sometimes I would even copy and paste code to change the setup

---

## My Journey Started with the Question

how do templates make it to the browser?

```js, [.highlight: 4-5, 11-13]
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/clients', {
      templateUrl: 'partials/clientList.html',
      controller: ClientListCtrl
    })
});

directiveModule.directive('navbar', function() {
  return {
    restrict: 'A',
    templateUrl: 'partials/navbar.html',
    link: function (scope, element, attrs) { ... }
  };
});
```

---

### Task Runners

- Automate tasks in your development workflow.
- Task runners can do a lot. Anything even!
- Write or configure tasks (Gulp or Grunt what you want it to do).

_🖼️ hand selecting files to make bundles_

+ where will the JS output
+ where will the templates end up. What will they end up as.
+ where will css go
+ images 🤷🏽‍♂️
+ relative links in my template

---

### Webpack
1. Static build tool
1. processes code and bundles it
1. bundles all of your code & dependencies so that you can require('modules').

Webpack has a starting point and builds from there.

> it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into a small number of bundles - often only one - to be loaded by the browser.

_🖼️ webpack tree path animation to bundle_

---

## Webpack

webpack is fed via a configuration object.

```
$ npm i -g webpack
$ webpack  ./js/index.js ./dist --config webpack.config.js
````

<!-- use terminal component to demo webpack --config -->

```js
"scripts": {
  "start": "NODE_ENV=development webpack-dev-server",
  "build": "NODE_ENV=production webpack",
},
```

---

## Core Concepts

<!-- 1. Entry
2. Output
3. Loaders
4. Plugins -->

_webpack.config.js_

```js
module.exports = {
  entry: '📄 Entry',
  output: '📦 Output',
  module: {
    rules: ['🖨️ Loaders']
  },
  plugins: ['🔌 Plugin'],
};
```

---

## 📄 Entry & Output 📦

```js
const path = require('path'); // explain

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // explain
    filename: 'my-first-webpack.bundle.js'
  }
};
```

<!-- contextual root or the first file to kick off your app. -->

---

## 👨🏽‍💻 build a simple app here – with one or two modules

---

# Dependency Graph

---

### What is a webpack Module/Everything is a module!

<!--
  show in a tabbed interface that looks like a text editor
  + A CommonJS require() statement
  + An AMD define and require statement
-->

+ webpack treats every file (.css, .html, .scss, .jpg, etc.) as a module
+ An ES2015 import statement
+ `require()` statements
+ An `@import` statement inside of a css/sass/less file.
+ An image url in a stylesheet `(url(...))` or html `(<img src=...>)` file.

---

However, webpack itself only understands JavaScript.

---

# Loaders

![original fit](babel-fish-o.gif)

---

## Loaders 📠

1. sits between where webpack finds a module and loads it
1. 📄 ➡️ ✨ transform these files into modules as they are added to your dependency graph.
1. assembly line `style-loader ⬅️ css-loader ⬅️ RAW_CSS`

<!--
  Identify which file or files should be transformed by a certain Loader. (test property)
  1. Transform those files so that they can be added to your dependency graph (and eventually your bundle). (use property)
-->

```js
import from './my-module.js';
import from './button.css';
import bg from './bg.png';
```

---

## Loaders 📠

```js, [.highlight: 9-21]
const path = require('path'); // explain

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // explain
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 5000, // 10000,
          name: '[name].[hash:8].[ext]',
        },
      },
    ]
  }
};
```

---

## deeper dive into loaders

+ babel-loader
+ url-loader
  + Handling static assets
+ ['style-loader', 'css-loader', postcss-loader]
  + Static assets in CSS
  + show what happens to `url()`

_👨🏽‍💻 live coding_

---

# vue-loader
+ Single File Components
+ https://github.com/vuejs/vue-loader

![right fit](https://camo.githubusercontent.com/14e5f4477f49cf0fc0d8f228facb17772a0b1025/687474703a2f2f626c6f672e6576616e796f752e6d652f696d616765732f7675652d636f6d706f6e656e742e706e67)

---

## Plugins 🔌
+ The plugins option is used to customize the webpack build process in a variety of ways.
+ Commonly used to perform actions on the bundle and/or _chunks_ generated by the build process.

<!-- They are most commonly used to perform actions and custom functionality on _compilations_ or _chunks_ of your bundled modules. -->

---

## `HtmlWebpackPlugin`

<!-- The easiest way is to use the template option and pass a custom HTML file. The html-webpack-plugin will automatically inject all necessary CSS, JS, manifest and favicon files into the markup. -->

```js, [.highlight: 2, 8, 24-29]
const path = require('path'); // explain
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // explain
    filename: '[name].[chunkhash:8].js',
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 5000, // 10000,
          name: '[name].[hash:8].[ext]',
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),
  ],
};
```

---

## sourceMap

---

## show full app at this point

---

![massive bundle](bundle.gif)

---

## Extract Text Plugin

Style Loader inlines the CSS in the JavaScript bundle!

+ One large HTTP request instead of multiple parallelized requests
+ Can't cache CSS
+ Can cause Flash of Unstyled Content (FOUC)

<!-- Even though there is a nice build set up now, where did all the CSS go? As per configuration, it has been inlined to JavaScript! Even though this can be convenient during development, it doesn't sound ideal.

> The current solution doesn't allow to cache CSS. You can also get a Flash of Unstyled Content (FOUC). FOUC happens because the browser takes a while to load JavaScript and the styles would be applied only then. Separating CSS to a file of its own avoids the problem by letting the browser to manage it separately.

https://survivejs.com/webpack/styling/separating-css/ -->

---

## Extract Text Plugin

|Advantages|Caveats|
|:---------|:------|
| Fewer style tags (older IE has a limit) | Additional HTTP request |
| Faster runtime (less code and DOM operations) | Longer compilation time |
| CSS requested in parallel | No runtime public path modification |
| CSS cached separate | No Hot Module Replacement |

---

![massive bundle](bundle.gif)

---

## Bundle Analyzer
https://github.com/th0r/webpack-bundle-analyzer

![inline fit](https://cloud.githubusercontent.com/assets/302213/20628702/93f72404-b338-11e6-92d4-9a365550a701.gif)

---

![original](code-splitting.png)

[Image from Addy Osmani ](https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-2-page-load-performance-33b932d97cf2)

---

<!-- codeslide this -->

```js
// Require sync
import './Equilateral';
// as method to load ES2015 modules dynamically on runtime.
// Dynamically load modules. Calls to import() are treated as split points,
// meaning the requested module and it's children are split out into a separate chunk.
import('./Equilateral');
// Returns a promise
import(/* webpackChunkName: "equilateral" */ './Equilateral');
```

---

```js
Vue.component(
  'async-home',
  () => import('./home-component')
)
```

```html
<div v-if="showHome">
  <async-home></async-home>
</div>
```

---

## Code Splitting

<!--https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html-->

```js
import React, { Component } from "react";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
```

---

Loaded Aync (show script tags in html)

---

## Route Based Code-Splitting

```js
const AsyncHome = asyncComponent(() => import('./Home'));
const AsyncPage1 = asyncComponent(() => import('./Page1'));
const AsyncPage2 = asyncComponent(() => import('./Page2'));

<Switch>
  <Route path="/" exact component={AsyncHome} />
  <Route path="/page-1" exact component={AsyncPage1} />
  <Route path="/page-2" exact component={AsyncPage2} />
</Switch>
```

---

## Bundle Buddy
https://github.com/samccone/bundle-buddy

![inline fit](https://user-images.githubusercontent.com/883126/28001744-ed90cef4-64e3-11e7-919a-f27ced92f9b9.png)

---

## Prevent Duplication

```js
new webpack.optimize.CommonsChunkPlugin({
  children: true,
  minChunks: 2,
  async: true,
}),
```

---

## Getting Production Ready

```js
new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
}),
new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
    // Disabled because of an issue with Uglify breaking seemingly valid code:
    // https://github.com/facebookincubator/create-react-app/issues/2376
    // Pending further investigation:
    // https://github.com/mishoo/UglifyJS2/issues/2011
    comparisons: false,
  },
  output: {
    comments: false,
    // Turned on because emoji and regex is not minified properly using default
    // https://github.com/facebookincubator/create-react-app/issues/2488
    ascii_only: true,
  },
  sourceMap: showSourceMap,
}),
```

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
