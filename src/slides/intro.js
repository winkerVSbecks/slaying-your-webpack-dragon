import React from 'react';
import { Slide, List, Image } from 'spectacle';

import { Text, ListItem, Heading, CodePane, TwoColumn } from 'components';
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
      <Text textSize="3rem" className="fw9">
        Varun Vachhar
      </Text>
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
  <Slide>
    <Heading size={5}>Task Runners</Heading>
    <TwoColumn>
      <Image
        src={img.gulp}
        margin="2rem 0"
        className="bg-white w4 h4 br-100 bw2 ba b--white"
      />
      <List>
        <ListItem>Automate tasks in your development workflow.</ListItem>
        <ListItem>Can do pretty much anything!</ListItem>
        <ListItem>Write or configure tasks.</ListItem>
      </List>
    </TwoColumn>
  </Slide>,
  <Slide>
    <Heading size={5}>Task Runners as Build Tools 🖼️</Heading>
    <List>
      <ListItem>Have to instruct it on how to build your app</ListItem>
      <ListItem>
        Have to connect the location of the generated JS & HTML to other static
        assets
      </ListItem>
      {/* <ListItem>Have to define the tasks</ListItem>
      <ListItem>Where do templates end up. What will they end up as.</ListItem>
      <ListItem>where will css go</ListItem>
      <ListItem>images 🤷🏽‍♂️</ListItem>
      <ListItem>relative links in my template</ListItem> */}
      {/*  for example if you are writing a react component and that component uses an image. What will be the url of that image? 🤷🏽‍♂️*/}
    </List>
  </Slide>,
];
