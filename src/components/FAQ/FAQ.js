// @flow

import React from 'react'
import Collapsible from 'react-collapsible'

import Markdown from '../../components/Markdown'

type Props = {
  faqs: []
}

const FAQ = ({ faqs }: Props) => (
  <div>
    {faqs
      .map(f => (
        <Collapsible trigger={<span style={{ fontStyle: 'italic' }}>{f.title}</span>} key={f.title}>
          <Markdown source={f.content} />
        </Collapsible>
    ))}
  </div>
)

export default FAQ
