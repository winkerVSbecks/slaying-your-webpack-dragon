import React from 'react';
import { CodePane as SCodePane } from 'spectacle';

export const CodePane = ({ src, ...props }) => (
  <SCodePane
    textSize="1.25rem"
    source={require(`assets/${src}.example`)}
    {...props}
  />
);
