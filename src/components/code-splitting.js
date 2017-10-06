import React from 'react';

export const CodeSplitting = props => (
  <div className="flex flex-wrap lh-copy fw9 mt5" style={{ color: '#212121' }}>
    <div className="w-50 br b--white bw1">
      <div style={{ backgroundColor: '#00E676' }} className="pv1 tc mb2">
        HTML
      </div>
      <div style={{ backgroundColor: '#36C3FF' }} className="pv1 ml6 mb2 w-40">
        CSS
      </div>
      <div style={{ backgroundColor: '#FFEB3B' }} className="pv1 ml6 mb2 w-60">
        main JS chunk
      </div>
    </div>
    <div className="w-50 pb4 flex flex-column">
      <div className="white f3 tc ph4 pv6 flex-auto flex items-center">
        Lazy-load chunks as the user navigates
      </div>
      <div className="flex">
        <div style={{ backgroundColor: '#FFEB3B' }} className="ml5 ph3 pv1">
          slide #1
        </div>
        <div style={{ backgroundColor: '#FFEB3B' }} className="ml3 ph3 pv1">
          slide #2
        </div>
      </div>
    </div>
    <div className="tc w-100 white f3">interactive</div>
  </div>
);
