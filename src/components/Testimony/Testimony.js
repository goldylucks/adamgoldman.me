// @flow

import React from 'react'

type Props = {
  imgSrc?: string,
  text: string,
  name: string,
  isRtl?: boolean,
}

const Testimony = ({
  imgSrc, text, name, isRtl,
}:
Props) => (
  <div style={{
 background: '#fff', padding: 10, borderRadius: 5, marginBottom: 10, direction: !isRtl ? 'ltr' : 'rtl',
}}>
    {imgSrc && <img
      src={imgSrc}
      style={{
 borderRadius: '50%', border: '3px solid #fff', float: !isRtl ? 'left' : 'right', [!isRtl ? 'marginRight' : 'marginLeft']: 10,
}}
      alt={`${name}'s testimoniaol'`}
    />}
    <p style={{ color: '#777', fontStyle: 'italic' }}>{text}</p>
    <p style={{ color: '#000', marginBottom: 0 }}>- {name}</p>
  </div>
)

Testimony.defaultProps = {
  imgSrc: '',
  isRtl: false,
}

export default Testimony
