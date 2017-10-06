import React from 'react';
import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import 'tachyons';
import './prism.css';
import 'spectacle/lib/themes/default/index.css';

import slides from 'slides';

const theme = createTheme(
  {
    primary: '#212121',
    secondary: 'white',
    tertiary: 'white',
    quartenary: '#F2F2F2',
    gold: '#FFC400',
    yellow: '#FFEB3B',
    pink: '#FF7EAB',
    blue: '#36C3FF',
    darkBlue: '#2175FF',
    darkPink: '#D83C74',
    green: '#00E676',
    lightGreen: '#B2FF59',
  },
  {
    primary: "'Roboto Mono', Consolas, monaco, monospace",
    secondary: "'Roboto Mono', Consolas, monaco, monospace",
  },
);

const Presentation = () => (
  <Deck transition={[]} progress="bar" theme={theme}>
    {React.Children.toArray(slides)}
  </Deck>
);

export default Presentation;
