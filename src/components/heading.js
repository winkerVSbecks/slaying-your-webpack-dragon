import React from 'react';
import { Heading as SHeading } from 'spectacle';

export const Heading = props => (
  <SHeading
    size={3}
    lineHeight={1.25}
    textColor="secondary"
    textAlign="left"
    margin="0 0 2rem 0"
    {...props}
  />
);
