// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './Testimonials.css'

type Props = {
  item: [],
}

const TestimonialItems = ({ item }: Props) => (
  <div key={item.title} className={` ${s.item}`}>
    <h3>{item.title}</h3>
    <div className={` ${s.itemText} `}>
      <p>{item.text}</p>
    </div>
    <div className={` ${s.userDetails}`}>
      <div className={` ${s.testimonialImage} `}>
        <img src={item.imgSrc} alt={item.name} className={` ${s.avatar}`} />
      </div>
      <div className={` ${s.userTitle} `}>
        <p>{item.name}</p>
        <small>{item.nameMeta}</small>
      </div>
    </div>
  </div>
)

export default withStyles(s)(TestimonialItems)
