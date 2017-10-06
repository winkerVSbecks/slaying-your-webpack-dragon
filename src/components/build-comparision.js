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
        <td className="bb pv3">930 kB</td>
      </tr>
      <tr>
        <td className="tl bb pv3 pl3">📤</td>
        <td className="bb pv3">786 kB</td>
      </tr>
      <tr>
        <td className="tl bb pv3 pl3">📤 + ✂️</td>
        <td className="bb pv3">768 kB</td>
      </tr>
      <tr>
        <td className="tl bb pv3 pl3">📤 + ✂️ + 🎯</td>
        <td className="bb pv3">
          768 kB<sup>*</sup>
        </td>
      </tr>
      <tr>
        <td className="tl bb pv3 pl3">📤 + ✂️ + 🎯 + 🤐</td>
        <td className="bb pv3">154 kB</td>
      </tr>
    </tbody>
  </table>
);
