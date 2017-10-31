// @flow

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ClickOutside from 'react-click-outside';

import history from '../../history';
import Link from '../Link';
import s from './Menu.css';

class Menu extends React.Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    history.listen(() => {
      if (this.state.isOpen) {
        this.close();
      }
    });
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  close = () => this.setState({ isOpen: false });

  render() {
    return (
      <ClickOutside onClickOutside={this.close} className="clearfix">
        <div onClick={this.toggle} className={s.hamburgerWrap}>
          <div className={s.hamburger} />
        </div>
        <nav
          className={`cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right ${this
            .state.isOpen
            ? 'cbp-spmenu-open'
            : ''}`}
        >
          <h3 onClick={this.toggle}>Menu</h3>
          <Link to="/">Start Here</Link>
          <Link to="/i-dont-charge-i-accept/">Pricing?</Link>
          <Link to="/who-am-i-anyway/">who Am I Anyway</Link>
          <Link to="/tools/">Brain Hacking Tools</Link>
          <Link to="/successes/">Successes</Link>
          <Link to="/reviews/">Students Share ...</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/tags/">Tags</Link>
          <Link to="/book-me/">Book Me</Link>
          <Link to="/trainings/">Trainings</Link>
          <Link to="/quotes/">Quotes</Link>
          <Link to="/books/">Books</Link>
          <Link to="/lets-talk/">Let&apos;s Talk?</Link>
        </nav>
      </ClickOutside>
    );
  }
}

export default withStyles(s)(Menu);
