import React from 'react'

import Link from '../components/Link'
import FbShareLink from '../components/FbShareLink'
import Testimony from '../components/Testimony'

export const title = 'Coming To Wholeness'
export const nick = 'whole'
// eslint-disable-next-line prettier/prettier
export const description = 'A PRACTICAL step by step tool for non "enlightment"'

export const credits = 'Source: I\'ve adapted this [tool](/tools/) from Connirae\'s [Wholeness Process](http://andreasnlptrainings.com/wholeness/).'

const confirmDecline = (that) => {
  this.setState({
    inputILocation: '',
    inputISizeShape: '',
    inputISensationQuality: '',
  }, that.goToStepByTitle('I - Location'))
}

const allowCompleteIntegration = (that) => {
  const nextIs = [...that.state.Is]
  nextIs.pop()
  that.setState({
    Is: nextIs,
    inputIIntegrationDescription: '',
  })
  if (nextIs.length) {
    that.next()
    return
  }
  that.goToStepByTitle('Circling Back - Initial Feeling - Compare')
}

const initialContext = (that, str) => {
  that.setState({ initialContext: str }, that.next)
}

const initialContextPast = (that, str) => {
  that.setState({ initialContextPast: str }, that.next)
}

const initialContextFuture = (that, str) => {
  that.setState({ initialContextFuture: str }, that.next)
}

const lastI = stepsState => (!stepsState.Is.length ? {} : stepsState.Is.last())

export const initialState = {
  Is: [],
  inputExperience: '',
  inputFeel: '',
  inputFeelingLocation: '',
  inputFeelingSizeShape: '',
  inputFeelingSensationQuality: '',
  inputILocation: '',
  inputISizeShape: '',
  inputISensationQuality: '',
  inputIIntegrationDescription: '',
  inputFeelingIntegrationDescription: '',
}

export const mockState = {
  Is: [
    {
      location: 'Above me, two meters',
      sizeShape: 'round small orange',
      sensationQuality: 'warm anf fuzzy',
    },
  ],
  iCompare: 'very different than before',
  feelingCompare: 'somewhat different than before',
  inputExperience: 'Fighting with father',
  inputFeel: 'Feel annoyed',
  inputFeelingLocation: 'In stomach',
  inputFeelingSizeShape: 'small brick',
  inputFeelingSensationQuality: 'vast and clear',
  inputILocation: 'Above me, two meters',
  inputISizeShape: 'round small orange',
  inputISensationQuality: 'warm anf fuzzy',
  inputIIntegrationDescription: 'omg is it the best feeling or what?',
  inputFeelingIntegrationDescription: "I'm light as a gazelle!",
}

export const steps = [
  {
    title: 'Background',
    preDescriptionHtml: (
      <div>
        <Testimony
          imgSrc="https://scontent.fmad3-4.fna.fbcdn.net/v/t1.0-1/p50x50/22852018_10155160350728379_1394566735044658139_n.jpg?oh=57414f3649e2f9a526776e8a6be6d521&oe=5AC94334"
          text="I feel like that resolved the memory even more and equipped me with a tool I can tap into in a similar situation in the future. That exercise makes me feel much more aware and accepting of myself and what's inside my head, it's incredibly helpful."
          name="Julianne Barley, cleared all Fibromyalgia symptoms"
        />
        <Testimony
          imgSrc="https://scontent.fmad3-4.fna.fbcdn.net/v/t1.0-1/p50x50/21761536_1549692695090122_4419204185971223288_n.jpg?oh=5196db6b63c2ebe986e404a8a2e471a7&oe=5ACD560E"
          text="Man! Just completed two rounds of this WHOLENESS process and I'm FLYING! The frustration turned into a soft sensation, and I can keep on going!"
          name="Tommy Gorden, hypnotist"
        />
      </div>
    ),
    description: () => `
*"enlightment is easy, you just surrender your ego and become a vast self like all the gurus tell you to"* - said no human being, EVER.

If you, like me, are willing to ACTIVELY go after a more complete life, and feeling more "whole", I see no reason this process will not affect you in some memorable way.

If you prefer to meditate until that complete life "arrives", this will not be for you, and you are welcome to [ask me why](FB_MESSAGE).

So are we together on this my friend?`,
    answers: [
      {
        text: 'Yes, I want to proactively go after a better life!',
      },
      {
        text: "Makes sense to me, let's continue",
      },
      {
        text: 'I rather wait passively for life to improve',
        onClick: () =>
          global.alert("I wish you all the luck then, hoping you won't need it ;)"),
      },
    ],
  },

  {
    title: 'Choose Experience',
    description: () => `
Good choice!

You'd be surprised how many people "wish" their life to be better, but never go pass that, so I'm glad YOU are in the right direction.

Now, if this is your first time using this tool, you'd benefit most by picking an issue or difficult experience that’s mild to medium intensity.

E.g. Something that pushes your buttons, but really doesn’t hurt anyone.
`,
    input: {
      placeholder: 'I want to resolve the experience of ...',
      id: 'Experience',
    },
  },

  {
    title: 'Initial Feeling',
    description: stepsState => `
Imagine it is happening now ...

*${stepsState.inputExperience}*

and notice how you feel in response ...

Describe your response in one short sentence.

(E.g. *“I feel annoyed.”*)
`,
    input: {
      placeholder: 'I feel ...',
      id: 'Feel',
    },
  },

  {
    title: 'Initial Feeling - location',
    description: stepsState => `
And *${stepsState.inputFeel}* ...

And when you feel *${stepsState.inputFeel}*, **where is this feeling** of *${stepsState.inputFeel}* located, when you feel *${stepsState.inputFeel}*?

(E.g. “in my chest.”)    
`,
    input: {
      placeholder: 'It’s ...',
      id: 'FeelingLocation',
    },
  },

  {
    title: 'Initial Feeling - Size & Shape',
    description: stepsState => `
And *${stepsState.inputFeelingLocation}* ...

And when it's a *${stepsState.inputFeel}* feeling, and it's *${stepsState.inputFeelingLocation}*, **notice it's size & shape**, when it's a *${stepsState.inputFeel}* feeling, and it's *${stepsState.inputFeelingLocation}*

(E.g. “It’s sort of round and the size of an orange.”)    
`,
    input: {
      placeholder: 'It’s ...',
      id: 'FeelingSizeShape',
    },
  },

  {
    title: 'Initial Feeling - Sensation Quality',
    description: stepsState => `
And *${stepsState.inputFeelingSizeShape}* ...

And when it's *${stepsState.inputFeelingLocation}*, and it's *${stepsState.inputFeelingSizeShape}*, **what's it's sensation quality**, when it's *${stepsState.inputFeelingLocation}*, and it's *${stepsState.inputFeelingSizeShape}*?

(E.g. “It’s fuzzy and a bit prickly.”)
    `,
    input: {
      placeholder: "It's ...",
      id: 'FeelingSensationQuality',
    },
  },

  {
    title: 'Noticing Awareness',
    description: stepsState => `
And *${stepsState.inputFeelingSensationQuality}* ...

And when it's *${stepsState.inputFeelingSensationQuality}*, you can recognize,

*I am aware of this *${stepsState.inputFeelingSensationQuality}* sensation, so awareness is present.*
  `,
    answers: [
      { text: 'Indeed I can' },
      {
        text: 'I do recognize, now what am I recognizing this "Awareness" for?',
      },
    ],
  },

  {
    title: 'Experiencing Practical Awareness',
    description: () => `
Now take a moment to experience Awareness ...

By "Awareness" I mean the actual capacity to notice, A.K.A. "be aware" of stuff in and around you, with your senses.

You are aware of these lines with no effort by your part.

You can feel the keyboard or the mouse touching your hand, again with no effort.

You might be aware of some sounds around you right now as we speak, and you might be aware of your own internal voice reading these lines in your mind.

You are aware of the sensation you’ve just been noticing, so awareness is present there, and awareness is also throughout your body and all around.

If someone will talk next to you, would you need any effort to hear it?

If a sound happened on the other side of you, you’d also be aware of it without effort, and even if your eyes are closed, you can notice a sense of space all around you.

When I refer to Awareness, I'm pointing to this capacity to notice, that is throughout the body, and all around. And there isn’t really any edge to it or an end to it. And you can notice this all, simultaneously, right now, kinda like on "autopilot".
  `,
    answers: [
      { text: "Yes, I'm aware of all that, and more" },
      { text: "Yup, awareness is here, what's next?" },
    ],
  },

  {
    title: 'I - Location',
    id: 'Location',
    description: () => `

Now with [your permission](TITLE_or_without_it,_I'm_running_the_show_here_;\\)) let’s return to this statement, *“I am aware of this feelingSensationQuality} sensation feelingLocation}”* ...

Where is the "I", that is aware of this sensation...? Where is this "I" located?

I know it's probably a strange question, but a useful one nonetheless, and you can just notice whatever location comes to mind.

It might be somewhere in your head, body, or outside your head or body somewhere.

And what location do you notice?

Another way of experiencing this is asking *“Where is the perceiving happening from?”*

E.g. *"it's in front of me, pretty close, slightly to the right"*
`,
    input: {
      placeholder: 'It’s ...',
      id: 'ILocation',
      onSubmit: (that) => {
        that.setState(
          {
            Is: that.state.Is.concat({
              location: that.state.inputILocation,
            }),
          },
          that.next,
        )
      },
    },
  },

  {
    title: 'I - Size & Shape',
    description: stepsState => `

And *${stepsState.inputILocation}* ...

And when it's *${stepsState.inputILocation}*, **what is the size & shape of this ‘I’**, when it's *${stepsState.inputILocation}*?
`,
    input: {
      placeholder: 'It’s ...',
      id: 'ISizeShape',
      onSubmit: (that) => {
        const nextIs = [...that.state.Is]
        nextIs.last().sizeShape = that.state.inputISizeShape
        that.setState({ Is: nextIs }, that.next)
      },
    },
  },

  {
    title: 'I - Sensation Quality',
    description: stepsState => `

And *${stepsState.inputISizeShape}* ...

And when it's *${stepsState.inputILocation}*, and it's *${stepsState.inputISizeShape}*, **what's the sensation quality** of this *${stepsState.inputISizeShape}*?

E.g foggy, clear, dense, or empty, heavy, light, vibrating, still, etc.
`,
    input: {
      placeholder: 'The sensation quality is ...',
      id: 'ISensationQuality',
      onSubmit: (that) => {
        const nextIs = [...that.state.Is]
        nextIs.last().sensationQuality = that.state.inputISensationQuality
        that.setState({ Is: nextIs }, that.next)
      },
    },
  },

  {
    title: 'I - Inviting Integration',
    invitation: true,
    description: stepsState => `
And *${stepsState.inputISensationQuality}* ...

And when this ‘I’ is *${stepsState.inputILocation}* ...

and *${stepsState.inputISensationQuality}* ...

Does the sensation of this ‘I’ welcome the invitation to open and relax as the fullness of Awareness?

Some people prefer to notice what happens when the fullness of Awareness... all of consciousness... is invited to flow in and as... the sensation *${stepsState.inputILocation}*.

Or, it may feel like the Awareness already present *${stepsState.inputILocation}*, wakes up to itself.

It matters less if the answer is ‘Yes’ or ‘No’, It just tells us what to do next.
`,
    answers: [
      { text: 'No', goToStepByTitle: 'Acknolwedging Decline' },
      { text: 'Yes', goToStepByTitle: 'I - Experiencing Integration' },
    ],
  },

  {
    title: 'Acknolwedging Decline',
    decline: true,
    id: 'decline',
    description: stepsState => `
And no ...

And you just noticed the sensation here - ***${lastI(stepsState).location}*** - doesn’t welcome the invitation to open and relax, right?
`,
    answers: [
      { text: 'Correct', onClickThat: confirmDecline },
      { text: 'Actually it does accept the invitation now' },
    ],
  },

  {
    title: 'I - Experiencing Integration',
    description: () => `
And yes ...

And notice what happens, when the sensation of the ‘I’ is invited to open and relax ...

as the fullness of Awareness ...

There can be a gentle sensing into the sensation in this location, and an allowing this opening and relaxing to happen in its own way. You are not really doing anything, just sensing how it occurs on its own.

And what happens?
`,
    input: {
      placeholder: 'I feel ...',
      id: 'IIntegrationDescription',
    },
  },

  {
    title: 'I - Allowing Complete Integration',
    description: stepsState => `
And *${stepsState.inputIIntegrationDescription}*
    
And if you are experiencing a relaxing, melting, or dissolving, just stay with it until things settle. Enjoy the sense of relaxation, peace or flow as long as you like.
`,
    answers: [
      {
        text: "I'm experiencing more relaxing ...",
        onClickThat: allowCompleteIntegration,
      },
      {
        text: "I'm experiencing more melting ...",
        onClickThat: allowCompleteIntegration,
      },
      {
        text: "I'm experiencing more dissolving ...",
        onClickThat: allowCompleteIntegration,
      },
      {
        text: 'I feel the integration is complete ...',
        onClickThat: allowCompleteIntegration,
      },
    ],
  },

  {
    title: 'Circling Back - Previous I - Compare',
    description: stepsState => `
Now let's check with the ‘I’ that was *${lastI(stepsState).location}*

First notice, is it the same as it was before, or is it a little bit different? Either is fine.
`,
    answers: [
      {
        text: "It's exactly the same as before",
        onClickThat: that =>
          that.setState({ iCompare: 'exactly the same as before' }, that.next),
      },
      {
        text: "It's somewhat different than before",
        onClickThat: that =>
          that.setState(
            { iCompare: 'somewhat different than before' },
            that.next,
          ),
      },
      {
        text: "It's very different than before",
        onClickThat: that =>
          that.setState({ iCompare: 'very different than before' }, that.next),
      },
    ],
  },

  {
    title: 'Circling Back - Previous I - Inviting Integration',
    invitation: true,
    description: stepsState => `
And It's *${stepsState.iCompare}*

And now notice what happens, when this sensation of this "I" here - *${lastI(stepsState)
    .location}* - is invited to open and relax ... as the fullness of Awareness ... There can be an allowing of this to happen in its own way.

Does the sensation of this ‘I’ welcome the invitation to open and relax as the fullness of Awareness?

You might prefer to notice what happens when the fullness of Awareness... all of consciousness... is invited to flow in and as... the sensation *${lastI(stepsState).location}*.

Or, it may feel like the Awareness already present in *${lastI(stepsState)
    .location}*, wakes up to itself.

It matters less if the answer is ‘Yes’ or ‘No’, It just tells us what to do next.    
`,
    answers: [
      { text: 'Yes', goToStepByTitle: 'I - Experiencing Integration' },
      { text: 'No', goToStepByTitle: 'Acknolwedging Decline' },
    ],
  },

  {
    title: 'Circling Back - Initial Feeling - Compare',
    description: stepsState => `
Now let’s return to the area that you started with, ${stepsState.inputFeelingLocation}.

First notice, is the sensation there the same as it was before?

Or is it a little bit different?
`,
    answers: [
      {
        text: "It's exactly the same as before",
        onClickThat: that =>
          that.setState(
            { feelingCompare: 'exactly the same as before' },
            that.next,
          ),
      },
      {
        text: "It's somewhat different than before",
        onClickThat: that =>
          that.setState(
            { feelingCompare: 'somewhat different than before' },
            that.next,
          ),
      },
      {
        text: "It's very different than before",
        onClickThat: that =>
          that.setState(
            { feelingCompare: 'very different than before' },
            that.next,
          ),
      },
    ],
  },

  {
    title: 'Circling Back - Initial Feeling - Inviting Integration',
    invitation: true,
    description: stepsState => `
And ${stepsState.feelingCompare} ...

And notice what happens when this sensation here - *${stepsState.inputFeelingLocation}* - is invited to open and relax ... as all of Awareness.

Another way to experience it is notice what happens when the fullness of Awareness... all of consciousness... is invited to flow in and as... the sensation *${stepsState.inputFeelingLocation}*.

Or, it may feel like the Awareness already present *${stepsState.inputFeelingLocation}*, wakes up to itself.

Now there is just an allowing of whatever happens. You can enjoy this experience as long as you like, and share what happens and how you feel:    
`,
    input: {
      placeholder: 'I feel ...',
      id: 'FeelingIntegrationDescription',
    },
  },

  {
    title: 'Circling Back - Initial Context',
    description: stepsState => `
And *${stepsState.inputFeelingIntegrationDescription}* ...

Being this way, with the I’s and the feeling integrated with Awareness ...

Notice what is it like now, when you imagine being in a situation where *${stepsState.inputExperience}* ...

What is it like, being this way?
`,
    answers: [
      {
        text: 'I feel more at ease',
        onClickThat: that => initialContext(that, 'more at ease'),
      },
      {
        text: "It's more neutral",
        onClickThat: that => initialContext(that, 'more at neutral'),
      },
      {
        text: 'I feel more resourceful',
        onClickThat: that => initialContext(that, 'more resourceful'),
      },
      {
        text: "It's better but there's still something left",
        onClick: () =>
          global.alert("it's very common for the first time. refresh the page and do the process again, and then contact me, I'll walk you thru it, deal?"),
      },
      {
        text: "It's exactly the same as before, I don't percieve any change",
        onClick: () =>
          global.alert("it's very common for the first time. refresh the page and do the process again, and then contact me, I'll walk you thru it, deal?"),
      },
    ],
  },

  {
    title: '"Being This Way" In The Past',
    description: stepsState => `
And *${stepsState.initialContext}* ...

And check how it is being this way in two situations in the past of *${stepsState.inputExperience}*
`,
    answers: [
      {
        text: 'I feel more at ease',
        onClickThat: that => initialContextPast(that, 'more at ease'),
      },
      {
        text: "It's more neutral",
        onClickThat: that => initialContextPast(that, 'more at neutral'),
      },
      {
        text: 'I feel more resourceful',
        onClickThat: that => initialContextPast(that, 'more resourceful'),
      },
      {
        text: "It's better but there's still something left",
        onClick: () =>
          global.alert("it's very common for the first time. refresh the page and do the process again, and then contact me, I'll walk you thru it, deal?"),
      },
      {
        text: "It's exactly the same as before, I don't percieve any change",
        onClick: () =>
          global.alert("it's very common for the first time. refresh the page and do the process again, and then contact me, I'll walk you thru it, deal?"),
      },
    ],
  },

  {
    title: '"Being This Way" In The Future',
    description: stepsState => `

And *${stepsState.initialContextPast}*

And check how it is being this way in three (or) more future scenarios of *${stepsState.inputExperience}*  
`,
    answers: [
      {
        text: 'I feel more at ease',
        onClickThat: that => initialContextFuture(that, 'more at ease'),
      },
      {
        text: "It's more neutral",
        onClickThat: that => initialContextFuture(that, 'more at neutral'),
      },
      {
        text: 'I feel more resourceful',
        onClickThat: that => initialContextFuture(that, 'more resourceful'),
      },
      {
        text: "It's better but there's still something left",
        onClick: () =>
          global.alert("it's very common for the first time. refresh the page and do the process again, and then contact me, I'll walk you thru it, deal?"),
      },
      {
        text: "It's exactly the same as before, I don't percieve any change",
        onClick: () =>
          global.alert("it's very common for the first time. refresh the page and do the process again, and then contact me, I'll walk you thru it, deal?"),
      },
    ],
  },

  {
    title: 'Rejoicing Learning',
    description: stepsState => `
And *${stepsState.initialContextFuture}* ...

Isn't it great you can learn so fast?

[know others](FB_SHARE) that can enjoy that as well?

or you want to do it again on another issue / experience first?
`,
    answers: [
      {
        onClick: 'onRestart',
        text: 'I want to do it again on the same experience!',
      },
      {
        onClick: 'onRestart',
        text: 'I want to do it again on a different experience',
      },
      <FbShareLink>I want more to experience this!</FbShareLink>,
      <Link to="/i-dont-charge-i-accept/">
        This is great and I want to give back
      </Link>,
      <Link to="/tools/">Cool! what other brain hacks can you teach me?</Link>,
      {
        text: 'Thank you Adam, can I share with you my experience?',
        onClick: 'onShareWithAdam',
      },
    ],
  },
]
