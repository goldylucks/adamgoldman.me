import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Layout.css';
import Footer from '../Footer';
import Menu from '../Menu';
import Brand from '../Brand';
import SidebarSignupForm from '../SidebarSignupForm';

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
          <Menu />
          <Brand />
          <SidebarSignupForm />
        </aside>
      </div>
    );
  }
}

export default withStyles(s)(Layout);
