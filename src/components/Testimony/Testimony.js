// @flow

import React from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import './Testimony.css'

type Props = {
  imgSrc?: string,
  text: string,
  name: string,
  nameMeta?: string,
  isRtl?: boolean,
}

const Testimony = ({
  imgSrc, text, name, nameMeta, isRtl,
}:
Props) => (
  <article className="clearfix">
    <blockquote className={cx('card-text', { rtl: isRtl })}>{text}</blockquote>
    <div className="clearfix">
      <div className={cx('avatar-with-text', { rtl: isRtl })}>
        {imgSrc && <img alt={`${name}'s testimonial'`} src={imgSrc} className="avatar" />}
      </div>
      <div className={cx('avatar-with-text', { rtl: isRtl })}>
        <strong>{name}</strong>
        {nameMeta && <p><small>{nameMeta}</small></p>}
      </div>
    </div>
    <hr />
  </article>
)

Testimony.defaultProps = {
  imgSrc: '',
  nameMeta: '',
  isRtl: false,
}

export default withStyles(s)(Testimony)
