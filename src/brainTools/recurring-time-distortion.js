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

export const stepCount = 12
export const title = 'Recurring Time Distortion'
export const nick = 'time distortion'
// eslint-disable-next-line prettier/prettier
export const description = 'Turn bad time to good time and good time to wonderful time by distorting time subjectively'

// eslint-disable-next-line react/prefer-stateless-function
class RecurringTimeDistortion extends React.Component {
  props: Props;

  render() {
    const {
      renderStep,
      onRestart,
      onGoToStep,
      onUserInputSubmit,
      onNext,
    } = this.props
    return (
      <div>
        {[
          <div>
            <Markdown
              className="tool-text"
              source={`
u know how sometimes you wait in line for half an hour, and you look at the time and less than 10 minutes have gone by? 

or your starving waiting for your meal, about to snap at the poor waiter for torturing you for so long, only to realize just a few minutes have passed? 

on the other hand, when your having fun with that special friend, or see a great movie, it seems like hours turn to minutes, and "where did the time ago???" 

That happens all the time, and the ability to control time at the time you wish is a good recipe to turn bad time to good time, and turn good time to something so wonderful you might have not experienced yet. 

Now before we get you into some whacky states, you might wonder ...
`}
            />
            <Answers
              noBack
              onNext={onNext}
              answers={[
                { text: 'how is it going to work?', onClick: onNext },
              ]}
            />
          </div>,
          <HowItsGoingToWorkStep
            onNext={onNext}
          />,
          <div>
            <Markdown
              className="tool-text"
              source={`
pick a recurring situation you have trouble dealing with i.e. 
going to the bank, dealing with a certain person, etc 
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                placeholder="I have trouble dealing with ..."
                className="input"
                required
              />
              <button className="button">Done choosing category</button>
            </form>
            <Answers onNext={onNext} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Pick aspecific example or a future scenario of that recurring situation (i.e. a specific scenario of you standing in line for the bank, or talking to the teller)
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                placeholder="My scenario is when I ..."
                className="input"
                required
              />
              <button className="button">Done choosing example</button>
            </form>
            <Answers onNext={onNext} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source="run that scenario in your mind in normal time, just as you usually think about it"
            />
            <Answers
              onNext={onNext}
              answers={[
                {
                  text: "I ran the scenario in normal time, what's next?",
                  onClick: onNext,
                },
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
how was it to run the scenario "normally"?
how it feels like?
and how intense is the feeling?              
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <textarea
                placeholder="Running the scenario in normal time makes me feel ..."
                className="textarea"
                required
              />
              <button className="button">Done describing normal time</button>
            </form>
            <Answers onNext={onNext} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
go back to the beginning of the scenario,
freeze the frame,
step inside the beginning of the scenario,
and hear and feel turning down a knob and slow YOURSELF to half speed,
so everything will be running twice as fast in your subjective experience,
and go through the scenario in fast time
i.e. every one in the bank will talk and move twice as fast as u
`}
            />
            <Answers
              onNext={onNext}
              answers={[
                {
                  text: "I ran the scenario in fast time, what's next?",
                  onClick: onNext,
                },
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
how was it to run the scenario in "fast time"?
how it feels like?
and how intense is the feeling?      
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <textarea
                placeholder="Running the scenario in fast time makes me feel ..."
                className="textarea"
                required
              />
              <button className="button">Done describing fast time</button>
            </form>
            <Answers onNext={onNext} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
go back to the beginning of the scenario,
freeze the frame,
step inside the beginning of the scenario,
hear and feel turning up a knob and speed YOURSELF back to normal speed,
then turn the knob further up and speed YOURSELF to double speed,
so everything will be running twice as slow in your subjective experience,
and go through the scenario in slow time
`}
            />
            <Answers
              onNext={onNext}
              answers={[
                {
                  text: "I ran the scenario in slow time, what's next?",
                  onClick: onNext,
                },
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
how was it to run the scenario in "slow time"?
how it feels like?
and how intense is the feeling?      
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <textarea
                placeholder="Running the scenario in slow time makes me feel ..."
                className="textarea"
                required
              />
              <button className="button">Done describing slow time</button>
            </form>
            <Answers onNext={onNext} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
now try and run the same scenario in normal time,
and get the old feeling back, and notice what's different.     
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <textarea
                placeholder="I tried running the scenario in normal time like the beginning and noticed that ..."
                className="textarea"
                required
              />
              <button className="button">Done describing the difference</button>
            </form>
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Isn't it freaky?

for me it changed from negative to "c'mon out with it! let's get it over with!" sort of a comical impatience :)
`}
            />
            <Answers
              onNext={onNext}
              answers={[
                {
                  text:
                    "That's crazy, let's do it again on something else that used to bother me!",
                  onClick: onRestart,
                },
                <FbShareLink>
                  This is great we must inform the others!
                </FbShareLink>,
                {
                  text: "I'm ready for advanced stuff (pleasure junkies)",
                  onClick: onNext,
                },
                <Link to="/i-dont-charge-i-accept/">
                  This is great, I want to give back!
                </Link>,
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
if your an ectasy junky like [me](/who-am-i-anyway/), love this you will ...)

repeat the entire process for a recurring pleasurable situation.


(this is some trippy shit ...)

I went for juggling and sex,
and juggled between the two,
not necessarily in that order ;)

When your ready, repeat the process, and replace "trouble" with "pleasurable" as you come along              
`}
            />
            <Answers
              onNext={onNext}
              answers={[
                {
                  text: "okay let's intensify some good feelings!",
                  onClick: () => onGoToStep(2),
                },
                <Link to="/i-dont-charge-i-accept/">
                  This is great and I like to give back
                </Link>,
                {
                  text: "Let's change more things that used to bother me!",
                  onClick: () => onGoToStep(2),
                },
                <FbShareLink>
                  This is great we must inform the others!
                </FbShareLink>,
              ]}
            />
            <Markdown
              className="tool-source"
              source={`
Source: I've adapted this [tool](/tools/) from Bandler's time distortion process.
                `}
            />
          </div>,
        ].map(renderStep)}
      </div>
    )
  }
}

export default RecurringTimeDistortion
