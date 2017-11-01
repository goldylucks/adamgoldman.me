// @flow

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Square.css';

type Props = {
  title: string,
  description: string,
  declineText: string,
  decline: boolean,
  invitation: boolean,
};

class Square extends React.Component {
  state = {
    line: {},
    lineToILocation: {},
  };
  componentDidMount() {
    if (this.props.invitation) {
      const { top, right } = this.el.getBoundingClientRect();
      const targetEl = document
        .querySelector('#decline')
        .getBoundingClientRect();
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        line: {
          width: targetEl.left - right,
          height: targetEl.top - top,
        },
      });
    }

    if (this.props.decline) {
      const { top, left, width } = this.el.getBoundingClientRect();
      const targetEl = document
        .querySelector('#location')
        .getBoundingClientRect();
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        lineToILocation: {
          width: Math.abs(left - targetEl.right + width / 2),
          height: Math.abs(top - targetEl.top - targetEl.height / 2),
        },
      });
    }
  }

  props: Props;

  renderArrowToILocation() {
    if (!this.props.decline) {
      return null;
    }
    return (
      <div
        style={{
          position: 'absolute',
          bottom: 100,
          right: '50%',
        }}
      >
        <svg
          height={this.state.lineToILocation.height}
          width={this.state.lineToILocation.width}
        >
          <line
            x1="0"
            y1="0"
            x2={this.state.lineToILocation.width}
            y2={this.state.lineToILocation.height}
            style={{
              stroke: 'rgb(120,120,120)',
              strokeWidth: 2,
            }}
          />
        </svg>
      </div>
    );
  }

  render() {
    const {
      title,
      description,
      decline,
      invitation,
      declineText,
      ...rest
    } = this.props;
    return (
      <div
        key={title}
        ref={el => {
          this.el = el;
        }}
        className={`${s.container} ${decline ? s.decline : ''}`}
        {...rest}
      >
        <h1 className={s.title}>{title}</h1>
        <p className={s.description}>{description}</p>
        {invitation && (
          <div
            style={{
              position: 'absolute',
              top: this.state.line.height > 0 ? '50%' : '',
              bottom: this.state.line.height > 0 ? '' : '50%',
              transform: this.state.line.height > 0 ? '' : 'scale(-1, 1)',
              left: 240,
            }}
          >
            <svg
              height={Math.abs(this.state.line.height)}
              width={Math.abs(this.state.line.width)}
            >
              <line
                x1="0"
                y1="0"
                x2={this.state.line.width}
                y2={Math.abs(this.state.line.height)}
                style={{
                  stroke: 'rgb(255,0,0)',
                  strokeWidth: 2,
                }}
              />
            </svg>
          </div>
        )}
        {this.renderArrowToILocation()}
      </div>
    );
  }
}
export default withStyles(s)(Square);
