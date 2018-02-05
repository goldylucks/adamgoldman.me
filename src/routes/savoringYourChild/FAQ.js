/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-len */

import React from 'react'
import Collapsible from 'react-collapsible'

import Markdown from '../../components/Markdown'

const FAQ = () => (
  <div>
    <h4>Logistics</h4>
    {[
        {
          title: 'Is this in person?',
          content: 'I work with people through [messenger](FB_MESSAGE), and you can follow the process from the comfort of your own home',
        },
        {
          title: 'Do I need to pay anything?',
          content: 'There are no costs involved. After we are done you can decide if and how much to [give back](/savoring-your-child/donate)',
        },
        {
          title: 'What about privacy?',
          content: `
I'll answer this in two parts.

**Privacy from the outside world**  
I will only share what YOU will EXPLICITLY ask me to. Many parents find it very healing to share their experience and let their transformation inspire others who are still suffering more than they need to.

**Privacy from me (ADAM)**  
Most of the work I do is content free, and you get to choose how much you want to share. You do not need to get into details in order to utilize the protocol.
`,
        },
      ].map(renderCollapsible)}
    <hr />
    <h4>Loss / grief</h4>
    {[
        {
          title: 'Wouldn\'t pepole think I don\'t care for my child if I\'m not in pain?',
          content: `
That depends on the people around you.

Sometimes the best option is to put a frown face with certain people at certain situations, even though your own response is already resourceful.

However for many people, you can send them this page and let them read by themselves what is possible.

If you have a real "hard case" or "skeptic" in your close enviornment, [messege me](FB_MESSAGE) and we'll think together how to "package" the information in a way they could digest easier.
`,
        },

          {
            title: 'I don\'t want to say goodbye',
            content: `
You don't have to, and I actually strongly recommend against it.

Parents who "say goodbye" claim to be "over" their loss, as they pushed away the bad feelings, but at the cost of losing the good feelings, memories, and experiences with the child.

I certainly wouldn't want to depart from the presence and good times I shared with the people who are no longer in my life.

It's one of those common mistakes we have been taught by people with good intentions but not so useful skills.

Through the process you will learn how to "say hello" again, and reclaim the connection you once had with your child.
`,
          },
          {
            title: 'I\'m afraid that if I experience them vividly, I\'ll want to go be with them',
            content: `
What I'd like to offer you, is a way to experience their presence more, and attend to the appreciation of the relationship you had, and everything that you gained and learned from it.

So in a way, you will be with them more and feel them more.
`,
          },
          {
            title: 'Shouldn\'t loss be painful?',
            content: `
To a certain extent, yes, and I would be very suspicious if a parent would feel ZERO pain whatsoever about losing their child.

I haven't lost any children, but I've done this process myself with many other loved ones I've lost, and of course I wish some of them would still be here with me.

BUT ...

I can fully feel their presence, appreciate our good times, and all that I have gained from getting to know them.

When I think about any of them I smile. I get a rush of good feelings.

It propells me and draws me even more towards the future, and that is what I want to offer you as well.
`,
          },
          {
            title: 'Isn\'t grieving a way to honor the dead?',
            content: `
Indeed, if there was nothing valuable lost, there would be no need to grieve in the first place.

The fact that you are grieving is a clear sign you honor your child.

And I'd like to offer you a way to honor them even MORE, by expriencing their presence more fully, and have their memory propel you forward towards a brigther future.

If you would die tomorrow, would you want your loved ones to honor you by feeling empty and sad when they think of you?

Or you'd rather know, fully and completely, they smile from the inside out every time they remember you, and the unforgettable impact you've made on their lives?
`,
          },

        ].map(renderCollapsible)}
  </div>
)

export default FAQ

/* eslint-disable react/prop-types */
function renderCollapsible({ title, content }) {
  return (
    <Collapsible trigger={<span style={{ fontStyle: 'italic' }}>{title}</span>} key={title}>
      <Markdown source={content} />
    </Collapsible>
  )
}

