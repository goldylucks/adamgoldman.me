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
export const description = 'A slight alteration for the reverse spin, used for the same things'

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
      back,
      dontUnderstand,
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
              answers={[
                { text: "so how's this going to work?", onClick: onNext },
                dontUnderstand,
                back,
              ]}
            />
          </div>,
          <HowItsGoingToWorkStep
            onNext={onNext}
            dontUnderstand={dontUnderstand}
            back={back}
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
              answers={[
                { text: 'tell you what Adam?', onClick: onNext },
                { text: "let's continue", onClick: onNext },
                dontUnderstand,
                back,
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
pull the feeling out of your body
just for a brief moment
and reverse it
so it spins in the opposite direction
and change the color to a color you like better
and add some sparkles if you like
and pull it back in
so everything is in reverse
and it starts at the end and runs it's
way to the beginning

i.e. if before is started in stomach and moved upwards
to chest, now reverse it so it starts in chest
and move it downwards to stomach, watch the color
change to your liking, and feel the sparkles

Now take a deep breath,
close your eyes,
and do it now
`}
            />
            <Answers
              answers={[
                {
                  text:
                    "change color? check. reverse spin? check. Sparkles? check. let's continue!",
                  onClick: onNext,
                },
                { text: "Done. Let's proceed", onClick: onNext },
                dontUnderstand,
                back,
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
              answers={[
                { text: 'This is amazing! No more Anxiety!', onClick: onNext },
                { text: "Yea that's better", onClick: onNext },
                {
                  text: 'The feeling changed to something new',
                  onClick: onNext,
                },
                dontUnderstand,
                back,
              ]}
            />
            <p>
              btw, if you feel exactly the same,{' '}
              <a onClick={onRestart}>run the process again</a> first, then try
              the <Link to="/tools/reverse-feeling-spin/">
                other version
                  </Link>{' '}
              of the reverse spin.
            </p>
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
                <Link to="/tools/reverse-feeling-spin">
                  I want to try the other version of the reverse spin
                </Link>,
                dontUnderstand,
                back,
              ]}
            />
            <Markdown
              className="tool-source"
              source={`
Source: I've adapted this [tool](/tools/) from Bandler's reverse feeling spin process, see [Get The Life You Want](http://amzn.to/2yl6wrO) for more info.
                `}
            />
          </div>,
        ].map(renderStep)}
      </div>
    )
  }
}

export default SomeTool
