// @flow

import React from 'react';

import ExternalA from '../ExternalA';

class FbPageBox extends React.Component {
  componentDidMount() {
    this.reloadFB();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutFB);
  }

  timeoutFB = null;

  reloadFB = () => {
    if (!global.FB) {
      this.timeoutFB = setTimeout(this.reloadFB, 500);
      return;
    }
    global.FB.XFBML.parse();
  };

  render() {
    return (
      <div
        className="fb-page"
        data-href="https://www.facebook.com/adamgoldman.me"
        data-tabs="messages"
        data-height="250"
        {...this.props}
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
    );
  }
}

export default FbPageBox;
