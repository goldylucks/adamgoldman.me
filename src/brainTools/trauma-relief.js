// @flow
/* eslint max-len: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react'

import Link from '../components/Link'
import FbShareLink from '../components/FbShareLink'
import Markdown from '../components/Markdown'
import HowItsGoingToWorkStep from '../routes/brainTool/components/HowItsGoingToWorkStep'
import Answers from '../routes/brainTool/components/Answers'
import type { Props } from '../routes/brainTool/components/toolPageProps'

const feelWorse = () => {
  global.alert("this is rare, but if it happens it's usually due to a mixed feeling about the event. contact me and I will show you what to do to feel better, fast")
}

export const tags = ['Trauma']
export const stepCount = 13
export const title = 'Trauma Relief'
export const nick = 'war in reverse is peace'
// eslint-disable-next-line prettier/prettier
export const description = 'Turn old traumas and bad memories, arguments, and fights into powerful resources'

// eslint-disable-next-line react/prefer-stateless-function
class TraumaRelief extends React.Component {
  props: Props;

  render() {
    const {
      renderStep,
      onUserInputSubmit,
      onAgeChange,
      onNameChange,
      age,
      name,
      onRestart,
      onFeelTheSame,
      onNext,
    } = this.props
    return (
      <div>
        {[
          <div>
            <Markdown
              className="tool-text"
              source={`
We all have memories from the past that still affect us in a way that's not useful.

Experiences that seem to pop to our mind uninvited and, even tho you know logically it's over, it still affects you.

Some common examples are:

- childhood traumas
- arguments you keep running in your mind
- accidents and graphic scenes
- fights and people yelling
<br />
In a moment I'll walk you thru a short process but first you're probably wondering ...
`}
            />
            <Answers
              noBack
              answers={[
                { text: "so how's this going to work?", onClick: onNext },
              ]}
            />
            <p>
              (NOTE: if this about missing someone, or memory about the loss of
              a loved one,{' '}
              <Link to="/tools/grief-to-appreciation/">do this</Link> instead)
            </p>
          </div>,

          <HowItsGoingToWorkStep onNext={onNext} />,

          <div>
            <Markdown
              className="tool-text"
              source={`
Great, now before you pick the first memory to turn around, tell me, what is your name?
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                className="input"
                placeholder="My name is ..."
                value={name}
                onChange={onNameChange}
                style={{ fontStyle: 'italic' }}
                required
              />
              <button className="button">Let&apos;s continue</button>
            </form>
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Okay ${name},  
think about a memory you had in the past, which pops to your mind every now and then, and still makes you feel bad, or in a way you don't want to, and tell me ...

what was ${name}'s age in that past memory?
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                className="input"
                placeholder={`In that past memory ${name} was XX years of age ...`}
                value={age}
                onChange={onAgeChange}
                type="number"
                min="0"
                max="99"
                required
              />
              <button className="button">Let&apos;s continue</button>
            </form>
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Now in a moment I'll ask you to freeze the memory in a moment BEFORE anything had happened, so you see ${age} years old ${name} in a still image, perfectly safe like I was before my accident:

My brother had an accident long ago with his motorcycle, while yours truly here was riding in the back.

(u can imagine how much my father appreciated his son, my brother, having a motorcycle ...)

A few seconds BEFORE the accident, there was no sign of any danger, and both me and my brother were perfectly safe.

So I want you to see ${age} years old ${name} in a still black & white image, perfectly safe, in a small muted screen far far away, and make the image slightly out of focus and low resolution.

Like in youtube where you select the lowest resolution you know?

Do it now, and let me know when you're done
`}
            />
            <Answers
              answers={[
                { text: 'Done, ready to continue', onClick: onNext },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Now in a moment I'll ask you to see ${age} years old ${name} in the small still picture far far away, fast forward it and freeze it at the end of the memory, after everything is over, and you see ${age} years old ${name} there perfectly safe.

A few seconds before our accident, me and my brother on the bike were just cruisin along, a pretty natural scene.

Then the driver cut us off, there was the moment of the hit, some moments of confusion and stress, and after that we pulled over and exchanged details with the driver.

My leg wasn't 100% healed yet, but the accident itself was over, and both me and my brother were perfectly safe.

So I want you to fast forward the past memory to a similar place, in which you can see ${age} years old ${name} after everything that has happened, perfectly safe, in the next neutral or positive moment.

Now, know the sound of fast forwarding a cartoon?
`}
            />
            <Answers
              answers={[
                {
                  onClick: onNext,
                  text: 'Fast forwarding a cartoon, of course! funny sound',
                },
                { onClick: onNext, text: "Yes I do, let's continue" },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Great, so here's what I want you to do:


1. see ${age} years old ${name}, in a small screen far far away, frozen in time, at the beginning of the memory, before anything had happened, perfectly safe

2. Make the image black & white, out of focus a little bit, and decrease the resolution

3. mute the sound

4. fast forward the movie as fast as you can all the way to after everything is over, and you see ${age} years old ${name} in the next neutral or positive moment

5. like a cartoon, hear everything going forward very fast

<br />

do it now, and let me know when you're done
`}
            />
            <Answers
              answers={[
                { onClick: onNext, text: "Done, let's continue" },
                {
                  onClick: onNext,
                  text: `OK. I fast forwarded the memory, and I see ${age} years old ${name} perfectly safe after the end`,
                },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Now, as you see ${age} years old ${name} in the small still picture far far away, perfectly safe, after the end, did you ever think what does a war movie turns into, when you run it in reverse?

[diihWjg0lAM](YtEmbedd)

I just heard it in a seminar the other day, and it made perfect sense to me.

The flames of destruction would package themselves back into bombs, which would return to the plane, which will return to the base and get unpacked.

All the weapons and ammunition get shipped back to the factories to be dissambeled to raw materials.

Soldiers would go back home, kiss their partners, hug their loved ones.

Did you ever think of that?
`}
            />
            <Answers
              answers={[
                {
                  onClick: onNext,
                  text:
                    "haven't thought of that before, it's actually quite interesting ...",
                },
                { onClick: onNext, text: 'yes I have' },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
now in a moment I'll ask you do to something interesting, and don't do it until I tell you to, ok?

I will want you to step inside the end of the memory, into your own body at ${age} years old, perfectly safe, so you see what you saw at the time, hear what you heard and ...

run the memory in reverse as fast as you can, all the way to before the beginning, where your perfectly safe again.

so you hear everyone talking backwards, see everything and everyone moving backwards in reverse, as fast as you can.

(yes you guessed it, like a cartoon)

We gonna do it this way one time, then add some nice decorations :)

So here are the steps again:


1. step inside the end of the memory, into your own body at ${age} years old, perfectly safe

2. see what you saw at the time, hear what you heard

3. run the memory in reverse as fast as you can, hear everyone talking backwards, see everything and moving backwards in reverse, as fast as you can, like a cartoon, all the way to before the beginning, where your perfectly safe again

<br />

Close your eyes and do it now, let me know when you're done
`}
            />
            <Answers
              answers={[
                { onClick: onNext, text: 'Done and done!' },
                { onClick: onNext, text: 'I ran the memory in reverse' },
                { onClick: onNext, text: 'Did it, that was funky!' },
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Your back?

Great!

Now let's make it even better.

I want you to do the same thing, but this time add a nice / funny tune in your mind as you run the memory in reverse.

For most people circus theme song works magic:

[1D5Sa2Yq-2g](YtEmbedd)

U can use ANYTHING you want that makes you laugh, feel silly, powerful, curious, whatever it is.

Some people like to hear a certain comedian. For others a certain song make them vibrate with inner power.

And of course there's always laughter :)

[yLmd0100T9g](YtEmbedd)

Pick one that makes you feel the best now and do it again like so:


1. step inside the end of the memory, into your own body at ${age} years old, perfectly safe

2. see what you saw at the time, hear what you heard

3. start the circus music or any other tune you picked

4. run the memory in reverse as fast as you can, hear everyone talking backwards (yes you guessed it, like a cartoon), see everything and everyone moving backwards in reverse, as fast as you can, like a cartoon, all the way to before the beginning, where your perfectly safe again

<br />

let me know when you're done, and your at the beginning of the memory, perfectly safe
`}
            />
            <Answers
              answers={[
                { onClick: onNext, text: 'Done and done!' },
                { onClick: onNext, text: "It's even better with the tune!" },
                { onClick: onNext, text: 'Did it, that was funky!' },
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Back again?

Brilliant!

now, did you ever think about what's bigger or a tree in twelve different colors?

Silly, I know, I just wanted to distract you from a moment before the next piece :)
`}
            />
            <Answers
              answers={[
                { onClick: onNext, text: 'haha that was funny' },
                { onClick: onNext, text: 'lol' },
                {
                  onClick: onNext,
                  text: "show me the next piece, I'm ready for ...",
                },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Think about that same old memory from your past and try in vain to feel the same way about it as before.

U might be surprised to find it's not as easy anymore ;)
                
`}
            />
            <Answers
              answers={[
                { onClick: onNext, text: 'This is great! I feel good!' },
                { onClick: feelWorse, text: 'I feel worse' },
                {
                  onClick: onNext,
                  text: 'lol, I actually feel good about this wtf?!',
                },
                { onClick: onFeelTheSame, text: 'I feel exactly like before' },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
and how good do you feel now, as you learn, that you can learn to feel better and better about what it is that used to affect in a way you no longer wish?

1-10, how good do you feel now?

and notice, it's interesting to notice you can not only notice where in your body you feel the good feeling first,

now,

can feel the good feeling flowing next, and when you can feel the good feeling where it feels absolutely the best.

And if this feeling had a color, and what color would it have?

Describe that feeling as vividly as you can


`}
            />
            <textarea
              style={{ marginBottom: 40 }}
              className="textarea"
              placeholder="I feel good first in my ... and it's like ... and it spreads/flows to ... in the color of ..."
            />
            <Answers
              answers={[
                { onClick: onNext, text: "That's so interesting ..." },
                {
                  onClick: onNext,
                  text: 'I wonder what else I can do with this ...',
                },
                <FbShareLink>
                  This is great, must inform the others!
                </FbShareLink>,
                { onClick: onNext, text: "Let's continue!" },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Isn't it cool you can learn so fast? [know others](FB_SHARE) that can enjoy that as well?

or you want to do it again on another memory first?
                `}
            />
            <Answers
              answers={[
                {
                  onClick: onRestart,
                  text: 'I want to do it again on the same memory!',
                },
                {
                  onClick: onRestart,
                  text: 'I want to do it again on a different memory!',
                },
                <FbShareLink>I want more to experience this!</FbShareLink>,
                <Link to="/i-dont-charge-i-accept/">
                  This is great and I want to give back
                </Link>,
              ]}
            />
            <Markdown
              className="tool-source"
              source={`
Source: I've adapted this [tool](/tools/) from Bandler's trauma process, see [Heart of the Mind](http://amzn.to/2xFE4yX) chapter 7 for more info.
                `}
            />
          </div>,
        ].map(renderStep)}
      </div>
    )
  }
}

export default TraumaRelief
