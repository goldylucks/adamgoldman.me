// @flow
/* eslint max-len: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react';
import Link from '../components/Link';

import FbShareLink from '../components/FbShareLink';
import Markdown from '../components/Markdown';

import Answers from '../routes/brainTool/components/Answers';
import type { Props } from '../routes/brainTool/components/toolPageProps';

export const stepCount = 18;
export const title = 'Coming To Wholeness';
export const IS_DRAFT = true;
export const nick = 'whole';
// eslint-disable-next-line prettier/prettier
export const description = `A PRACTICAL step by step tool for non "enlightment"`;

const format = str =>
  str
    .replace(/my/g, 'your') // negate instances of "my" NOT followed by space (i.e. watermelon)
    .replace(/me/g, 'you') // negate instances of "me" NOT followed by space (i.e. mercy, merged,)
    .trim();

class ComingToWholeness extends React.Component {
  state = {
    experience: '',
    feel: '',
    feelingLocation: '',
    feelingShapeSize: '',
    feelingSensationQuality: '',
    firstILocation: '',
    firstISizeShape: '',
    firstISensationQuality: '',
    firstIAcceptsInvitation: '',
    firstIDissolvingDescription: '',
    firstFeelingIntegration: '',
    firstFeelingCompareAnswer: '',
  };

  experienceChange = evt => this.setState({ experience: evt.target.value });
  feelChange = evt => this.setState({ feel: evt.target.value });
  feelingLocationChange = evt =>
    this.setState({ feelingLocation: evt.target.value });
  feelingShapeSizeChange = evt =>
    this.setState({ feelingShapeSize: evt.target.value });
  feelingSensationQualityChange = evt =>
    this.setState({ feelingSensationQuality: evt.target.value });
  firstILocationChange = evt =>
    this.setState({ firstILocation: evt.target.value });
  firstISizeShapeChange = evt =>
    this.setState({ firstISizeShape: evt.target.value });
  firstISensationQualityChange = evt =>
    this.setState({ firstISensationQuality: evt.target.value });
  firstIAcceptsInvitationChange = evt =>
    this.setState({ firstIAcceptsInvitation: evt.target.value });
  firstIDissolvingDescriptionChange = evt =>
    this.setState({ firstIDissolvingDescription: evt.target.value });
  firstFeelingIntegrationChange = evt =>
    this.setState({ firstFeelingIntegration: evt.target.value });
  props: Props;

  firstFeelingCompare = str =>
    this.setState({ firstFeelingCompareAnswer: str });

  render() {
    const {
      renderStep,
      onShareWithAdam,
      onUserInputSubmit,
      onRestart,
      letsContinue,
      onNext,
      back,
      dontUnderstand,
      Next,
    } = this.props;
    const {
      experience,
      feel,
      feelingLocation,
      feelingShapeSize,
      feelingSensationQuality,
      firstILocation,
      firstISizeShape,
      firstISensationQuality,
      firstIAcceptsInvitation,
      firstIDissolvingDescription,
      firstFeelingIntegration,
      firstFeelingCompareAnswer,
    } = this.state;
    return (
      <div>
        {[
          <div>
            <Markdown
              className="tool-text"
              source={`
*"enlightment is easy, you just surrender your ego and become a vast self like all the gurus tell you to"* - said no human being, EVER.

If you, like me, are willing to ACTIVELY go after a more complete life, and feeling more "whole", I see no reason this process will not affect you in some memorable way.

If you prefer to meditate until that complete life "arrives", this will not be for you, and you are welcome to [ask me why](FB_MESSAGE).

So are we together on this my friend?
`}
            />
            <Answers
              answers={[
                {
                  text: 'Yes, I want to proactively go after a better life!',
                  onClick: onNext,
                },
                {
                  text: "Makes sense to me, let's continue",
                  onClick: onNext,
                },
                {
                  text: 'I rather wait passively for life to improve',
                  onClick: () =>
                    global.alert(
                      "I wish you all the luck then, hoping you won't need it ;)",
                    ),
                },
                dontUnderstand,
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Good choice!

You'd be surprised how many people "wish" their life to be better, but never go pass that, so I'm glad YOU are in the right direction.

Now, if this is your first time using this tool, you'd benefit most by picking an issue or difficult experience that’s mild to medium intensity.

E.g. Something that pushes your buttons, but really doesn’t hurt anyone.                
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={experience}
                onChange={this.experienceChange}
                className="input"
                placeholder="I want to resolve the experience of ..."
                required
              />
              <button className="button">Let&apos; continue</button>
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Imagine it is happening now ...

*${experience.trim()}*

and notice how you feel in response ...

Describe your response in one short sentence.

(E.g. *“I feel annoyed.”*)
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={feel}
                onChange={this.feelChange}
                className="input"
                placeholder="I feel ..."
                required
              />
              <button className="button">Let&apos; continue</button>
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
And *${feel}* ...

And when you feel *${feel}*, where is this feeling of *${feel}* located, when you feel *${feel}*?

(E.g. “in my chest.”)
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={feelingLocation}
                onChange={this.feelingLocationChange}
                className="input"
                placeholder="It’s ..."
                required
              />
              <button className="button">Let&apos; continue</button>
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
And *${format(feelingLocation)}* ...

And when it's *${format(
                feelingLocation,
              )}*, and it's a *${feel}* feeling, notice it's size and shape, when it's *${format(
                feelingLocation,
              )}*, and it's a *${feel}* feeling.

(E.g. “It’s sort of round and the size of an orange.”)
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={feelingShapeSize}
                onChange={this.feelingShapeSizeChange}
                placeholder="It’s ..."
                className="input"
                required
              />
              <button className="button">let&apos;s continue</button>
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
And it's *${format(feelingShapeSize)}* ...

And when it's *${format(feelingShapeSize)}*, and it's *${format(
                feelingLocation,
              )}*, what is it's sensation quality?

(E.g. “It’s fuzzy and a bit prickly.”)
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={feelingSensationQuality}
                onChange={this.feelingSensationQualityChange}
                placeholder="It’s ..."
                className="input"
                required
              />
              <button className="button">let&apos;s continue</button>
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
And it's *${format(feelingSensationQuality)}*....

And when it's *${format(feelingSensationQuality)}*, you can recognize,

*‘I am aware of this ${format(
                feelingSensationQuality,
              )} sensation, so awareness is present.*
`}
            />
            <Answers
              answers={[
                {
                  text: 'Indeed I can',
                  onClick: onNext,
                },
                {
                  text: `I am aware of this ${format(
                    feelingSensationQuality,
                  )} sensation, so awareness is present`,
                  onClick: onNext,
                },
                dontUnderstand,
                back,
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Now take a moment to experience Awareness ...

By "Awareness" I mean the actual capacity to notice, A.K.A. "be aware" of stuff in and around you, with your senses.

You are aware of these lines with no effort by your part.

You can feel the keyboard or the mouse touching your hand, again with no effort.

You might be aware of some sounds around you right now as we speak, and you might be aware of your own internal voice reading these lines in your mind.

You are aware of the sensation you’ve just been noticing, so awareness is present there, and awareness is also throughout your body and all around.

If someone will talk next to you, would you need any effort to hear it?

If a sound happened on the other side of you, you’d also be aware of it without effort, and even if your eyes are closed, you can notice a sense of space all around you.

When I refer to Awareness, I'm pointing to this capacity to notice, that is throughout the body, and all around. And there isn’t really any edge to it or an end to it. And you can notice this all, simultaneously, right now, kinda like on "autopilot".
`}
            />
            <Answers
              answers={[
                {
                  text: "Yes, I'm aware of all that, and more",
                  onClick: onNext,
                },

                {
                  text: "Yup, awareness is here, what's next?",
                  onClick: onNext,
                },

                dontUnderstand,
                back,
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Now with [your permission](TITLE_or_without_it\,_I\'m_running_the_show_here_;\\)) let’s return to this statement, *“I am aware of this ${format(
                feelingSensationQuality,
              )} sensation in ${format(feelingLocation)}”* ...

Where is the ‘I,’ that is aware of this sensation...? Where is this ‘I’ located?

I know it's probably a strange question, but a useful one nonetheless, and you can just notice whatever location comes to mind.

It might be somewhere in your head, body, or outside your head or body somewhere.

And what location do you notice?

Another way of experiencing this is asking *“Where is the perceiving happening from?”*

i.e. *"it's about 2 meter in front of me, slightly to the right"*
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={firstILocation}
                onChange={this.firstILocationChange}
                placeholder="It’s ..."
                className="input"
                required
              />
              <button className="button">let&apos;s continue</button>
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
And *${format(firstILocation)}* ...

And when it's *${format(
                firstILocation,
              )}*, what is the size and shape of this ‘I’, when it's *${format(
                firstILocation,
              )}*?
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={firstISizeShape}
                onChange={this.firstISizeShapeChange}
                placeholder="It’s ..."
                className="input"
                required
              />
              <button className="button">let&apos;s continue</button>
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
And *${format(firstISizeShape)}* ...

And when it's *${format(firstISizeShape)}*, and it's *${format(
                firstILocation,
              )}*, what's the sensation quality of this *${format(
                firstISizeShape,
              )}* that’s *${format(firstILocation)}*?

E.g foggy, clear, dense, or empty, heavy, light, vibrating, still, etc.
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={firstISensationQuality}
                onChange={this.firstISensationQualityChange}
                placeholder="The sensation quality is ..."
                className="input"
                required
              />
              <button className="button">let&apos;s continue</button>
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
And ${firstISensationQuality} ...

And when this ‘I’ is ${format(firstILocation)} and ${format(
                firstISensationQuality,
              )} ...

Does the sensation of this ‘I’ welcome the invitation to open and relax as the fullness of Awareness?

Some people prefer to notice what happens when the fullness of Awareness... all of consciousness... is invited to flow in and as... the sensation in ${format(
                firstILocation,
              )}.

Or, it may feel like the Awareness already present in ${format(
                firstILocation,
              )}, wakes up to itself.

It matters less if the answer is ‘Yes’ or ‘No’, It just tells us what to do next.
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <select
                value={firstIAcceptsInvitation}
                onChange={this.firstIAcceptsInvitationChange}
                className="select"
                required
              >
                <option value="">Yes / no</option>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
              <button className="button">let&apos;s continue</button>
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
And yes ...

And notice what happens, when the sensation of the ‘I’ is invited to open and relax ...

as the fullness of Awareness ...

There can be a gentle sensing into the sensation in this location, and an allowing this opening and relaxing to happen in its own way. You are not really doing anything, just sensing how it occurs on its own.

And what happens?
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={firstIDissolvingDescription}
                onChange={this.firstIDissolvingDescriptionChange}
                className="textarea"
                placeholder="I feel ..."
                required
              />
              <button className="button">let&apos;s continue</button>
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
And *${format(firstIDissolvingDescription)}* ...

And if you are experiencing a relaxing, melting, or dissolving, just stay with it until things settle. Enjoy the sense of relaxation, peace or flow as long as you like.
`}
            />
            <Answers
              answers={[
                <Next>I&apos;m experiencing more relaxing ...</Next>,
                <Next>I&apos;m experiencing more melting ...</Next>,
                <Next>I&apos;m experiencing more dissolving ...</Next>,
                letsContinue,
                dontUnderstand,
                back,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Now let’s return to the area that you started with, in *${format(
                feelingLocation,
              )}*.

First notice, is the sensation there the same as it was before?

Or is it a little bit different?
`}
            />

            <Answers
              answers={[
                {
                  text: "it's exactly the same as before",
                  onClick: () =>
                    this.firstFeelingCompare("it's exactly the same as before"),
                },
                {
                  text: "it's a bit different than before",
                  onClick: () =>
                    this.firstFeelingCompare(
                      "it's a bit different than before",
                    ),
                },
                {
                  text: "it's very different than before",
                  onClick: () =>
                    this.firstFeelingCompare("it's very different than before"),
                },
                dontUnderstand,
                back,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
And ${firstFeelingCompareAnswer} ...

And notice what happens when this sensation in ${format(
                feelingLocation,
              )} is invited to open and relax ... as all of Awareness.

Another way to experience it is notice what happens when the fullness of Awareness..., all of consciousness..., is invited to flow in and as... the sensation in ${format(
                feelingLocation,
              )}.

Or, it may feel like the Awareness already present in ${format(
                feelingLocation,
              )}, wakes up to itself.

Now there is just an allowing of whatever happens. You can enjoy this experience as long as you like, and share what happens or how you feel:
`}
            />

            <form onSubmit={onUserInputSubmit} className="tool-form">
              <textarea
                value={firstFeelingIntegration}
                onChange={this.firstFeelingIntegrationChange}
                className="textarea"
                placeholder="I feel ..."
                required
              />
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Being this way, with the I’s and the feeling integrated with Awareness ...

Notice what is it like now, when you imagine being in a situation where *${format(
                experience,
              )}* ...

What is it like, being this way?
`}
            />
            <Answers
              answers={[
                <Next>I feel more at ease</Next>,
                <Next>It&apos;s more neutral</Next>,
                <Next>I feel more resourcefull</Next>,
                {
                  text: "It's better but there's still something left",
                  onClick: () =>
                    global.alert(
                      "it's very common for the first time. refresh the page and do the process again, and then contact me, I'll walk you thru it, deal?",
                    ),
                },
                {
                  text:
                    "It's exactly the same as before, I don't percieve any change",
                  onClick: () =>
                    global.alert(
                      "it's very common for the first time. refresh the page and do the process again, and then contact me, I'll walk you thru it, deal?",
                    ),
                },
                dontUnderstand,
                back,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Isn't it great you can learn so fast?

[know others](FB_SHARE) that can enjoy that as well?

or you want to do it again on another issue / experience first?
                `}
            />
            <Answers
              answers={[
                {
                  onClick: onRestart,
                  text: 'I want to do it again on the experience!',
                },
                {
                  onClick: onRestart,
                  text: 'I want to do it again on a different experience',
                },
                <FbShareLink>I want more to experience this!</FbShareLink>,
                <Link to="/i-dont-charge-i-accept/">
                  This is great and I want to give back
                </Link>,
                <Link to={'/tools/'}>
                  Cool! what other brain hacks can you teach me?
                </Link>,
                {
                  text: 'Thank you Adam, can I share with you my experience?',
                  onClick: onShareWithAdam,
                },
                back,
              ]}
            />
            <Markdown
              className="tool-source"
              source={`
Source: I've adapted this [tool](/tools/) from Connirae's [Wholeness Process](http://andreasnlptrainings.com/wholeness/).
                `}
            />
          </div>,
        ].map(renderStep)}
      </div>
    );
  }
}

export default ComingToWholeness;
