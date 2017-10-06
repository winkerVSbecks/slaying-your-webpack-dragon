import React from 'react';
import TransitionGroup from 'react-transition-group-plus';
import anime from 'animejs';

const DURATION = 800;

class SlideIn extends React.Component {
  componentWillEnter(cb) {
    anime({
      targets: this.el,
      translateY: ['100%', 0],
      opacity: [0, 1],
      complete: () => cb(),
      duration: DURATION,
      easing: 'easeOutExpo',
    });
  }

  componentWillLeave(cb) {
    anime({
      targets: this.el,
      translateY: [0, '-100%'],
      opacity: [1, 0],
      complete: () => cb(),
      duration: DURATION,
      easing: 'easeOutExpo',
    });
  }

  render() {
    return (
      <div className="absolute top-0 left-0" ref={el => (this.el = el)}>
        {this.props.children}
      </div>
    );
  }
}

const Left = () => (
  <span className="">
    <svg
      color="#fff"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="32"
      height="32"
      fill="none"
      stroke="currentcolor"
      strokeWidth="3"
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        overflow: 'visible',
        margin: '0 2rem',
      }}
    >
      <path d="M1.5 8 L16 8" />
      <path d="M8.439339828220179 1.0606601717798212 L1.5 8 L8.439339828220179 14.939339828220179" />
    </svg>
  </span>
);

const Sass = () => (
  <div
    className="flex-auto h4 relative flex items-center justify-center ph3"
    style={{ backgroundColor: '#2175FF' }}
  >
    sass loader
    <div
      className="absolute left-0 mt3 f4 pa3 lh-copy h4 flex items-center"
      style={{ top: '100%', backgroundColor: '#36C3FF' }}
    >
      compile Scss into CSS
    </div>
  </div>
);
const PostCSS = () => (
  <div
    className="flex-auto h4 relative flex items-center justify-center ph3"
    style={{ backgroundColor: '#FFC400' }}
  >
    postcss loader
    <div
      className="absolute left-0 mt3 f4 pa3 lh-copy h4 flex items-center"
      style={{ top: '100%', backgroundColor: '#FFEB3B' }}
    >
      transform using postcss plugins
    </div>
  </div>
);

const LEVELS = [
  null,
  <SlideIn key={1} enterDuration={DURATION} leaveDuration={DURATION}>
    <Sass />
  </SlideIn>,
  <SlideIn key={2} enterDuration={DURATION} leaveDuration={DURATION}>
    <PostCSS />
  </SlideIn>,
];

export class CssPipeline extends React.Component {
  state = {
    level: 0,
  };

  next = () => {
    this.setState(state => ({
      level: state.level === 2 ? 0 : state.level + 1,
    }));
  };

  render() {
    const { level } = this.state;
    return (
      <div
        className="flex items-center fw9 mb6 pointer"
        style={{ color: '#212121' }}
        onClick={this.next}
      >
        <div
          className="flex-auto h4 flex items-center justify-center ph4"
          style={{ backgroundColor: '#FF7EAB' }}
        >
          &#x3C;style&#x3E;
        </div>
        <Left />
        <div
          className="flex-auto h4 relative flex items-center justify-center ph3"
          style={{ backgroundColor: '#00E676' }}
        >
          css loader
          <div
            className="absolute left-0 mt3 f4 pa3 lh-copy ph3 h4 flex items-center"
            style={{ top: '100%', backgroundColor: '#B2FF59' }}
          >
            Resolve @import and url()
          </div>
        </div>
        {level > 0 ? <Left /> : null}
        <TransitionGroup
          component="div"
          className={`relative h4 ${level > 0 ? 'w5' : ''}`}
        >
          {LEVELS[level]}
        </TransitionGroup>
        <Left />
        <div
          className="flex-auto h4 flex items-center justify-center bg-gray pl3 pr4"
          style={{ backgroundColor: '#F2F2F2' }}
        >
          .CSS
        </div>
      </div>
    );
  }
}
