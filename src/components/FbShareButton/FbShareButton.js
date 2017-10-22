// @flow

import React from 'react';

import ExternalA from '../ExternalA';
import { DOMAIN } from '../../constants';

type Props = {
  urlProp?: string, // eslint-disable-line react/require-default-props
  location: Object,
};

const url = (location, urlProp) => DOMAIN + (urlProp || location.pathname);

const encodedUrl = (location, urlProp) =>
  encodeURIComponent(url(location, urlProp));

class FbShareButton extends React.Component {
  componentDidMount() {
    this.reloadFB();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutFB);
  }

  timeoutFB = null;

  props: Props;

  reloadFB = () => {
    if (!global.FB) {
      this.timeoutFB = setTimeout(this.reloadFB, 500);
      return;
    }
    global.FB.XFBML.parse();
  };

  render() {
    const { location, urlProp = '', ...restProps } = this.props;

    return (
      <div {...restProps}>
        <div
          className="fb-share-button"
          data-href={url(location, urlProp)}
          data-layout="button_count"
          data-size="large"
          data-mobile-iframe="true"
        >
          <ExternalA
            className="fb-xfbml-parse-ignore"
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl(
              location,
              urlProp,
            )}&amp;src=sdkpreparse`}
          >
            Share
          </ExternalA>
        </div>
      </div>
    );
  }
}

export default FbShareButton;
