// @flow

import React from 'react'

import { PROFILE_IMG } from '../../constants'

type Props = {
  imgSrc?: string,
  alt?: string,
}

const Avatar = ({ imgSrc, alt }: Props) => (
  <img src={imgSrc} alt={alt} className="avatar" />
)

Avatar.defaultProps = {
  imgSrc: PROFILE_IMG,
  alt: 'Adam Goldman',
}

export default Avatar
