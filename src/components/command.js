import React from 'react';

export const Command = ({ children, ...props }) => (
  <div {...props}>
    <span style={{ color: '#ff5c57' }}>❯ </span>
    {children}
  </div>
);

export const G = props => (
  <span style={{ color: '#00E676' }} className="fw8" {...props} />
);

export const B = props => <span className="fw8" {...props} />;

export const P = props => (
  <span style={{ color: '#D83C74' }} className="fw8" {...props} />
);

export const Y = props => (
  <span style={{ color: '#FFEB3B' }} className="fw8" {...props} />
);
