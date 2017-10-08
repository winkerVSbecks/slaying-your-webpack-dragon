import React from 'react';
import { Slide, List, Image } from 'spectacle';

import {
  Text,
  ListItem,
  Heading,
  CodePane,
  TwoColumn,
  TaskRunners,
  Bundlers,
} from 'components';
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
    <Heading size={4}>2013</Heading>
    <Text>Started building Single-Page Applications</Text>
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
    <Heading size={5} margin="0 0 8rem 0">
      Bundling 📦
    </Heading>
    <TwoColumn>
      <Text>
        module-1.js<br />
        module-2.js<br />
        module-3.js<br />
      </Text>
      <div className="flex items-center nt2">
        <Text textSize="12rem" lineHeight={1}>
          }
        </Text>
        <Text className="flex-auto" lineHeight={1} margin="1.5rem 0 0 2rem">
          bundle.min.js
        </Text>
      </div>
    </TwoColumn>
  </Slide>,
  <Slide>
    <Heading size={5}>Exposure to Build Tools</Heading>
    <List>
      <ListItem>CSS Concactation</ListItem>
      <ListItem>CSS Pre-processors</ListItem>
      <ListItem>Livereload/Browsersync</ListItem>
      <ListItem>Hacked grunt scripts</ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading size={5}>Task Runners</Heading>
    <TwoColumn>
      <div className="flex flex-column mr3">
        <Image src={img.gruntGulping} margin="0" className="w4 ph2 pt3" />
      </div>
      <List className="list lh-title">
        <ListItem>Automate tasks in your development workflow.</ListItem>
        <ListItem>Write or configure tasks.</ListItem>
        <ListItem>Can do pretty much anything!</ListItem>
      </List>
    </TwoColumn>
  </Slide>,
  <Slide>
    <Heading size={6} margin={0}>
      Task Runners as Build Tools
    </Heading>
    <TaskRunners className="w-100" />
    {/*
      + Have to instruct it on how to build your app in the form of tasks</ListItem>
      + code is written with an awareness of where things will end up
       for example if you are writing a react component and that component uses an image. What will be the url of that image?
    */}
  </Slide>,
  <Slide>
    <Heading size={6} margin="0 0 4rem 0" caps className="tracked ttc">
      Bundlers
    </Heading>
    <Text margin="2rem 0">Start at an entry point.</Text>
    <Text margin="2rem 0">
      Recursively build a dependency graph of modules your app uses.
    </Text>
    <Text margin="2rem 0">Packages them all into a bundle.</Text>
  </Slide>,
  <Slide>
    <Heading size={6} margin={0} caps className="tracked ttc">
      Webpack
    </Heading>
    <Bundlers className="w-100" />
  </Slide>,
];
