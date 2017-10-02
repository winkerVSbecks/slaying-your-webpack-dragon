import React, { Component } from 'react';
import anime from 'animejs';

const tl = anime.timeline({
  loop: true,
  autoplay: true,
});

const seek = ({ targets, stroke, offset }) => ({
  targets,
  stroke,
  offset,
  translateX: [25, 0],
  translateY: [25, 0],
  scale: [0.9, 1],
  ease: 'easeInElastic',
  duration: 400,
  delay: (_, idx) => idx * 150,
});

const step = ({ targets, stroke }) => ({
  targets,
  translateX: [0, 0],
  translateY: [25, 0],
  scale: [0.9, 1],
  opacity: [0, 1],
  ease: 'easeInElastic',
  duration: 600,
});

export class TaskRunners extends Component {
  componentDidMount() {
    tl
      .add(
        seek({
          targets: '.js-js',
          stroke: '#00E676',
          offset: 1200,
        }),
      )
      .add(step({ targets: '.js-build-js' }))
      .add(
        seek({
          targets: '.js-misc',
          stroke: '#B2FF59',
          offset: '-=300',
        }),
      )
      .add(step({ targets: '.js-build-misc' }))
      .add(
        seek({
          targets: '.js-css',
          stroke: '#36C3FF',
          offset: '-=300',
        }),
      )
      .add(step({ targets: '.js-build-css' }))
      .add(
        seek({
          targets: '.js-img',
          stroke: '#FFEB3B',
          offset: '-=300',
        }),
      )
      .add(step({ targets: '.js-build-img' }));
  }

  render() {
    return (
      <svg
        viewBox="0 0 900 600"
        {...this.props}
        ref={el => {
          this.el = el;
        }}
      >
        <g stroke="#fff" strokeWidth="3" fill="none">
          <rect className="js-js" x="400" y="62.5" width="100" height="100" />
          <rect className="js-js" x="400" y="187.5" width="100" height="100" />
          <rect
            className="js-misc"
            x="400"
            y="312.5"
            width="100"
            height="100"
          />
          <rect
            className="js-misc"
            x="400"
            y="437.5"
            width="100"
            height="100"
          />

          <rect className="js-js" x="275" y="62.5" width="100" height="100" />
          <rect className="js-css" x="275" y="187.5" width="100" height="100" />
          <circle className="js-img" cx={50 + 275} cy={50 + 312.5} r="50" />
          <rect className="js-css" x="275" y="437.5" width="100" height="100" />

          <rect className="js-js" x="150" y="62.5" width="100" height="100" />
          <rect className="js-js" x="150" y="187.5" width="100" height="100" />
          <rect className="js-js" x="150" y="312.5" width="100" height="100" />
          <rect
            className="js-misc"
            x="150"
            y="437.5"
            width="100"
            height="100"
          />

          <rect className="js-js" x="25" y="62.5" width="100" height="100" />
          <rect className="js-css" x="25" y="187.5" width="100" height="100" />
          <rect className="js-js" x="25" y="312.5" width="100" height="100" />
          <rect className="js-css" x="25" y="437.5" width="100" height="100" />
        </g>

        <g stroke="none">
          <rect
            className="js-build-js"
            opacity="0"
            fill="#00E676"
            x="575"
            y="175"
            width="100"
            height="100"
          />
          <text
            className="js-build-js"
            opacity="0"
            x="625"
            y="231"
            fill="#212121"
            fontSize="12"
            textAnchor="middle"
          >
            bundle.js
          </text>
          <rect
            className="js-build-misc"
            opacity="0"
            fill="#B2FF59"
            x="725"
            y="175"
            width="100"
            height="100"
          />
          <text
            className="js-build-misc"
            opacity="0"
            x="775"
            y="231"
            fill="#212121"
            fontSize="12"
            textAnchor="middle"
          >
            bundle2.js
          </text>
          <rect
            className="js-build-css"
            opacity="0"
            fill="#36C3FF"
            x="575"
            y="325"
            width="100"
            height="100"
          />
          <text
            className="js-build-css"
            opacity="0"
            x="625"
            y="381"
            fill="#212121"
            fontSize="12"
            textAnchor="middle"
          >
            bundle.css
          </text>
          <circle
            className="js-build-img"
            opacity="0"
            fill="#FFEB3B"
            cx="775"
            cy="375"
            r="50"
          />
          <text
            className="js-build-img"
            opacity="0"
            x="775"
            y="381"
            fill="#212121"
            fontSize="12"
            textAnchor="middle"
          >
            img/
          </text>
        </g>
      </svg>
    );
  }
}

// stroke="#00E676"
// stroke="#36C3FF"
// stroke="#B2FF59"
// stroke="#FFEB3B"

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
