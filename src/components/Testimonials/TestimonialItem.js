// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './Testimonials.css'

type Props = {
  item: Object,
}

const TestimonialItems = ({ item }: Props) => (
  <div key={item.title} className={s.item}>
    <h3>{item.title}</h3>
    <div className={s.itemText}>
      <p style={{ height: 192 }}>{item.text}</p>
    </div>
    <div className={s.userDetails}>
      <div className={s.testimonialImage}>
        <img src={item.imgSrc} alt={item.name} className={s.avatar} />
      </div>
      <div className={s.userTitle}>
        <div><strong>{item.name}</strong></div>
        <div style={{ height: 40 }}><small>{item.nameMeta}</small></div>
      </div>
    </div>
  </div>
)

export default withStyles(s)(TestimonialItems)
