// @flow

import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Slider from 'react-slick'

import TestimonialItems from './TestimonialItems'
import s from './Testimonials.css'

type Props = {
  testimonials?: Array<Object>,
}

const Testimonials = ({ testimonials }: Props) => {
  const countSlides = testimonials.length > 3
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    focusOnSelect: true,
    draggable: false,
    arrows: countSlides,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          arrows: true,
          centerMode: true,
          centerPadding: '10',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slideToShow: 2,
          arrows: true,
        },
      },
    ],
  }

  return (
    <div className={`container ${s.testimonial} `}>
      <Slider {...settings}>
        {testimonials.map((item, key) => (
          <div className={`col-md-3 ${s.item} `}>
            <TestimonialItems key={key} item={item} />
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

function CustomNextArrow(props) {
  const { className, style, onClick } = props
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
}

CustomNextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
}

CustomPrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
