/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-len */

import React from 'react'
import Collapsible from 'react-collapsible'

import { MESSENGER_LINK_WELCOME } from '../../constants'
import Markdown from '../../components/Markdown'

export default {
  title: 'Frequently asked questions',
  description: 'Description here',
  html: (
    <div>
      <h2>Logistics</h2>
      {[
        {
          title: 'Is this in person?',
          content: `I work with people through [messenger](${MESSENGER_LINK_WELCOME}), and you can follow the [protocol](/loss/protocol) from the comfort of your own home`,
        },
        {
          title: 'Do I need to pay anything?',
          content: 'When we are done, and you learn a more [resourceful response](/loss/resourceful-response) to loss, you can decide how much you\'d love to [pay](/i-dont-charge-i-accept) 💖',
        },
        {
          title: 'What about privacy?',
          content: `
I'll answer this in two parts.

**Privacy from the outside world**  
I will only share what YOU will EXPLICITLY ask me to. Many participants, after going through the [protocol](/loss/protocol) and feeling more [resourceful](/loss/resourceful-response), find it very healing to share their experience and let their transformation inspire others who are still [suffering](/loss/common-pitfalls) more than they need to.

**Privacy from me (ADAM)**  
Most of the work I do is content free, and you get to choose how much you want to share. You do not need to get into details in order to utilize the [protocol](/loss/protocol). 
`,
        },
      ].map(renderCollapsible)}
      <hr />
      <h2>Questions about loss</h2>
      {[
        {
          title: 'Wouldn\'t pepole think I don\'t care for the person if I\'m not in pain?',
          content: `
That depends on the people around you.

Sometimes the best option is to put a frown face with certain people at certain situations, even though your own response is already [resourceful](/loss/resourceful-response).

However for many people, you can send them this page and let them read by themselves what is possible.

If you have a real "hard case" or "skeptic" in your close enviornment, [messege me](${MESSENGER_LINK_WELCOME}) and we'll think together how to "package" the information in a way they could digest easier.
`,
        },

          {
            title: 'I don\'t want to say goodbye',
            content: `
You don't have to, and I actually strongly recommend against it.

People who "say goodbye" claim to be "over" their loss, as they pushed away the bad feelings, but at the cost of losing the good feelings, memories, and experiences with the loss.

I certainly wouldn't want to depart from the presence and good times I shared with the people who are no longer in my life.

It's one of those [common mistakes](/loss/common-pitfalls) we have been taught by people with good intentions but not so useful skills.

Through the [protocol](/loss/protocol) you will learn how to "say hello" again, and [reclaim the connection](/loss/resourceful-response) you once had with the person (or any other loss).
`,
          },
          {
            title: 'I\'m afraid that if I experience him vividly, I\'ll want to go be with him',
            content: `
What I'd like to offer you, is a way to experience his presence more, and attend to the appreciation of the relationship you had, and everything that you gained and learned from it.

So in a way, you will be with him more and feel him more.
`,
          },
          {
            title: 'If I experienced the loss as being here with me, people would think I\'m nuts',
            content: `
That might happen if you talk with your loss out loud and around other people.

But I'm sure you, like me, have replayed many times conversations and memories in your head, often times around total strangers, without anyone knowing about it.

We all reflect on the past and conjure up possible futures.

I am offering you a [proven protocol](/loss/protocol) to proactively design some of your internal experience in a [resourceful, beneficial way](/loss/resourceful-response).
`,
          },
          {
            title: 'Shouldn\'t loss be painful?',
            content: `
To a certain extent, yes, and I would be very suspicious if there was NO pain whatsoever.

I've done this [process](/loss/protocol) myself regarding many people I've lost, and of course I wish some of them would still be here with me.

BUT ...

I can fully [feel their presence](/loss/resourceful-response), appreciate our good times, and all that I have gained from getting to know them.

When I think about any of them I smile. I get a rush of good feelings.

It propells me and draws me even more towards the future, and [that is what I want to offer you](/loss/participate) as well.
`,
          },
          {
            title: 'Isn\'t grieving a way to honor the dead?',
            content: `
Indeed, if there was nothing valuable lost, there would be no need to grieve in the first place.

The fact that you are grieving is a clear sign you honor the person.

And I'd like to offer you a [way](/loss/protocol) to honor them even MORE, by [expriencing their presence](/loss/resourceful-response) more fully, and have their memory propel you forward towards a brigther future.

If you would die tomorrow, would you want your loved ones to honor you by feeling empty and sad when they think of you?

Or you'd rather know, fully and completely, they smile from the inside out every time they remember you, and the unforgettable impact you've made on their lives?
`,
          },

        ].map(renderCollapsible)}
      <hr />
      <Markdown source="If you still don't have a resourceful response to your loss, [sign up to participate](/loss/participate) in the process so we can [get started](/loss/participate)." />
    </div>
  ),
}

/* eslint-disable react/prop-types */
function renderCollapsible({ title, content }) {
  return (
    <Collapsible trigger={<span style={{ fontStyle: 'italic' }}>{title}</span>} key={title}>
      <Markdown source={content} />
    </Collapsible>
  )
}
