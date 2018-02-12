// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Slider from 'react-slick'

import s from './Testimonials.css'

type Props = {
  testimonials?: Array<string>,
}

const Testimonials = ({ testimonials }: Props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    accessibility: true,
    adaptiveHeight: false,
  }

  return (
    <div className="container">
      <Slider {...settings}>
        {testimonials.length && testimonials.map((item, key) => (
          <div className={`col-md-3 ${s.item}`} >
            <div data-index={key} key={key}>
              <small className={` ${s.quote} `} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.text}</small>
              <div className={` ${s.testimonialImage} `} >
                <img src={item.imgSrc} alt="" className="avatar" style={{ display: 'inline-block !important' }} />
              </div>
              <div className={` ${s.description} `}>
                <p>{item.name}</p>
                <small>{item.nameMeta}</small>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

Testimonials.defaultProps = {
  testimonials: [],
}

export default withStyles(s)(Testimonials)
