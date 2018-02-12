// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './Testimonials.css'

type Props = {
  item: [],
  key: '',
}

const TestimonialItems = ({ item, key }: Props) => (
  <div className={`col-md-3 ${s.item}`} >
    <div data-index={key} key={key} >
      <small className={` ${s.quote} `} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.text}</small>
      <div className={` ${s.testimonialImage} `}>
        <img src={item.imgSrc} alt="" className="avatar" style={{ border: '3px solid #00ab6b' }} />
      </div>
      <div className={` ${s.description} `}>
        <p>{item.name}</p>
        <small className="clearfix">{item.nameMeta}</small>
      </div>
    </div>
  </div>
)

export default withStyles(s)(TestimonialItems)
