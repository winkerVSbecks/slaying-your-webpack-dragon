import React from 'react';
import { Text as SText } from 'spectacle';

export const Text = props => (
  <SText textColor="secondary" lineHeight={1.5} textAlign="left" {...props} />
);
