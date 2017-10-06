import React from 'react';

export const Triangle = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    fill="none"
    stroke="currentcolor"
    strokeWidth="2"
    style={{
      display: 'inline-block',
      verticalAlign: 'middle',
      overflow: 'visible',
      color: '#00E676',
    }}
    {...props}
  >
    <path d="M1.5 13 L14.5 13 L8 1.7416697508022985 z" />
  </svg>
);
