import React from 'react';
import { Slide, List, Link } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import { Text, ListItem, Heading, CodePane, CodeSplitting } from 'components';
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
      { loc: [3, 4], title: 'Extract Text Plugin' },
      { loc: [19, 40] },
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
      { loc: [8, 14] },
      { loc: [17, 18], note: 'name the split chunk' },
    ]}
  />,
];
