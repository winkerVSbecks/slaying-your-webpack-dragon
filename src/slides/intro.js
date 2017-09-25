import React from 'react';
import { Slide, List, Image } from 'spectacle';

import { Text, ListItem, Heading, CodePane } from 'components';
import img from 'img';

export default [
  <Slide>
    <Heading margin="0">
      Slaying Your<span className="ml3">🐲</span>
      <br />Webpack Dragon
    </Heading>
  </Slide>,
  <Slide>
    <div className="tl">
      <Image src={img.me} margin="0 0 4rem 0" className="w4 h4 br-100" />
      <Text textSize="3rem">Varun Vachhar</Text>
      <Text textSize="2.25rem">Technical Director at Rangle.io</Text>
      <Text textSize="2.25rem">@winkerVSbecks</Text>
    </div>
  </Slide>,
  <Slide>
    <Heading size={4}>2012</Heading>
    <Text>Started building web apps for the first time</Text>
  </Slide>,
  <Slide>
    <Heading size={5}>JavaScript</Heading>
    <CodePane src="all-the-js" textSize="1rem" lang="html" />
  </Slide>,
  <Slide>
    <Heading size={5}>CSS</Heading>
    <CodePane src="all-the-css" lang="css" />
  </Slide>,
  <Slide>
    <Heading size={5}>Exposure to Build Tools</Heading>
    <List>
      <ListItem>CSS Concactation</ListItem>
      <ListItem>CSS Pre-processors</ListItem>
      <ListItem>Compass.app</ListItem>
      <ListItem>Relied on others to setup grunt</ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading size={5}>How Do Templates Make It to the Browser?</Heading>
    <CodePane textSize="1.5rem" src="angular-templates" lang="js" />
  </Slide>,
];
