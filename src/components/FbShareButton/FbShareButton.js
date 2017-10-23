// @flow

import React from 'react';

import ExternalA from '../ExternalA';
import { DOMAIN } from '../../constants';

type Props = {
  urlProp?: string, // eslint-disable-line react/require-default-props
};

class FbShareButton extends React.Component {
  state = {
    href: '',
  };

  componentDidMount() {
    this.reloadFB();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutFB);
  }

  shareButton = null;
  timeoutFB = null;

  props: Props;

  urlToShare() {
    return this.props.urlProp ? DOMAIN + this.props.urlProp : this.state.href;
  }

  encodedUrlToShare() {
    return encodeURIComponent(this.urlToShare());
  }

  reloadFB = () => {
    if (!global.FB) {
      this.timeoutFB = setTimeout(this.reloadFB, 500);
      return;
    }
    this.setState({ href: window.location.href }, () => {
      console.log('BUTTON: Parsing!')
      global.FB.XFBML.parse(this.shareButton);
    });
  };

  render() {
    const { ...restProps } = this.props;

    delete restProps.urlProp;

    return (
      <div
        {...restProps}
        ref={el => {
          this.shareButton = el;
        }}
      >
        <div
          className="fb-share-button"
          data-href={this.urlToShare()}
          data-layout="button_count"
          data-size="large"
          data-mobile-iframe="true"
        >
          <ExternalA
            className="fb-xfbml-parse-ignore"
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=${this.encodedUrlToShare()}&amp;src=sdkpreparse`}
          >
            Share
          </ExternalA>
        </div>
      </div>
    );
  }
}

export default FbShareButton;
