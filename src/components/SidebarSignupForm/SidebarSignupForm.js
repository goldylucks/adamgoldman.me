import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { cloudImg } from '../../utils';
import s from './SidebarSignupForm.css';

const SidebarSignupForm = () => (
  <section className={s.signup}>
    <h3 data-drip-attribute="headline">Get cool stuff!</h3>
    <form
      className={s.container}
      action="https://www.getdrip.com/forms/47603601/submissions"
      method="post"
      data-drip-embedded-form="47603601"
    >
      <input
        required
        className={s.input}
        type="email"
        id="drip-email"
        name="fields[email]"
        placeholder="My email is ..."
      />
      <button
        name="submit"
        data-drip-attribute="sign-up-button"
        className={s.button}
      >
        <img src={cloudImg('adamgoldman.me/send-icon')} alt="send" className={s.buttonIcon} />
      </button>
    </form>
  </section>
);

export default withStyles(s)(SidebarSignupForm);
