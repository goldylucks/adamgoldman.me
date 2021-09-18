// @flow

import React from 'react'
import MediaQuery from 'react-responsive'

type Props = {
  children: any,
}

export const SmallScreen = ({ children }: Props) => (
  <MediaQuery query='(max-width: 800px)'>{children}</MediaQuery>
)

export const BigScreen = ({ children }: Props) => (
  <MediaQuery query='(min-width: 801px)'>{children}</MediaQuery>
)
