// @flow
/* eslint max-len: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */
/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'

import Link from '../components/Link'
import FbShareLink from '../components/FbShareLink'
import Markdown from '../components/Markdown'
import HowItsGoingToWorkStep from '../routes/brainTool/components/HowItsGoingToWorkStep'
import Answers from '../routes/brainTool/components/Answers'
import type { Props } from '../routes/brainTool/components/toolPageProps'

export const tags = ['Anxiety', 'Panic Attack', 'Depression']
export const stepCount = 9
export const title = 'Reverse Feeling Spin'
export const nick = 'fear in reverse is ...'
// eslint-disable-next-line prettier/prettier
export const description = 'Turn anxiety, pain, depression, and any unwanted feeling to something new'

class SomeTool extends React.Component {
  state = {
    badFeeling: '',
    badFeelingLocation: '',
    badFeelingDescription: '',
    badFeelingColor: '',
  };

  props: Props;

  badFeelingChange = (evt: Object) =>
    this.setState({ badFeeling: evt.target.value });
  badFeelingLocationChange = (evt: Object) =>
    this.setState({ badFeelingLocation: evt.target.value });
  badFeelingDescriptionChange = (evt: Object) =>
    this.setState({ badFeelingDescription: evt.target.value });
  badFeelingColorChange = (evt: Object) =>
    this.setState({ badFeelingColor: evt.target.value });

  render() {
    const {
      renderStep,
      onRestart,
      onUserInputSubmit,
      onNext,
    } = this.props
    const {
      badFeeling,
      badFeelingLocation,
      badFeelingDescription,
      badFeelingColor,
    } = this.state
    return (
      <div>
        {[
          <div>
            <Markdown
              className="tool-text"
              source={`
First we gonna identify the bad feeling,
then take some control over it,
turn it to something else,
and explore some new possibilities,
and if this is first time your using any of my tools, you're probably wondering ...
`}
            />
            <Answers
              onNext={onNext}
              noBack
              answers={[
                { text: "so how's this going to work?", onClick: onNext },
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
as I'm very intuitive, 
I guess that up until this point you
have experienced this unwanted feeling
on a number of occasions.

Bring one of these times to mind now,
and tell me...
`}
            />
            <Answers
              onNext={onNext}
              answers={[
                { text: 'tell you what Adam?', onClick: onNext },
                { text: "let's continue", onClick: onNext },
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
which kind of a bad feeling is it?
(i.e. anxiety, sadness, fear etc)
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={badFeeling}
                onChange={this.badFeelingChange}
                className="input"
                placeholder="It's a feeling of ..."
              />
              <button className="button">Done. Let&apos;s continue</button>
            </form>
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
In a moment I'll ask you to
close your eyes so that
u can attend more completely to your feelings, and
as you do so, I want you to
think about one of these situations now,
and notice where do you first notice the
feeling physically in your body?

Close your eyes and do it now
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={badFeelingLocation}
                onChange={this.badFeelingLocationChange}
                className="input"
                placeholder="I first feel it in my ..."
              />
              <button className="button">Done. Let&apos;s continue</button>
            </form>
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
now I want you to teach me to
make the same feeling, and
how would you describe it to me?
be as specific as you can, especially note:

- where does it start
- which direction does it move
- which "stops" it has along the way
- what's it's shape and size
- Which way does the feeling spin/spirals as it goes along this path (most important!)
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <textarea
                value={badFeelingDescription}
                onChange={this.badFeelingDescriptionChange}
                className="textarea"
                placeholder="I first feel it in my ... and it\'s like ... it moves to ... it spirals like ..."
              />
              <button className="button">Done. Let&apos;s continue</button>
            </form>
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Now if this feeling would have a color, and what color does
${badFeeling} has, as

*${badFeelingDescription}*

(yes I know, it's a bit of a whacky question, but just as useful ...)
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={badFeelingColor}
                onChange={this.badFeelingColorChange}
                className="input"
                placeholder="The color is ..."
              />
              <button className="button">Done. Let&apos;s continue</button>
            </form>
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
good
now
here's what I want you to do
in a moment I'm gonna ask u
to take a deep breath,
close your eyes and
reverse the direction of spin/spiral,
change the color to a color you like better,
and add sparkles to it,
and find out what happens.

Now take a deep breath,
close your eyes,
and do it now
`}
            />
            <Answers
              onNext={onNext}
              answers={[
                {
                  text:
                    "change color? check. reverse spin? check. Sparkles? check. let's continue!",
                  onClick: onNext,
                },
                { text: "Done. Let's proceed", onClick: onNext },
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
wonderful, as you spin it faster and faster in the new direction,
and allow the new color to spread, notice if there's
anything still left from the old feeling of ${badFeeling},
and how much better do you feel now?
`}
            />
            <Answers
              onNext={onNext}
              answers={[
                { text: 'This is amazing! No more Anxiety!', onClick: onNext },
                { text: "Yea that's better", onClick: onNext },
                {
                  text: 'The feeling changed to something new',
                  onClick: onNext,
                },
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
How interesting you can
learn to learn to turn around
your feelings as well as fast
into something new
(dare I say exciting/intruging?)
just like that, by playing with
colors and sensations?

by now you might realize you can begin to imagine what
it is that's more in your body you did not explore yet
u will be surprised how much more is yet to come as
u open to more and more possibilties now...
`}
            />
            <Answers
              onNext={onNext}
              answers={[
                <FbShareLink>
                  This is beneficial and I want more to experience this
                </FbShareLink>,
                {
                  text: "Let's do it again on the same feeling!",
                  onClick: onRestart,
                },
                <Link to="/i-dont-charge-i-accept/">
                  I feel much better, I want to give back
                </Link>,
                {
                  text: "Let's do it again on a different feeling!",
                  onClick: onRestart,
                },
                <Link to="/tools/reverse-feeling-spin2">
                  I want to try the other version of the reverse spin
                </Link>,
              ]}
            />
            <Markdown
              className="tool-source"
              source={`
Source: I've adapted this [tool](/tools/) from Bandler's reverse feeling spin process, adjusted by Nick Kemp, see [this article](http://realpeoplepress.com/blog/some-great-new-methods) for more info.
                `}
            />
          </div>,
        ].map(renderStep)}
      </div>
    )
  }
}

export default SomeTool
