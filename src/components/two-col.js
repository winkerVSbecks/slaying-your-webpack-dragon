import React from 'react';

export const TwoColumn = ({ children, props }) => (
  <div className="flex" {...props}>
    <div className="flex-none mr5">{children[0]}</div>
    <div className="flex-auto">{children[1]}</div>
  </div>
);
