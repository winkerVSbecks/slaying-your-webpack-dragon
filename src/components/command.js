import React from 'react';

export const Command = ({ children, ...props }) => (
  <span>
    <span style={{ color: '#ff5c57' }} {...props}>
      ❯{' '}
    </span>
    {children}
  </span>
);
