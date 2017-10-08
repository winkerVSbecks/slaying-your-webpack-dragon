import React from 'react';
import Terminal from 'spectacle-terminal';
import { Command, B, G, P } from './command';

const BuildOutput = ({ className = '' }) => (
  <div className={`fw3 lh-copy f3 ${className}`}>
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
  </div>
);

export const WebpackBasicBuild = () => (
  <Terminal
    textSize="1em"
    title="triangle-catalogue-webpack-example"
    output={[
      <Command className="f3">
        node_modules/.bin/webpack --config webpack.config.js
      </Command>,
      <BuildOutput className="mv5" />,
      <Command className="mv4 f3">serve public</Command>,
      <G className="dib f3 lh-copy mb5 ba bw1 pa4">
        <G className="db  mb4">Serving! </G>
        <div className="mb4 white">
          - Local: <P>http://localhost:5000</P>{' '}
        </div>
        <div className="white">
          - On Your Network: <P>http://172.17.81.132:5000</P>
        </div>
      </G>,
      [
        <Command className="f3 mb7">
          webpack-dev-server --content-base public --config webpack.config.js
        </Command>,
        <div className="f3">
          <Command>
            webpack-dev-server --content-base public --config webpack.config.js
          </Command>
          <div className="mv3">
            Project is running at <P>http://localhost:8080/</P>
          </div>
          <BuildOutput />
        </div>,
      ],
    ]}
  />
);
