import React from 'react';
import { Slide, List, Image } from 'spectacle';

import {
  Text,
  ListItem,
  Heading,
  CodePane,
  TwoColumn,
  WebpackBasicBuild,
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
  <Slide textColor="primary">
    <Heading size={4}>Hello Webpack</Heading>
    <WebpackBasicBuild />
  </Slide>,
  <Slide textColor="primary">
    <Heading size={4}>webpack.config.js</Heading>
    <CodePane textSize="2.25rem" src="webpack-concepts" lang="js" />
  </Slide>,
];
