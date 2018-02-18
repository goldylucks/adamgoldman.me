// @flow
/* eslint max-len: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react'

import Link from '../components/Link'
import FbShareLink from '../components/FbShareLink'
import Markdown from '../components/Markdown'
import AnswersV2 from '../routes/tutorial/components/Answers-v2'
import HowItsGoingToWorkStep from '../routes/tutorial/components/HowItsGoingToWorkStep'
import type { Props } from '../routes/tutorial/components/toolPageProps'

export const stepCount = 10
export const title = 'Internal Dialog Scrambeler'
export const nick = 'what if, if what?'
// eslint-disable-next-line prettier/prettier
export const description = 'Stop recurring intrusive thoughts and limiting beliefs. Perfect for "what if\'s, "I\'m not good enough", and all that lovely things we said to ourselves'

class InternalDialogScrambler extends React.Component {
  state = {
    flashingWord: '',
    phrase: '',
    doneFlashing: false,
    doneFlashingSlower: false,
  };

  props: Props;

  render() {
    const {
      onRestart,
      renderStep,
      onUserInputSubmit,
      onNext,
    } = this.props

    const {
      doneFlashing,
      doneFlashingSlower,
      flashingWord,
      phrase,
    } = this.state

    return (
      <div>
        {[
          <div>
            <Markdown
              className="tool-text"
              source={`
So there are some things you say to yourself over and over that don't make you feel the way you want yet, some of the most common ones are:

- *what if ...*
- *I'm not good enough*
- *you don't deserve ...*  

<br />

and before we turn this around you might wonder ...                 
            `}
            />
            <AnswersV2
              onNext={onNext}
              noBack
              answers={[
                { text: 'How is this going to work?', onClick: onNext },
              ]}
            />
          </div>,
          <HowItsGoingToWorkStep onNext={onNext} />,
          <div>
            <Markdown
              className="tool-text"
              source="Pick one the things you say to yourself which make you feel not the way you want, and write it here: "
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                className="form-control"
                placeholder="the phrase I say to myself is ..."
                value={phrase}
                onChange={this.onPhraseChange}
                required
              />
              <button className="btn btn-primary">Let&apos;s continue</button>
            </form>
            <AnswersV2
              onNext={onNext}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
So the phrase you have said to yourself is, 

*${phrase}*

When you have said this to yourself, do you say it in your normal conversational speaking voice, or is it said at a faster tempo? 
            `}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                { text: 'normal tempo', onClick: onNext },
                { text: 'fast tempo', onClick: onNext },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
say this phrase exactly as you have done to date and notice how you feel in response to doing so 
            `}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <textarea
                className="form-control"
                placeholder="when I say this phrase to myself at normal tempo I feel ..."
                required
              />
              <button className="btn btn-primary" style={{ margin: '20px 0 80px' }}>
                Done describing to date
              </button>
            </form>
            <AnswersV2
              onNext={onNext}
            />
          </div>,

          <div>
            <div className="tool-text">
              <Markdown
                source={`
  Now I'm going to flash the phrase on the screen at a certain tempo, and for now just notice the speed, don't do anything else.

  # ${flashingWord}
  `}
              />
              <button
                className="btn btn-primary"
                style={
                  !flashingWord && !doneFlashing
                    ? { display: 'block' }
                    : { display: 'none' }
                }
                onClick={this.flash}
              >
                Flash
              </button>

              <Markdown
                source={`
${doneFlashing
                  ? "now say this phrase out loud at the same speed I've just flashed it and notice what's different"
                  : ''}
`}
              />
            </div>
            <div
              style={doneFlashing ? { display: 'block' } : { display: 'none' }}
            >
              <AnswersV2
                onNext={onNext}
                answers={[
                  {
                    text:
                      "I've said the phrase to myself in that speed, what's next?",
                    onClick: onNext,
                  },
                  { text: "that's much better", onClick: onNext },
                  { text: 'flash me again', onClick: this.flash },
                ]}
              />
            </div>
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Describe the difference between the way you used to say it to yourself until now, and saying it to yourself like you do now:
            `}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <textarea
                className="form-control"
                placeholder="as I'm saying it to myself now I notice the difference is ..."
                required
              />
              <button className="btn btn-primary" style={{ margin: '20px 0 80px' }}>
                Done describing the difference
              </button>
            </form>
            <AnswersV2
              onNext={onNext}
            />
          </div>,

          <div>
            <div className="tool-text">
              <Markdown
                source={`
Oddly enough, now I'm going to flash the phrase on the screen even slower, and for now just notice the speed, don't do anything else.

# ${flashingWord}
  `}
              />
              <button
                className="btn btn-primary"
                style={
                  !flashingWord && !doneFlashingSlower
                    ? { display: 'block' }
                    : { display: 'none' }
                }
                onClick={this.flashSlower}
              >
                Flash
              </button>

              <Markdown
                source={`
${doneFlashingSlower
                  ? "now say this phrase out loud at the same speed I've just flashed it and notice what's different"
                  : ''}
`}
              />
            </div>
            <div
              style={
                doneFlashingSlower ? { display: 'block' } : { display: 'none' }
              }
            >
              <AnswersV2
                onNext={onNext}
                answers={[
                  { text: "that's even better", onClick: onNext },
                  { text: "It's almost laughable now", onClick: onNext },
                  { text: 'flash me again', onClick: this.flashSlower },
                ]}
              />
            </div>
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`              
Describe the difference between the way you used to say it to yourself until now, and saying it to yourself like you do now:
            `}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <textarea
                className="form-control"
                placeholder="as I'm saying it to myself now I notice the difference is ..."
                required
              />
              <button className="btn btn-primary" style={{ margin: '20px 0 80px' }}>
                Done describing the difference
              </button>
            </form>
            <AnswersV2 onNext={onNext} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`              
as you try now to think of this as you used to, what are you noticing that is different?
            `}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                { text: "it's ridiculous now", onClick: onNext },
                { text: "it's much better", onClick: onNext },
                { text: "it's exactly the same", onClick: onNext },
                { text: "it's hummurous, almost laughable!", onClick: onNext },
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`              
Isn't it interesting you can learn to learn to use your brain for a change you want so fast? 
            `}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                <FbShareLink>
                  This is wonderful, I want more to experience this
                </FbShareLink>,
                {
                  text:
                    "This is highly useful, let's do it again on the same phrase",
                  onClick: onRestart,
                },
                {
                  text:
                    "This is highly useful, let's do it again on a different phrase",
                  onClick: onRestart,
                },
                <Link to="/i-dont-charge-i-accept/">
                  I feel much better and want to give back
                </Link>,
              ]}
            />
            <Markdown
              className="tool-source"
              source={`
Source: I've adapted this [tool](/tools/) from Nick Kemp's Internal Tempo Shift process, see [this article](http://realpeoplepress.com/blog/some-great-new-methods) for more info.
                `}
            />
          </div>,
        ].map(renderStep)}
      </div>
    )
  }
  onPhraseChange = (evt: Object) => this.setState({ phrase: evt.target.value });

  flash = () => {
    this.setState({ doneFlashing: false })
    this.state.phrase.split(' ').forEach((w, idx, array) => {
      setTimeout(() => {
        this.setState({ flashingWord: w })
        if (idx !== array.length - 1) {
          return
        }
        setTimeout(() => {
          this.setState({ doneFlashing: true, flashingWord: '' })
        }, 3500)
      }, idx * 3500)
    })
  };

  flashSlower = () => {
    this.setState({ doneFlashingSlower: false })
    this.state.phrase.split(' ').forEach((w, idx, array) => {
      setTimeout(() => {
        this.setState({ flashingWord: w })
        if (idx !== array.length - 1) {
          return
        }
        setTimeout(() => {
          this.setState({ doneFlashingSlower: true, flashingWord: '' })
        }, 5500)
      }, idx * 5500)
    })
  };
}

export default InternalDialogScrambler
