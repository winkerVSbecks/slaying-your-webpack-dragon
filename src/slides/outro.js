import React from 'react';
import { Slide, List, Link } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import { Heading, ListItem, Text } from 'components';

export default [
  <CodeSlide
    transition={[]}
    lang="js"
    textSize="0.65em"
    style={{ lineHeight: 1.25 }}
    code={require('../assets/everything.example')}
    ranges={[{ loc: [8, 14] }, { loc: [14, 43] }, { loc: [43, 61] }]}
  />,
  <Slide margin="0">
    <Heading size={4} margin="0 0 4rem 0">
      <span className="strike">JavaScript</span> Webpack Fatigue
    </Heading>
    <List>
      <ListItem>Requires some Node.JS knowledge</ListItem>
      <ListItem>Requires knowledge of ES6 Modules</ListItem>
      <ListItem>API has a large surface area</ListItem>
      <ListItem>Environment dependant configs</ListItem>
      <ListItem>Inheriting configs written by others</ListItem>
    </List>
  </Slide>,
  <Slide margin="0">
    <Heading size={5} margin="0 0 4rem 0">
      Overcoming Webpack Fatigue
    </Heading>
    <List>
      <ListItem>Understand the Core Concepts</ListItem>
      <ListItem>
        <Link textColor="blue" href="https://webpack.academy">
          webpack.academy
        </Link>
      </ListItem>
      <ListItem>Write your own config to learn</ListItem>
      <ListItem>Bootstrap projects using CLIs</ListItem>
      <ListItem>
        Read the source code for CLIs to learn advanced topics
      </ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading
      bgColor="white"
      textColor="primary"
      size={2}
      margin="0 0 4rem 0"
      padding="1rem"
    >
      Thank You!
    </Heading>
    <Text textSize="3rem" className="fw9">
      Varun Vachhar
    </Text>
    <Text textSize="2.25rem">@winkerVSbecks</Text>
    <Text margin="4rem 0 0 0" textSize="2.25rem">
      tiny.cc/webpack-dragon
    </Text>
  </Slide>,
];
