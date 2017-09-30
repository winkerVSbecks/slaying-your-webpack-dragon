import React from 'react';

export const BuildComparision = props => (
  <table className="w-100" cellSpacing="0">
    <thead>
      <tr>
        <th className="bb bw2 pv4 f2">Optimizations</th>
        <th className="bb bw2 pv4 f2">main.js Size</th>
      </tr>
    </thead>
    <tbody className="lh-copy">
      <tr>
        <td className="tl bb pv3 pl3">🚫</td>
        <td className="bb pv3">942 kB</td>
      </tr>
      <tr>
        <td className="tl bb pv3 pl3">📤</td>
        <td className="bb pv3">844 kB</td>
      </tr>
      <tr>
        <td className="tl bb pv3 pl3">📤 + ✂️</td>
        <td className="bb pv3">828 kB</td>
      </tr>
      <tr>
        <td className="tl bb pv3 pl3">📤 + ✂️ + 🎯</td>
        <td className="bb pv3">767 kB</td>
      </tr>
      <tr>
        <td className="tl bb pv3 pl3">📤 + ✂️ + 🎯 + 🤐</td>
        <td className="bb pv3">173 kB</td>
      </tr>
    </tbody>
  </table>
);
