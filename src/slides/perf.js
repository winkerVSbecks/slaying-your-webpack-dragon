import React from 'react';
import { Slide, List, Image } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import {
  Text,
  ListItem,
  Heading,
  CodePane,
  CodeSplitting,
  TwoColumn,
  BuildComparision,
} from 'components';
import img from 'img';

export default [
  <Slide bgImage={img.bundle} />,
  <Slide>
    <div className="flex flex-wrap">
      <Text
        textAlign="center"
        textColor="primary"
        bgColor="green"
        lineHeight={2}
        className="flex-none w-100"
      >
        bundle.js
      </Text>
      <Text
        lineHeight={2}
        textAlign="center"
        bgColor="yellow"
        textColor="primary"
        className="flex-none w-50"
      >
        app.js
      </Text>
      <Text
        lineHeight={2}
        textAlign="center"
        bgColor="blue"
        textColor="primary"
        className="flex-none w-50"
      >
        app.css
      </Text>
    </div>
  </Slide>,
  <Slide margin="0">
    <Heading size={4}>Style Loader</Heading>
    <List>
      <ListItem>Inlines the CSS in the bundle</ListItem>
      <ListItem>One large HTTP request</ListItem>
      <ListItem>Can't cache CSS</ListItem>
      <ListItem>Can cause Flash of Unstyled Content</ListItem>
    </List>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    textSize="0.8em"
    style={{ lineHeight: 1.25 }}
    code={require('../assets/extract-text.example')}
    ranges={[
      { loc: [0, 0], title: 'Extracting CSS' },
      { loc: [3, 4], title: 'Extract Text Plugin' },
      { loc: [19, 40], note: 'extract CSS into a .css file' },
      { loc: [23, 38] },
      { loc: [54, 57] },
    ]}
  />,
  <Slide margin="0">
    <Heading size={5}>What's Really Inside the Bundle?</Heading>
    <CodePane textSize="1.5rem" src="analyze" lang="js" />
  </Slide>,
  <Slide>
    <Heading size={5}>Code Splitting ✂️</Heading>
    <CodeSplitting />
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    textSize="0.8em"
    style={{ lineHeight: 1.25 }}
    code={require('../assets/code-splitting.example')}
    ranges={[
      { loc: [0, 1], title: 'Static Imports', note: 'add code to the bundle' },
      {
        loc: [4, 5],
        title: 'Dynamic Module Imports',
        note: 'Creates a split point! ✂️',
      },
      { loc: [8, 11], title: 'Promise' },
      { loc: [14, 15], note: 'name the split chunk' },
    ]}
  />,
  <Slide>
    <Heading size={5}>Async Components in Vue</Heading>
    <TwoColumn>
      <CodePane textSize="1.5rem" src="vue-async-component" lang="js" />
      <CodePane
        textSize="1.5rem"
        src="vue-async-component-usage"
        lang="html"
        className="h-100"
      />
    </TwoColumn>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    textSize="0.8em"
    code={require('../assets/async-component-react.example')}
    ranges={[
      { loc: [0, 0], title: 'Async Components in React' },
      { loc: [0, 23] },
      { loc: [3, 20] },
      { loc: [9, 14] },
      { loc: [15, 19] },
      { loc: [23, 27] },
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    textSize="0.65em"
    style={{ lineHeight: 1.25 }}
    code={require('../assets/async-triangles.example')}
    ranges={[
      { loc: [0, 0], title: 'Async Triangle Slides' },
      { loc: [0, 25], note: 'triangles/index.js - Static Imports' },
      { loc: [25, 40], note: 'triangles/index.js - Dynamic Imports ✂️' },
      { loc: [44, 56], title: 'webpack.config.js' },
      { loc: [49, 50], title: 'webpack.config.js' },
    ]}
  />,
  <Slide>
    <Image src={img.codeSplitting} className="w-100" />
  </Slide>,
  <Slide>
    <Heading size={3} textAlign="center">
      Bundle Buddy
    </Heading>
    <CodePane textSize="1.5rem" src="bundle-buddy" lang="shell" />
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    textSize="0.8em"
    style={{ lineHeight: 1.25 }}
    code={require('../assets/common-chunk.example')}
    ranges={[
      { loc: [0, 0], title: 'Prevent Code Duplication' },
      { loc: [64, 69], note: 'Extract all duplicated code into a chunk' },
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    textSize="0.8em"
    style={{ lineHeight: 1.25 }}
    code={require('../assets/prod-ready.example')}
    ranges={[
      { loc: [0, 0], title: 'Getting Ready for Production' },
      { loc: [69, 72], title: 'Enable Production Mode' },
      { loc: [72, 73], title: 'Minify & Compress' },
    ]}
  />,
  <Slide>
    <BuildComparision />
  </Slide>,
];
