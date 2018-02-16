// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Slider from 'react-slick'

import TestimonialItem from './TestimonialItem'
import s from './Testimonials.css'

type Props = {
  testimonials?: Array<Object>,
}

const Testimonials = ({ testimonials }: Props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: testimonials.length > 3,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 764,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className={`container ${s.testimonial} `}>
      <Slider {...settings}>
        {testimonials.map(item => (
          <div>
            <TestimonialItem item={item} />
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
