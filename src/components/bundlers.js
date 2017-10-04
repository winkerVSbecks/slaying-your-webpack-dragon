import React, { Component } from 'react';
import anime from 'animejs';

const seek = ({ targets, stroke, offset }) => ({
  targets,
  offset,
  translateX: [25, 0],
  translateY: [25, 0],
  scale: [0.9, 1],
  ease: 'easeInElastic',
  duration: 400,
  delay: (_, idx) => idx * 100,
  stroke: el => el.dataset.color || '#00E676',
});

const step = ({ targets, stroke }) => ({
  targets,
  translateX: [0, 0],
  translateY: [25, 0],
  scale: [0.9, 1],
  opacity: [0, 1],
  ease: 'easeInElastic',
  duration: 600,
  delay: (_, idx) => idx * 50,
});

export class Bundlers extends Component {
  componentDidMount() {
    const qAll = q => this.el.querySelectorAll(q);
    this.tl = anime.timeline({
      loop: true,
      autoplay: true,
    });

    this.tl
      .add(
        seek({
          targets: qAll('.js-thing'),
          offset: 1200,
        }),
      )
      .add(step({ targets: qAll('.js-build') }))
      .add({ duration: 1200 });
  }

  componentWillUnmount() {
    this.tl.pause();
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
          <rect className="js-thing" x="400" y="250" width="100" height="100" />

          <rect
            className="js-thing"
            x="275"
            y="187.5"
            width="100"
            height="100"
          />
          <circle
            data-color="#FFEB3B"
            className="js-thing"
            cx={50 + 275}
            cy={50 + 312.5}
            r="50"
          />

          <rect
            className="js-thing"
            data-color="#36C3FF"
            x="150"
            y="112.5"
            width="100"
            height="100"
          />
          <rect
            className="js-thing"
            data-color="#B2FF59"
            x="150"
            y="237.5"
            width="100"
            height="100"
          />
          <rect
            className="js-thing"
            x="150"
            y="362.5"
            width="100"
            height="100"
          />

          <rect className="js-thing" x="25" y="62.5" width="100" height="100" />
          <rect
            className="js-thing"
            x="25"
            y="187.5"
            width="100"
            height="100"
          />
          <rect
            className="js-thing"
            data-color="#B2FF59"
            x="25"
            y="312.5"
            width="100"
            height="100"
          />
          <rect
            className="js-thing"
            data-color="#36C3FF"
            x="25"
            y="437.5"
            width="100"
            height="100"
          />
        </g>

        <g stroke="none">
          <rect
            className="js-build"
            opacity="0"
            fill="#00E676"
            x="575"
            y="175"
            width="100"
            height="100"
          />
          <text
            className="js-build"
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
            className="js-build"
            opacity="0"
            fill="#B2FF59"
            x="725"
            y="175"
            width="100"
            height="100"
          />
          <text
            className="js-build"
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
            className="js-build"
            opacity="0"
            fill="#36C3FF"
            x="575"
            y="325"
            width="100"
            height="100"
          />
          <text
            className="js-build"
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
            className="js-build"
            opacity="0"
            fill="#FFEB3B"
            cx="775"
            cy="375"
            r="50"
          />
          <text
            className="js-build"
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
