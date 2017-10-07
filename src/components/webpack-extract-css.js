import React from 'react';
import Terminal from 'spectacle-terminal';
import { Command, B, G, Y } from './command';

export const WebpackExtractCss = () => (
  <Terminal
    textSize="1em"
    title="triangle-catalogue-webpack-example"
    output={[
      <Command className="f4">npm run start</Command>,
      <div className="fw3 lh-copy f4 mt3">
        <div>
          Hash: <B>5c32f180b473f3dd7b51</B>
        </div>
        <div>
          Version: webpack <B>3.5.1</B>
        </div>
        <div>
          Time: <B>3840</B>ms
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
          <Y>{'             '}main.5c68c3b0.js</Y>
          {'     '}785 kB{'       '}0{'  '}
          <G>[emitted]</G>
          {'  '}
          <Y>[big]</Y>
          {'  '}main
        </div>
        <div>
          <G>{'            '}main.ef848a01.css</G>
          {'     '}125 kB{'       '}0{'  '}
          <G>[emitted]</G>
          {'         '}main
        </div>
        <div>
          <G>{'         '}main.5c68c3b0.js.map</G>
          {'     '}923 kB{'       '}0{'  '}
          <G>[emitted]</G>
          {'         '}main
        </div>
        <div>
          <G>{'        '}main.ef848a01.css.map</G>
          {'   '}94 bytes{'       '}0{'  '}
          <G>[emitted]</G>
          {'         '}main
        </div>
        <div>
          <G>{'                   '}index.html</G>
          {'    '}1.63 kB{'          '}
          <G>[emitted]</G>
        </div>
      </div>,
    ]}
  />
);
//                  0  [emitted]  [big]  main
//     main.ef848a01.css     125 kB       0  [emitted]         main
//  main.5c68c3b0.js.map     923 kB       0  [emitted]         main
// main.ef848a01.css.map   94 bytes       0  [emitted]         main
//            index.html    1.63 kB          [emitted]
