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
  <Slide margin="0">
    <div>
      <Heading size={2} margin="0 0 8rem 0">
        Slaying Your<span className="ml3">🐲</span>
        <br />Webpack Dragon
      </Heading>

      <Text textSize="3rem" className="fw9">
        Varun Vachhar
      </Text>
      <Text textSize="2.25rem">@winkerVSbecks</Text>
    </div>
  </Slide>,
  <Slide>
    <Heading size={4}>2013</Heading>
    <Text>Started building Single-Page Applications</Text>
  </Slide>,
  <Slide margin="0">
    <div className="flex items-stretch">
      <div className="w-50 mr3">
        <CodePane src="all-the-js" textSize="1rem" lang="html" />
      </div>
      <div className="w-50">
        <CodePane src="all-the-css" lang="css" className="h-100" />
      </div>
    </div>
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
      <div className="h-100 flex items-center">
        <Text lineHeight={1} margin="0 3rem 0 0">
          ➡️
        </Text>
        <Text className="flex-auto" lineHeight={1} margin="0">
          bundle.min.js
        </Text>
      </div>
    </TwoColumn>
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
  </Slide>,
  <Slide>
    <Heading size={6} margin={0}>
      Bundlers — Webpack/Rollup/Browserify
    </Heading>
    <Bundlers className="w-100" />
  </Slide>,
];
