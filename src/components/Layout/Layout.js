import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import s from './Layout.css';
import Footer from '../Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={s.appWrapper}>
        <div className={`${s.mainContent} main-content`}>
          {this.props.children}
          <Footer />
        </div>
        <aside className={s.sidebar}>
          <h1>Aside!</h1>
        </aside>
      </div>
    );
  }
}

export default withStyles(s)(Layout);
