import React from 'react';
import { Slide, List, Image } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import {
  Text,
  ListItem,
  Heading,
  CodePane,
  WebpackBasicBuild,
  Triangle,
  Code,
  CssPipeline,
  Chrome,
  WebpackLoaders,
  WebpackHtmlPlugin,
} from 'components';
import img from 'img';

export default [
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
    {/*
      + where to start
      + what to bundle
      + and how to bundle it
    */}
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
      { loc: [4, 8], note: 'Where to output the bundle' },
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
    <Heading textAlign="center">👨🏽‍💻</Heading>
    {/* <Text>
      demonstrate the hello world here. Build and start live server to
      run the app
    </Text> */}
    {/* <Text>
      Annoying to run two things at the same time so… webpack-dev-server
    </Text> */}
  </Slide>,
  <Slide textColor="primary">
    <Heading size={4}>NPM Scripts</Heading>
    <CodePane textSize="1.9rem" src="scripts" lang="js" />
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
      <ListItem>
        Image <Code>url()</Code> in a stylesheet or HTML
      </ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading size={4}>
      <Triangle className="w4 h4" /> Triangle Catalogue
    </Heading>
  </Slide>,
  <Slide>
    <Text>index.js</Text>
    <CodePane src="loader-index" lang="js" margin="0 0 2rem 0" />
    <Text>index.css</Text>
    <CodePane src="loader-css" lang="css" />
  </Slide>,
  <Slide bgImage={img.babelFish}>
    <Heading textAlign="center" size={1} margin="0">
      Loaders
    </Heading>
    <Heading textAlign="center" size={5} margin="0">
      Transform files into modules
    </Heading>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    textSize="0.8em"
    style={{ lineHeight: 1.25 }}
    code={require('../assets/loaders.example')}
    ranges={[
      { loc: [8, 10], title: 'Rules for Loading Modules' },
      { loc: [8, 24] },
      { loc: [10, 15], note: 'Compile JS/JSX using Babel' },
      { loc: [11, 12], note: 'which files to target' },
      { loc: [13, 14], note: 'how to load them' },
      { loc: [12, 13], note: "🙏🏽 please don't transpile node_modules" },
      {
        loc: [15, 16],
        title: 'Chain Loaders! 🚂🚋🚋',
        note: '.css file ➡️ resolve @import and url() ➡️ <style>',
      },
      { loc: [16, 23], note: 'Load images' },
      {
        loc: [19, 22],
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
  <Slide textColor="primary">
    <Heading size={4}>Build with Loaders</Heading>
    <WebpackLoaders />
  </Slide>,
  <Slide>
    <Chrome src={img.svgUrl} />
    <div
      style={{
        color: '#00E676',
        top: '19.6rem',
        right: '3rem',
        width: '32rem',
        height: '2.5rem',
      }}
      className="absolute ba bw3"
    />
  </Slide>,
  <Slide margin="0">
    <Heading size={4} margin="0 0 4rem 0">
      The CSS Pipeline
    </Heading>
    <CssPipeline />
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    textSize="0.8em"
    style={{ lineHeight: 1.25 }}
    code={require('../assets/css-pipeline.example')}
    ranges={[
      { loc: [8, 20] },
      { loc: [15, 39] },
      { loc: [18, 20] },
      {
        loc: [20, 36],
        note: 'CSS Preprocessors! sass-loader, less-loader, etc.',
      },
      { loc: [22, 36] },
    ]}
  />,
  <Slide>
    <Image src={img.vueLoader} className="w-60" />
  </Slide>,
  <Slide margin="0">
    <Heading size={4}>Plugins 🔌</Heading>
    <Text>
      They customize or enhance the webpack build process in a variety of ways.
    </Text>
  </Slide>,
  <Slide>
    <Heading size={6} lineHeight={1.5}>
      Separating the Source Code from Our Distribution Code
      {/*The "source" code is the code that we'll write and edit. The
        "distribution" code is the minimized and optimized output of our build
        process that will eventually be loaded in the browser*/}
    </Heading>
    <Image src={img.public} className="w-100" />
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    textSize="0.8em"
    style={{ lineHeight: 1.25 }}
    code={require('../assets/html-plugin.example')}
    ranges={[
      { loc: [7, 11], title: 'Output for Distribution' },
      { loc: [8, 9], title: 'Dynamic Filename' },
      { loc: [9, 10], title: 'Output to build' },
      { loc: [2, 3], title: 'HTML Webpack Plugin' },
      { loc: [51, 57], note: '✨ automatically inject scripts into template' },
      { loc: [5, 6], note: '🐛 debugging' },
      { loc: [6, 7], note: '📄 Entry' },
      { loc: [7, 11], note: '📦 Output' },
      { loc: [11, 30], note: '🐡️ Loaders' },
      { loc: [51, 57], note: '🔌 Plugins' },
    ]}
  />,
  <Slide textColor="primary">
    <Heading size={6}>Build with Loaders + HTML Plugin</Heading>
    <WebpackHtmlPlugin />
  </Slide>,
  <Slide>
    <Heading size={6} lineHeight={1.5}>
      Build Output
    </Heading>
    <Image src={img.build} className="w-100" />
  </Slide>,
];
