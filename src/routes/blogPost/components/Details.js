// @flow

import React from 'react'

import Markdown from '../../../components/Markdown'

type Props = {
  date: string,
  name: string,
  age: ?string,
  fbProfile: ?string,
  diagnosis: '',
}

const Details = ({ date, name, age, diagnosis, fbProfile }: Props) => (
  <Markdown
    source={`
# Details
- Date of session: ${date}
${
  !fbProfile
    ? `- Name: ${name}`
    : `- Name: [${name}](https://www.fb.com/${fbProfile})`
}
${!age ? '' : `- Age: ${age}`}
${!diagnosis ? '&nbsp;' : `- Diagnosis: ${diagnosis}`}
- Medium of communication: Facebook chat
        `}
  />
)

export default Details
