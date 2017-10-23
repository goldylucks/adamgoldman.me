// @flow

import React from 'react';

import ExternalA from '../ExternalA';

class FbPageBox extends React.Component {
  componentDidMount() {
    this.reloadFB();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutFB);
  }

  elem = null;
  timeoutFB = null;

  reloadFB = () => {
    if (!global.FB) {
      this.timeoutFB = setTimeout(this.reloadFB, 500);
      return;
    }
    console.log('BOX: Parsing!')
    global.FB.XFBML.parse(this.elem);
  };

  render() {
    return (
      <div
        ref={el => {
          this.elem = el;
        }}
      >
        <div
          {...this.props}
          className="fb-page"
          data-href="https://www.facebook.com/adamgoldman.me"
          data-tabs="messages"
          data-height="250"
          data-small-header="true"
        >
          <blockquote
            cite="https://www.facebook.com/adamgoldman.me"
            className="fb-xfbml-parse-ignore"
          >
            <ExternalA href="https://www.facebook.com/adamgoldman.me">
              Adam Goldman
            </ExternalA>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default FbPageBox;
