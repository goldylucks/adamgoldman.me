/* eslint-disable react/jsx-curly-brace-presence */

import React from 'react'

import { MESSENGER_LINK_WELCOME } from '../../constants'
import Markdown from '../../components/Markdown'

export default {
  title: 'Participate',
  description: 'Description here',
  html: (
    <div>
      <Markdown
        source={`
I (Adam) am currently at Chiang Mai, Thailand, GMT +7.

I'm available in [messenger](${MESSENGER_LINK_WELCOME}) most days between 10am-11pm.

When you are ready to have a more [resourceful response](/loss/resourceful-response) to your loss, [message](${MESSENGER_LINK_WELCOME}) me the following:
- Brief summary of your loss
- From 0-10, how strong are your feelings of loss/miss/emptiness regarding the loss
- From 0-10, how resourceful you feel regarding the loss
- 3 Available slots for your session
- Any questions, comments, or concerns you might have

[Talk soon](${MESSENGER_LINK_WELCOME}),  
&dash; **Adam**
`}
      />
    </div>
  ),
}
