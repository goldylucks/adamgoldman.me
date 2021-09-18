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
    slidesToShow: (testimonials.length < 3) ? 2 : 3,
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
          arrows: testimonials.length > 2,
        },
      },
      {
        breakpoint: 764,
        settings: {
          slidesToShow: 1,
          arrows: testimonials.length > 1,
        },
      },
    ],
  }
  const currentSlide = testimonials.length
  return (
    <div className="container">
      <Slider {...settings} className={`countSlide-${currentSlide}`}>
        {testimonials.map(item => (
          <div className={`totalSlides-${testimonials.length}-${testimonials.length}`} key={item.title}>
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
