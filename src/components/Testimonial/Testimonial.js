// @flow

import React from 'react'

import Testimony from '../../components/Testimony'

type Props = {
  testimonials: []
}

const Testimonial = ({ testimonials }: Props) => (
  <div>
    {testimonials
      .map(t => (
        <Testimony
          imgSrc={t.imgSrc}
          text={t.text}
          name={t.name}
          nameMeta={t.nameMeta}
        />
      ))}
  </div>
)

export default  Testimonial
