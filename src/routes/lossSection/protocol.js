/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-len */

import React from 'react'
import Collapsible from 'react-collapsible'

import Markdown from '../../components/Markdown'

export default {
  title: 'The Protocol',
  description: 'Description here',
  html: (
    <div>
      <Collapsible trigger={<h2>Part 1: Introduction and prerequisites</h2>}>
        {[
          {
            title: 'Intro',
            content: `
I’ve adapted this protocol from Steve and Connirae Andreas’ [grief process](http://steveandreas.com/Articles/grief02.html), which they have been teaching for almost 30 years. [Heart of the Mind](http://amzn.to/2CfrEVT) provides an introduction to this process, and a [videotaped demonstration](http://www.realpeoplepress.com/resolving-grief-video-download-p-97.html) provides an example of it. 

This process is quite often very useful, since the grief response of emptiness and sadness in response to the loss of a loved person is something that everyone will experience at some time in their lives, and many people experience many significant losses.

Unresourceful grief is often a major unrecognized factor in a wide range of other difficulties that bring people to seek therapy, including  lack of motivation, depression, chronic illness, and mid-life crisis.

Steve and Connirae modeled people who were particularly resourceful in dealing with significant losses, and this protocol is the accumulation of many strategies they have found useful.          
`,
          },
          {
            title: 'Self rate',
            content: `
The participant rates from 0-10, how strong are the feeling of loss/miss/emptyness, and how resourceful she feels when thinking about the loss.

At the end of the protocol she rates herself again.
`,
          },
          {
            title: 'Adressing Common Questions',
            content: `
Before shifting to a more [resourceful response](/loss/resourceful-response) to the loss, some participants might have [questions](/loss/faq) which we address before proceeding.
`,
          },
          {
            title: 'Softening shock response',
            content: `
In addition to the loss, there’s often a [shock response](/loss/shock-response) (or PTSD) associated with the moment of death itself, or related events (funeral, memorials etc). We use another protocol to soften those events before proceeding with the loss protocol.
`,
          },
          {
            title: 'Releasing regret, guilt, anger & blame',
            content: `
If there are strong feelings mixed with the loss, perhaps over a fight that happened prior to the death, or a feeling of “I could’ve done something different”, we clear those first as well before proceeding.
`,
          },
        ].map(renderCollapsible)}
      </Collapsible>
      <Collapsible trigger={<h2>Part 2: Reunion</h2>}>
        {[
            {
              title: 'Eliciting loss/grief representation',
              content: `
I (Adam) ask the participant how she is currently thinking about the loss, particularly what image(s) and sound(s) come to mind. More often than not, at this point, the representation is still [not resourceful](/loss/common-pitfalls).
`,
            },

            {
              title: 'Eliciting resourceful loss',
              content: `
I ask the participant to think about a meaningful person who is no longer in her life, yet when she thinks of them, she experiences them as a [resource](/loss/resourceful-response), and feels their presence, warmth, appreciation and gratitude for the relationship they had.
`,
            },
            {
              title: 'Contrastive Analysis (CA)',
              content: `
We compare the representation of the [resourceful loss](/loss/resourceful-response), to the non resourceful loss (the current person she is grieving). Again we attend mostly to the images and sounds.

Usually the pictures of the two representations are in a different place in the participant’s personal space.

E.g. The non-resourceful loss would be slightly to your down left, about 6 meters away, while the [resourceful loss](/loss/resourceful-response) would be much closer and to your right.
  `,
            },
            {
              title: 'Mapping Across (MA)',
              content: `
Here we “map across” the non resourceful loss representation, to the same “coding” of the [resourceful representation](/loss/resourceful-response).

Usually starting with location works best, so I ask the participant to notice what happens as she allows the picture of the non resourceful loss to slide over to the same location of the [resourceful loss](/loss/resourceful-response), so she sees them at the same place and distance.

Oftentimes this change will carry over many other changes of representation such as brightness, vividness, focus, and more.

We then go back and forth between the two representations, and notice if there’s any other aspects we can learn from the [resourceful representation](/loss/resourceful-response), and use them to improve the non resourceful loss representation.
`,
            },

            {
              title: 'Mapping Across (MA) - Congruence Check',
              content: `
For many participants, mapping across the representation makes a big shift in their experience, and transforms it into a more [resourceful](/loss/resourceful-response) one.

Usually there are no objections to experience the loss this way, but it’s important to make sure the participant is fully congruent with the change, and provide and reassurance if needed, and attend to concerns if arise.
`,
            },
            {
              title: 'Relationship Consolidation',
              content: `
In every relationship there are some moments that are better than others. This is a three part process in which we:
1. Sort out good and bad experience in the relationship
2. Soften the response from the bad ones
3. Increase the good feelings from the good ones
4. Integrate all the experiences, good and bad
 - for most participants, envisioning a collage with all the experiences works best.
 - The bad experiences are often dimmer and viewed in third person, from the outside, while the good experiences are experienced in first person, as if the participant is reliving them and can access the good feelings
5. (Optional) For many participants, envisioning the person they lost right there with them, watching the collage together, and talking about it, further solidifies the feelings of presence and appreciation.
`,
            },

          ].map(renderCollapsible)}
      </Collapsible>
      <Collapsible trigger={<h2>Part 3: Reengaging the future</h2>}>
        <p>This part is derived from the most effective strategies for getting over a loss, and makes sure that the participant will actively seek out appropriate new nourishing experiences in the future.</p>
        {[
            {
              title: 'Identify values/outcomes',
              content: `
We Identify the values, aspects, values and outcomes that made the relationship valuable. Some common responses include humor, acceptance, unconditional love, etc.
`,
            },

            {
              title: 'Transformation to future experiences',
              content: `
We then elicit future possible encounters, scenarios and relationships that could represent and express the same values and qualities in different ways. Since no one (that I know of) can predict the future, these future representations are not “fixed in stone”, so the “fine details” of these future possibilities is not needed.
`,
            },

            {
              title: 'Congruence check',
              content: `
I ask the participant if she has any objections to experience these possibilities and directions in her future. At this point concerns are rare, but if they arise we attend to them of course.
`,
            },

            {
              title: 'Placing the new experiences in the future',
              content: `
Without knowing exactly when each will happen, the participant envisions the future possibilities being “sprinkled” into her future, as something to look forward to and propel herself into the future, bearing the values and qualities in mind.
`,
            },

          ].map(renderCollapsible)}
      </Collapsible>
      <Collapsible trigger={<h2>Part 4: Feedback & Followup</h2>}>
        <Markdown source={`
The participant shares her experience, points for improvement, and rates again her feelings when thinking about the loss.

To make sure the change is long lasting and pervasive, we schedule (optional) brief follow up sessions in the next intervals:
- 5 days
- 1 month
- 3 month
- 6 month
- 1 year

While it as rare, if any concerns or setback arises, we attend to those as well.
`}
        />
      </Collapsible>
      <hr />
      <Markdown source={`
After you go through the protcol, and are ready to experience a more [resourceful response](/loss/resourceful-response) to your loss, you can [signup here to particiapte](/loss/participate) as well.
`}
      />
    </div>
  ),
}

/* eslint-disable react/prop-types */
function renderCollapsible({ title, content }) {
  return (
    <Collapsible trigger={title} key={title}>
      <Markdown source={content} />
    </Collapsible>
  )
}
