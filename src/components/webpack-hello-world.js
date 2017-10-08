import React from 'react';
import Terminal from 'spectacle-terminal';
import { Command } from './command';

export const WebpackHelloWorld = () => (
  <Terminal
    textSize="1em"
    title="triangle-catalogue-webpack-example"
    output={[
      <Command className="f3">npm install webpack</Command>,
      <Command className="f3">
        node_modules/.bin/webpack --config webpack.config.js
      </Command>,
      [
        <div className="f3">{'  '}⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️</div>,
        <div className="f3">
          {'  '}⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️{'         '}✨✨✨✨✨✨✨✨✨✨✨✨✨✨
        </div>,
      ],
    ]}
  />
);
