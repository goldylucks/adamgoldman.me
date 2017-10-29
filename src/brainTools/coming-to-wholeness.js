// @flow
/* eslint max-len: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react';
import Link from '../components/Link';

import FbShareLink from '../components/FbShareLink';
import Markdown from '../components/Markdown';

import Answers from '../routes/brainTool/components/Answers';
import type { Props } from '../routes/brainTool/components/toolPageProps';

export const stepCount = 22;
export const title = 'Coming To Wholeness';
export const IS_DRAFT = true;
export const nick = 'whole';
// eslint-disable-next-line prettier/prettier
export const description = `A PRACTICAL step by step tool for non "enlightment"`;

const format = str =>
  str &&
  str
    .replace(/my(?![a-zA-Z])/g, 'your')
    .replace(/me(?![a-zA-Z])/g, 'you')
    .trim();

class ComingToWholeness extends React.Component {
  state = {
    experience: '',
    feel: '',
    feelingLocation: '',
    feelingShapeSize: '',
    feelingSensationQuality: '',
    nextILocation: '',
    nextISizeShape: '',
    nextISensationQuality: '',
    nextIDissolvingDescription: '',
    firstFeelingIntegrationDescription: '',
    firstFeelingCompareAnswer: '',
    initialContextBeingThisWayAnswer: '',
    initialContextBeingThisWayInThePastAnswer: '',
    initialContextBeingThisWayInTheFutureAnswer: '',
    isFirstTimeInFindingIsLocation: true,
    isSecondTimeInFindingIsLocation: false,
    Is: [],
  };

  experienceChange = evt => this.setState({ experience: evt.target.value });
  feelChange = evt => this.setState({ feel: evt.target.value });
  feelingLocationChange = evt =>
    this.setState({ feelingLocation: evt.target.value });
  feelingShapeSizeChange = evt =>
    this.setState({ feelingShapeSize: evt.target.value });
  feelingSensationQualityChange = evt =>
    this.setState({ feelingSensationQuality: evt.target.value });

  nextILocationChange = evt =>
    this.setState({ nextILocation: evt.target.value });

  nextISizeShapeChange = evt =>
    this.setState({ nextISizeShape: evt.target.value });

  nextISensationQualityChange = evt =>
    this.setState({ nextISensationQuality: evt.target.value });

  nextIDissolvingDescriptionChange = evt =>
    this.setState({ nextIDissolvingDescription: evt.target.value });

  firstFeelingIntegrationDescriptionChange = evt =>
    this.setState({ firstFeelingIntegrationDescription: evt.target.value });
  props: Props;

  firstFeelingCompare = str =>
    this.setState({ firstFeelingCompareAnswer: str }, this.props.onNext());

  initialContextBeingThisWay = str =>
    this.setState(
      { initialContextBeingThisWayAnswer: str },
      this.props.onNext(),
    );

  initialContextBeingThisWayInThePast = str =>
    this.setState(
      { initialContextBeingThisWayInThePastAnswer: str },
      this.props.onNext(),
    );
  initialContextBeingThisWayInTheFuture = str =>
    this.setState(
      { initialContextBeingThisWayInTheFutureAnswer: str },
      this.props.onNext(),
    );

  submitILocation = evt => {
    evt.preventDefault();
    this.setState({
      Is: this.state.Is.concat({ location: this.state.nextILocation }),
    });
    this.props.onNext();
  };

  submitISizeShape = evt => {
    evt.preventDefault();
    const nextIs = [...this.state.Is];
    nextIs[nextIs.length - 1].sizeShape = this.state.nextISizeShape;
    this.setState({ Is: nextIs });
    this.props.onNext();
  };

  // remove I from the array, since "submit I Location" will push a new one
  ISizeShapeStepBack = () => {
    const nextIs = [...this.state.Is];
    nextIs.pop();
    this.setState({ Is: nextIs });
  };

  submitISensationQuality = evt => {
    evt.preventDefault();
    const nextIs = [...this.state.Is];
    nextIs[
      nextIs.length - 1
    ].sensationQuality = this.state.nextISensationQuality;
    this.setState({ Is: nextIs });
    this.props.onNext();
  };

  confirmIDecliningInvitation = () => {
    const {
      isFirstTimeInFindingIsLocation,
      isSecondTimeInFindingIsLocation,
    } = this.state;
    if (isFirstTimeInFindingIsLocation) {
      this.setState({
        isFirstTimeInFindingIsLocation: false,
        isSecondTimeInFindingIsLocation: true,
      });
    } else if (isSecondTimeInFindingIsLocation) {
      this.setState({ isSecondTimeInFindingIsLocation: false });
    }
    this.setState({
      nextILocation: '',
      nextISizeShape: '',
      nextISensationQuality: '',
    });
    this.props.onBack(4);
  };

  allowCompleteIntegration = () => {
    const nextIs = [...this.state.Is];
    nextIs.pop();
    this.setState({
      Is: nextIs,
      nextIDissolvingDescription: '',
    });
    if (nextIs.length) {
      this.props.onNext();
      return;
    }
    this.props.onNext(3);
  };

  previousICompare = str =>
    this.setState({ previousICompareAnswer: str }, this.props.onNext());

  lastI() {
    return this.state.Is[this.state.Is.length - 1] || {}; // empty object to avoid undefined errors
  }

  INumberInWords(add = 0) {
    const n = this.state.Is.length + add;
    if (n === 1) return 'First';
    if (n === 2) return 'Second';
    if (n === 3) return 'Third';
    if (n === 4) return 'Fourth';
    if (n === 5) return 'Fifth';
    if (n === 6) return 'Sixth';
    if (n === 7) return 'Seventh';
    if (n === 8) return 'Eigth';
    if (n === 9) return 'Ninth';
    if (n === 10) return 'Tenth';
    return `${n}th`;
  }

  render() {
    const {
      renderStep,
      onShareWithAdam,
      onUserInputSubmit,
      onRestart,
      onNext,
      back,
      onBack,
      dontUnderstand,
      Next,
    } = this.props;
    const {
      experience,
      feel,
      feelingLocation,
      feelingShapeSize,
      feelingSensationQuality,
      nextILocation,
      nextISizeShape,
      nextISensationQuality,
      nextIDissolvingDescription,
      firstFeelingIntegrationDescription,
      firstFeelingCompareAnswer,
      initialContextBeingThisWayAnswer,
      initialContextBeingThisWayInThePastAnswer,
      initialContextBeingThisWayInTheFutureAnswer,
      isFirstTimeInFindingIsLocation,
      isSecondTimeInFindingIsLocation,
      previousICompareAnswer,
    } = this.state;
    return (
      <div>
        {[
          <div>
            <Markdown
              className="tool-text"
              source={`
## Background

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
## Choose Experience

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
## Initial Feeling

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
## Initial Feeling - location

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
## Initial Feeling - Size & Shape

And *${format(feelingLocation)}* ...

And when it's *${format(
                feelingLocation,
              )}*, and it's a *${feel}* feeling, notice it's size & shape, when it's *${format(
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
## Initial Feeling - Sensation Quality

And *${format(feelingShapeSize)}* ...

And when it's *${format(feelingShapeSize)}*, and it's *${format(
                feelingLocation,
              )}*, **what's it's sensation quality?**

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
## Noticing Awareness

And *${format(feelingSensationQuality)}*....

And when it's *${format(feelingSensationQuality)}*, you can recognize,

*I am aware of this ${format(
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
## Experiencing Practical Awareness

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
## ${this.INumberInWords(1)} "I" - Location


${!isFirstTimeInFindingIsLocation
                ? ''
                : `
Now with [your permission](TITLE_or_without_it,_I'm_running_the_show_here_;\\)) let’s return to this statement, *“I am aware of this ${format(
                    feelingSensationQuality,
                  )} sensation ${format(feelingLocation)}”* ...

Where is the "I", that is aware of this sensation...? Where is this "I" located?

I know it's probably a strange question, but a useful one nonetheless, and you can just notice whatever location comes to mind.

It might be somewhere in your head, body, or outside your head or body somewhere.

And what location do you notice?

Another way of experiencing this is asking *“Where is the perceiving happening from?”*

E.g.*"it's in front of me, pretty close, slightly to the right"*
`}


${!isSecondTimeInFindingIsLocation
                ? ''
                : `
So where is the ‘I’ that notices this? ...

Again it's a weird question, but you have a bit more experience with this right now

Where is the perceiving of this happening from?
E.g.*"it's further away, about 2 meters slightly above eye level"*
`}


${isFirstTimeInFindingIsLocation || isSecondTimeInFindingIsLocation
                ? ''
                : `
So where is the ‘I’ that notices this? ...

Where is the perceiving of this happening from?  
`}

`}
            />
            <form onSubmit={this.submitILocation} className="tool-form">
              <input
                value={nextILocation}
                onChange={this.nextILocationChange}
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
                
## ${this.INumberInWords()} "I" - Size & Shape

And *${format(nextILocation)}* ...

And when it's *${format(
                nextILocation,
              )}*, **what is the size & shape of this ‘I’**, when it's *${format(
                nextILocation,
              )}*?
`}
            />
            <form onSubmit={this.submitISizeShape} className="tool-form">
              <input
                value={nextISizeShape}
                onChange={this.nextISizeShapeChange}
                placeholder="It’s ..."
                className="input"
                required
              />
              <button className="button">let&apos;s continue</button>
            </form>
            <Answers
              answers={[
                dontUnderstand,
                { text: 'back', onClick: this.ISizeShapeStepBack },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## ${this.INumberInWords()} "I" - Sensation Quality

And *${format(nextISizeShape)}* ...

And when it's *${format(nextISizeShape)}*, and it's *${format(
                nextILocation,
              )}*, **what's the sensation quality** of this *${format(
                nextISizeShape,
              )}* that’s *${format(nextILocation)}*?

E.g foggy, clear, dense, or empty, heavy, light, vibrating, still, etc.
`}
            />
            <form onSubmit={this.submitISensationQuality} className="tool-form">
              <input
                value={nextISensationQuality}
                onChange={this.nextISensationQualityChange}
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
## ${this.INumberInWords()} "I" - Inviting Integration

And ${nextISensationQuality} ...

And when this ‘I’ is ${format(nextILocation)} ...

and ${format(nextISensationQuality)} ...

Does the sensation of this ‘I’ welcome the invitation to open and relax as the fullness of Awareness?

Some people prefer to notice what happens when the fullness of Awareness... all of consciousness... is invited to flow in and as... the sensation ${format(
                nextILocation,
              )}.

Or, it may feel like the Awareness already present in ${format(
                nextILocation,
              )}, wakes up to itself.

It matters less if the answer is ‘Yes’ or ‘No’, It just tells us what to do next.
`}
            />

            <Answers
              answers={[
                <Next>No</Next>,
                {
                  text: 'Yes',
                  onClick: () => {
                    onNext(2);
                  },
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
## ${this.INumberInWords()} "I" - Acknolwedging

And no ...

And you just noticed the sensation here - **${this.lastI()
                .location}** -  doesn’t welcome the invitation to open and relax, right?
      `}
            />
            <Answers
              answers={[
                { text: `Correct`, onClick: this.confirmIDecliningInvitation },
                {
                  text: `Right, the sensation - ${this.lastI()
                    .location} - doesn't welcome the invitationto open and relax`,
                  onClick: this.confirmIDecliningInvitation,
                },
                <Next>Actually it does accept the invitation now</Next>,
                dontUnderstand,
                back,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## ${this.INumberInWords()} "I" - Experiencing Integration

And yes ...

And notice what happens, when the sensation of the ‘I’ is invited to open and relax ...

as the fullness of Awareness ...

There can be a gentle sensing into the sensation in this location, and an allowing this opening and relaxing to happen in its own way. You are not really doing anything, just sensing how it occurs on its own.

And what happens?
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={nextIDissolvingDescription}
                onChange={this.nextIDissolvingDescriptionChange}
                className="input"
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
## ${this.INumberInWords()} "I" - Allowing Complete Integration

And *${format(nextIDissolvingDescription)}* ...

And if you are experiencing a relaxing, melting, or dissolving, just stay with it until things settle. Enjoy the sense of relaxation, peace or flow as long as you like.
`}
            />
            <Answers
              answers={[
                {
                  text: "I'm experiencing more relaxing ...",
                  onClick: this.allowCompleteIntegration,
                },
                {
                  text: "I'm experiencing more melting ...",
                  onClick: this.allowCompleteIntegration,
                },
                {
                  text: "I'm experiencing more dissolving ...",
                  onClick: this.allowCompleteIntegration,
                },
                {
                  text: 'I feel the integration is complete ...',
                  onClick: this.allowCompleteIntegration,
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
## Circling Back - Previous I

Now let's check with the ‘I’ that was ${format(this.lastI().location)}.

First notice, is it the same as it was before, or is it a little bit different? Either is fine.
      `}
            />
            <Answers
              answers={[
                {
                  text: "It's exactly the same as before",
                  onClick: () =>
                    this.previousICompare('exactly the same as before'),
                },
                {
                  text: "It's a bit different than before",
                  onClick: () =>
                    this.previousICompare('a bit different than before'),
                },
                {
                  text: "It's very different than before",
                  onClick: () =>
                    this.previousICompare('very different than before'),
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
## Circling Back - Previous I - Inviting Integration

And It's ${previousICompareAnswer} ...

And now notice what happens, when this sensation of this "I" here - ${format(
                this.lastI().location,
              )} - is invited to open and relax ... as the fullness of Awareness ... There can be an allowing of this to happen in its own way.  

Does the sensation of this ‘I’ welcome the invitation to open and relax as the fullness of Awareness?

You might prefer to notice what happens when the fullness of Awareness... all of consciousness... is invited to flow in and as... the sensation ${format(
                this.lastI().location,
              )}.

Or, it may feel like the Awareness already present in ${format(
                this.lastI().location,
              )}, wakes up to itself.

It matters less if the answer is ‘Yes’ or ‘No’, It just tells us what to do next.
`}
            />

            <Answers
              answers={[
                { text: 'Yes', onClick: () => onBack(3) },
                { text: 'No', onClick: () => onBack(4) },
                dontUnderstand,
                back,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Circling Back - Where We Started

Now let’s return to the area that you started with, *${format(
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
                    this.firstFeelingCompare('exactly the same as before'),
                },
                {
                  text: 'a bit different than before',
                  onClick: () =>
                    this.firstFeelingCompare('a bit different than before'),
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
## Circling Back - Inviting Integration

And ${firstFeelingCompareAnswer} ...

And notice what happens when this sensation ${format(
                feelingLocation,
              )} is invited to open and relax ... as all of Awareness.

Another way to experience it is notice what happens when the fullness of Awareness..., all of consciousness..., is invited to flow in and as... the sensation ${format(
                feelingLocation,
              )}.

Or, it may feel like the Awareness already present in ${format(
                feelingLocation,
              )}, wakes up to itself.

Now there is just an allowing of whatever happens. You can enjoy this experience as long as you like, and share what happens or how you feel:
`}
            />

            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={firstFeelingIntegrationDescription}
                onChange={this.firstFeelingIntegrationDescriptionChange}
                className="input"
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
## Circling Back - Initial Context

And ${firstFeelingIntegrationDescription} ...

Being this way, with the I’s and the feeling integrated with Awareness ...

Notice what is it like now, when you imagine being in a situation where *${format(
                experience,
              )}* ...

What is it like, being this way?
`}
            />
            <Answers
              answers={[
                {
                  text: 'I feel more at ease',
                  onClick: () =>
                    this.initialContextBeingThisWay('more at ease'),
                },
                {
                  text: "It's more neutral",
                  onClick: () =>
                    this.initialContextBeingThisWay('more at neutral'),
                },
                {
                  text: 'I feel more resourceful',
                  onClick: () =>
                    this.initialContextBeingThisWay('more resourceful'),
                },
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
## "Being This Way" In The Past

And ${initialContextBeingThisWayAnswer} ...

And check how it is being this way in two situations in the past of *${experience.trim()}*
`}
            />
            <Answers
              answers={[
                {
                  text: 'I feel more at ease',
                  onClick: () =>
                    this.initialContextBeingThisWayInThePast('more at ease'),
                },
                {
                  text: "It's more neutral",
                  onClick: () =>
                    this.initialContextBeingThisWayInThePast('more at neutral'),
                },
                {
                  text: 'I feel more resourceful',
                  onClick: () =>
                    this.initialContextBeingThisWayInThePast(
                      'more resourceful',
                    ),
                },
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
## "Being This Way" In The Future

And ${initialContextBeingThisWayInThePastAnswer} ...

And check how it is being this way in three more future scenarios of *${experience.trim()}*
`}
            />
            <Answers
              answers={[
                {
                  text: 'I feel more at ease',
                  onClick: () =>
                    this.initialContextBeingThisWayInTheFuture('more at ease'),
                },
                {
                  text: "It's more neutral",
                  onClick: () =>
                    this.initialContextBeingThisWayInTheFuture(
                      'more at neutral',
                    ),
                },
                {
                  text: 'I feel more resourceful',
                  onClick: () =>
                    this.initialContextBeingThisWayInTheFuture(
                      'more resourceful',
                    ),
                },
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
## Rejoicing Learning

And ${initialContextBeingThisWayInTheFutureAnswer} ...

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
