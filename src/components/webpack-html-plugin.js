import React from 'react';
import Terminal from 'spectacle-terminal';
import { Command, B, G, Y } from './command';

export const WebpackHtmlPlugin = () => (
  <Terminal
    textSize="1em"
    title="triangle-catalogue-webpack-example"
    output={[
      <Command className="f4">npm run build</Command>,
      <div className="fw3 lh-copy f4 mt3">
        <div>
          Hash: <B>ebd58041e767fd2f622c</B>
        </div>
        <div>
          Version: webpack <B>3.5.1</B>
        </div>
        <div>
          Time: <B>3207</B>ms
        </div>
        <div className="h1" />
        <div className="fw8">
          {'                        '}Asset{'       '}Size{'  '}Chunks{'                    '}Chunk
          Names
        </div>
        <div>
          <G>triangle-pattern.5d1988cb.svg</G>
          {'  '}273 bytes{'          '}
          <G>[emitted]</G>
        </div>
        <div>
          <Y>{'             '}main.e33ac9b7.js</Y>
          {'     '}930 kB{'       '}0{'  '}
          <G>[emitted]</G>
          {'  '}
          <Y>[big]</Y>
          {'  '}main
        </div>
        {/* <div>
          <G>{'         '}main.e33ac9b7.js.map</G>
          {'    '}1.12 MB{'       '}0{'  '}
          <G>[emitted]</G>
          {'         '}main
        </div> */}
        <div>
          <G>{'                   '}index.html</G>
          {'    '}1.58 kB{'          '}
          <G>[emitted]</G>
        </div>
      </div>,
    ]}
  />
);
