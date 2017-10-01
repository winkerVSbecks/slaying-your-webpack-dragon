import React from 'react';

export const TaskRunners = props => (
  <svg viewBox="0 0 900 600" {...props}>
    <g stroke="#00E676" strokeWidth="2" fill="none">
      <rect x="25" y="62.5" width="100" height="100" />
      <rect stroke="#36C3FF" x="25" y="187.5" width="100" height="100" />
      <rect x="25" y="312.5" width="100" height="100" />
      <rect stroke="#36C3FF" x="25" y="437.5" width="100" height="100" />

      <rect x="150" y="62.5" width="100" height="100" />
      <rect x="150" y="187.5" width="100" height="100" />
      <rect x="150" y="312.5" width="100" height="100" />
      <rect x="150" y="437.5" width="100" height="100" />

      <rect x="275" y="62.5" width="100" height="100" />
      <rect stroke="#36C3FF" x="275" y="187.5" width="100" height="100" />
      <circle stroke="#FFEB3B" cx={50 + 275} cy={50 + 312.5} r="50" />
      <rect stroke="#36C3FF" x="275" y="437.5" width="100" height="100" />

      <rect x="400" y="62.5" width="100" height="100" />
      <rect x="400" y="187.5" width="100" height="100" />
      <rect stroke="#B2FF59" x="400" y="312.5" width="100" height="100" />
      <rect stroke="#B2FF59" x="400" y="437.5" width="100" height="100" />
    </g>
  </svg>
);

{
  /* <svg viewBox="0 0 800 600" className="ba" {...props}>
  <g stroke="#00E676" strokeWidth="2" fill="none">
    <rect x="25" y="62.5" width="100" height="100" />
    <rect x="25" y={62.5 + 100 + 25} width="100" height="100" />
    <rect x="25" y={62.5 + 100 + 25} width="100" height="100" />
    <rect x="25" y={62.5 + 100 + 25 + 100 + 25} width="100" height="100" />
    <rect
      x="25"
      y={62.5 + 100 + 25 + 100 + 25 + 100 + 25}
      width="100"
      height="100"
    />

    <rect x={25 + 100 + 25} y="125" width="100" height="100" />
    <rect x={25 + 100 + 25} y={125 + 100 + 25} width="100" height="100" />
    <rect
      x={25 + 100 + 25}
      y={125 + 100 + 25 + 100 + 25}
      width="100"
      height="100"
    />

    <rect x={25 + 100 + 25 + 100 + 25} y="187.5" width="100" height="100" />
    <rect
      x={25 + 100 + 25 + 100 + 25}
      y={187.5 + 100 + 25}
      width="100"
      height="100"
    />
  </g>
</svg> */
}
