// @flow

import React from 'react'

import { SmallScreen, BigScreen } from '../Responsive'

type Props = {
  review: string,
}

const FbReview = ({ review }: Props) => (
  <div>
    <SmallScreen>
      <iframe
        title="Client Review"
        style={{
          border: 'none', overflow: 'hidden', margin: '50px auto', display: 'block',
        }}
        src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com${review}&width=100%`}
        width="100%"
        height="435"
        scrolling="no"
        frameBorder="0"
      />
    </SmallScreen>
    <BigScreen>
      <iframe
        title="Client Review"
        style={{
          border: 'none', overflow: 'hidden', margin: '50px auto', display: 'block',
        }}
        src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com${review}&width=500`}
        width="500"
        height="392"
        scrolling="no"
        frameBorder="0"
      />
    </BigScreen>
  </div>
)

export default FbReview
