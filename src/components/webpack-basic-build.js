import React from 'react';
import Terminal from 'spectacle-terminal';
import { Command } from './command';

export const WebpackBasicBuild = () => (
  <Terminal
    title="triangle-catalogue-webpack-example"
    output={[
      <Command>npm install webpack</Command>,
      <Command>./node_modules/.bin/webpack --config webpack.config.js</Command>,
      <div>
        <div className="h1" />
        <div>Hash: ff6c1d39b26f89b3b7bb</div>
        <div>Version: webpack 2.2.0</div>
        <div>Time: 390ms</div>
        <pre>{`Asset    Size  Chunks                    Chunk Names`}</pre>
        <pre>{`bundle.js  544 kB       0  [emitted]  [big]  main
 [0] ./~/lodash/lodash.js 540 kB {0} [built]
 [1] (webpack)/buildin/global.js 509 bytes {0} [built]
 [2] (webpack)/buildin/module.js 517 bytes {0} [built]
 [3] ./src/index.js 278 bytes {0} [built]`}</pre>
      </div>,
    ]}
  />
);
