import React from 'react';
import { Slide, List, Image } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import {
  Text,
  ListItem,
  Heading,
  CodePane,
  TwoColumn,
  WebpackBasicBuild,
  Triangle,
  Code,
} from 'components';
import img from 'img';

export default [
  <Slide>
    <Heading size={6} margin="0 0 4rem 0" caps className="tracked ttc">
      Webpack
    </Heading>
    <Text margin="2rem 0">Starts at an entry point.</Text>
    <Text margin="2rem 0">
      Recursively builds a dependency graph of modules your app uses.
    </Text>
    <Text margin="2rem 0">Packages them all into a bundle.</Text>
  </Slide>,
  <Slide>
    <Text>🖼️ webpack tree path animation to bundle</Text>
  </Slide>,
  <Slide>
    <div className="flex items-stretch">
      <div className="flex-auto mr3 ba b--moon-gray overflow-hidden bw1">
        <div className="bg-moon-gray fw8 dark-blue f3 pv2">src/index.js</div>
        <CodePane className="h-100" src="hw-index" lang="js" />
      </div>
      <div className="flex-auto ba b--moon-gray overflow-hidden bw1">
        <div className="bg-moon-gray fw8 dark-blue f3 pv2">src/math.js</div>
        <CodePane className="h-100" src="hw-math" lang="js" />
      </div>
    </div>
  </Slide>,
  <Slide textColor="primary">
    <Heading size={4}>Hello Webpack</Heading>
    <WebpackBasicBuild />
  </Slide>,
  <Slide textColor="primary">
    <Heading size={4}>webpack.config.js</Heading>
    <CodePane textSize="2.25rem" src="webpack-concepts" lang="js" />
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require('../assets/entry-and-output.example')}
    ranges={[
      { loc: [0, 10], title: '📄 Entry & Output 📦' },
      {
        loc: [3, 4],
        note: 'The first file to kick off your app',
      },
      { loc: [4, 8], note: 'How to treat bundled code' },
      {
        loc: [0, 1],
        title: 'Node.js',
        note: 'Utilities for working with file/directory paths',
      },
      {
        loc: [6, 7],
        note: '__dirname: the directory this file is in',
      },
      { loc: [6, 7], note: 'path.resolve: generate an absolute path' },
    ]}
  />,
  <Slide textColor="primary">
    <Text>
      👨🏽‍💻 demonstrate the hello world here. Build and start live server to
      run the app
    </Text>
    <Text>
      Annoying to run two things at the same time so… webpack-dev-server
    </Text>
  </Slide>,
  <Slide textColor="primary">
    <Heading size={4}>NPM Scripts</Heading>
    <CodePane textSize="1.5rem" src="scripts" lang="js" />
  </Slide>,
  <Slide margin="0">
    <Heading size={4}>Everything Is a Module!</Heading>
    <List>
      <ListItem>All files – css/html/scss/jpg/etc.</ListItem>
      <ListItem>
        ES2015 <Code>import</Code> statements
      </ListItem>
      <ListItem>
        <Code>require()</Code> statements
      </ListItem>
      <ListItem>
        <Code>@import</Code> statement in stylesheets
      </ListItem>
      <ListItem>Image url in a stylesheet or HTML</ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading size={4}>
      <Triangle className="w4 h4" /> Triangle Catalogue
    </Heading>
    <Text>introduce css imports and image in CSS file here</Text>
  </Slide>,
  <Slide bgImage={img.babelFish}>
    <Heading textAlign="center" size={1}>
      Loaders
    </Heading>
  </Slide>,
  <Slide margin="0">
    <Heading size={4}>Loaders 🖨️</Heading>
    <Text>Transform files into modules</Text>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    textSize="0.8em"
    style={{ lineHeight: 1.25 }}
    code={require('../assets/loaders.example')}
    ranges={[
      { loc: [8, 22] },
      { loc: [10, 11], note: 'Compile JS/JSX using Babel' },
      {
        loc: [11, 12],
        title: 'Chain Loaders!',
        note: '.css file ➡️ resolve @import and url() ➡️ <style>',
      },
      { loc: [12, 20], note: 'Load images' },
      {
        loc: [15, 19],
        note: (
          <p>
            <Code>triangle-pattern.svg</Code> turns into{' '}
            <Code style={{ color: '#FFEB3B' }}>
              triangle-pattern.89327412.svg
            </Code>
          </p>
        ),
      },
    ]}
  />,
];
