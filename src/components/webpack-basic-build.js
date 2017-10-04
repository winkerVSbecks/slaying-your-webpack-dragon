import React from 'react';
import Terminal from 'spectacle-terminal';
import { Command, B, G } from './command';
import img from 'img';

export const WebpackBasicBuild = () => (
  <Terminal
    title="triangle-catalogue-webpack-example"
    output={[
      <Command>npm install webpack</Command>,
      <Command>node_modules/.bin/webpack --config webpack.config.js</Command>,
      [
        <div>{'  '}⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️</div>,
        <div>
          {'  '}⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️{'         '}✨✨✨✨✨✨✨✨✨✨✨✨✨✨
        </div>,
      ],
      <div className="fw3 lh-copy">
        <div className="h2" />
        <div>
          Hash: <B>fd81c516a582b78532ec</B>
        </div>
        <div>
          Version: webpack <B>3.5.1</B>
        </div>
        <div>
          Time: <B>70</B>ms
        </div>
        <div className="h1" />
        <div className="fw8">
          {'    '}Asset{'     '}Size{'  '}Chunks{'             '}Chunk Names
        </div>
        <div>
          <G>bundle.js</G>
          {'  '}3.44 kB{'       '}0{'  '}
          <G>[emitted]</G> main
        </div>
        <div>
          {'   '}[0] <B>./src/index.js</B> 412 bytes {0} <G>[built]</G>
        </div>
        <div>
          {'   '}[1] <B>./src/math.js</B> 129 bytes {0} <G>[built]</G>
        </div>
      </div>,
      <Command className="mt4">cat webpack.config.js</Command>,
      <pre>{`const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};


`}</pre>,
      <div className="h5">
        <img alt="what does that even mean?" src={img.what} className="h5" />
      </div>,
    ]}
  />
);
