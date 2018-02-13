// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './Testimonials.css'

type Props = {
  item: [],
  key: [],
}

const TestimonialItems = ({ item, key }: Props) => (
  <div data-index={key} key={key}>
    <h3>{item.title}</h3>
    <small className={` ${s.quote} `} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.text}</small>
    <div className={`${s.alignBottom}`}>
      <div className={` ${s.testimonialImage} `} >
        <img src={item.imgSrc} alt="" className={`${s.avatar}`} />
      </div>
      <div className={` ${s.description} `}>
        <p>{item.name}</p>
        <small>{item.nameMeta}</small>
      </div>
    </div>
  </div>
)

export default withStyles(s)(TestimonialItems)
