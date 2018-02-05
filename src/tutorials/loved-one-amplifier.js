// @flow
/* eslint max-len: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react'

import FbShareLink from '../components/FbShareLink'
import Markdown from '../components/Markdown'
import AnswersV2 from '../routes/tutorial/components/Answers-v2'
import ToolsIntro from '../routes/tutorial/components/ToolsIntro'
import type { Props } from '../routes/tutorial/components/toolPageProps'

export const stepCount = 25
export const title = 'Loved Ones Amplifier'
// eslint-disable-next-line prettier/prettier
export const description = 'Enjoy people you like like never before'
export const nick = 'lovey dovey'

class LovedOnesAmplifier extends React.Component {
  state = {
    lovedOneName: '',
    lovedOneHimHer: '',
    lovedOneHeShe: '',
    lovedOneHisHer: '',
    lovedOneGender: '',
  };

  props: Props;

  lovedOneNameChange = (evt: Object) =>
    this.setState({ lovedOneName: evt.target.value });
  lovedOneGenderChange = (evt: Object) =>
    this.setState({
      lovedOneGender: evt.target.value,
      lovedOneHeShe: evt.target.value === 'male' ? 'he' : 'she',
      lovedOneHimHer: evt.target.value === 'male' ? 'him' : 'her',
      lovedOneHisHer: evt.target.value === 'male' ? 'his' : 'her',
    });

  anotherPerson = () => {
    this.setState({
      lovedOneName: '',
      lovedOneGender: '',
    })
    this.props.onGoToStep(4)
  };
  render() {
    const {
      renderStep,
      name,
      onNameChange,
      myManLady,
      gender,
      onGenderChange,
      onUserInputSubmit,
      onNext,
      letsContinue,
    } = this.props
    const {
      lovedOneName,
      lovedOneGender,
      lovedOneHeShe,
      lovedOneHisHer,
      lovedOneHimHer,
    } = this.state

    return (
      <div>
        {[
          <div>
            <Markdown
              className="tool-text"
              source={`
Imagine you could get a certain dose of ecstasy and good feelings as a side effect of learning to operate your brain in more effective ways.

How awesome would that be?
`}
            />
            <AnswersV2
              onNext={onNext}
              noBack
              answers={[
                { text: "That'd be great!", onClick: onNext },
                {
                  text: "Oh yes please, I'll take some of that!",
                  onClick: onNext,
                },
                {
                  text: "ecstasy and good feelings? sure, I'll have some",
                  onClick: onNext,
                },
              ]}
            />
            <ToolsIntro />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Brilliant.
Am I conversing with a lovely lady or a brave knight?

(or is it brave lady? or lovely knight? whatever you know what I mean!)
        `}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <select
                className="select"
                value={gender}
                onChange={onGenderChange}
                required
              >
                <option value="">I&apos;m a ...</option>
                <option value="female">lovely lady</option>
                <option value="male">brave knight</option>
              </select>
              <button className="btn btn-primary">Let&apos;s continue</button>
            </form>
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
And your name ${myManLady}?
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                className="input italic"
                placeholder="My name is ..."
                value={name}
                onChange={onNameChange}
                required
              />
              <button className="btn btn-primary">Let&apos;s continue</button>
            </form>
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Great.
Now, you know those people you just love to have around?

Like their mere presence fills you up with good feelings, sometimes without saying a word, and sometimes with. And at times it's the way they just "are", you know?
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                { text: 'Of course I love those people!', onClick: onNext },
                {
                  text: 'Yes of course I can feel more love already!',
                  onClick: onNext,
                },
                { text: 'I got some in mind, yes', onClick: onNext },
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Fantastic.
As you think of them now, notice which one induces the strongest feeling inside of you?
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                className="input italic"
                onChange={this.lovedOneNameChange}
                value={lovedOneName}
                placeholder="The person I feel good now the most about is ..."
              />
              <select
                className="select"
                value={lovedOneGender}
                onChange={this.lovedOneGenderChange}
                required
              >
                <option value="">He or She?</option>
                <option value="male">He&apos;s a he</option>
                <option value="female">She&apos;s a she</option>
              </select>
              <button className="btn btn-primary">Let&apos;s continue</button>
            </form>
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Great,

As you think of ${lovedOneHimHer}, do you see ${lovedOneHimHer} looking at you?
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                { text: 'Yes', onClick: onNext },
                { text: 'No', onClick: onNext },
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
## Brightness

Notice how bright is the image of ${lovedOneHimHer} in your mind, and see what happens as you brighten it up a bit, like in a old TV, pressing the button to increase brightness.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  text: 'Brightening the image makes my feeling stronger!',
                  onClick: onNext,
                },
                {
                  text: `I've brightened the image of ${lovedOneName}`,
                  onClick: onNext,
                },
                letsContinue,
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
## Brightness

Brilliant.
Now go all the way brighter until it's a bit blinding, and then start decreasing it until it's as shiny as it can be without hurting.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                { text: 'my eyes, my eyes!', onClick: onNext },
                letsContinue,
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
## Brightness

Fantastic.
Now go the other way around and make it darker, and see what happens. Then make it brighter again, so you find the sweetspot which you feel good the most.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                { text: 'Sweet spot? Check!', onClick: onNext },
                {
                  text: "Great, I've adjusted the brightness",
                  onClick: onNext,
                },
                letsContinue,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Color

Great.
As you look at ${lovedOneHimHer} with this brightness, do you see ${lovedOneHimHer} in B&W or in color?
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                { text: `I see ${lovedOneName} in color`, onClick: onNext },
                { text: `I see ${lovedOneName} in B&W`, onClick: onNext },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Color

Awesome.
Make the colors richer and as vivid as you can. Just like brightness, go full in, and increase the vividness until it becomes absord, and then start decreasing it.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  text: `Feels much better to see ${lovedOneName} in vivid colors!`,
                  onClick: onNext,
                },
                {
                  text: 'Interesting to know I can play with colors in my mind',
                  onClick: onNext,
                },
                letsContinue,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Color

Good.
Now go the other way around and decrease the colors until it's grayscale / B&W, and then introduce colors again and make them rich and vivid. Like brightness, find the sweetspot for good feelings.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  text: "I've played with the colors and reached the sweetspot",
                  onClick: onNext,
                },
                letsContinue,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Sharpness and quality

Great.
Now that we crancked up the brightness and color, notice how sharp, crisp, and high quality you see ${lovedOneName} in your mind.

You might experienced sometimes watching a video on Youtube or a screen, and halfway into it you noticed the resolution and quality is not set to maximum.

Now look at ${lovedOneName} and increase the quality of the image, set it to maximum quality, so it's crisper and sharper, like the best screen you can imagine.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  text:
                    'Increasing the quality makes the good feelings stronger',
                  onClick: onNext,
                },
                {
                  text: `This is awesome, I see ${lovedOneName} much better now!`,
                  onClick: onNext,
                },
                letsContinue,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Sharpness and quality

Magnificent.
Now decrease the resolution and quality all the way down until you can barely recognize ${lovedOneName}, then increase it all the way up again. You might find the maximum quality is now higher than before.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  text: 'Yup, the maximum quality is higher than before now',
                  onClick: onNext,
                },
                letsContinue,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Distance

Now let's talk distance. How close do you see ${lovedOneName}? Is he right up there in your face or miles away?

Usually it's something in between. Now push the image away all the way into the distance so it's just a dot, then pull it closer till it's "in your face", and start pushing it away again until you find the sweepspot which induces the most good feelings.

`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  text:
                    'Found the sweetspot, was further away than the beginning',
                  onClick: onNext,
                },
                {
                  text: 'Found the sweetspot, was closer than the beginning',
                  onClick: onNext,
                },
                letsContinue,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Depth

Do you see ${lovedOneName} in a flat image or in 3d?
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  text: `I see ${lovedOneHimHer} in a flat image`,
                  onClick: onNext,
                },
                {
                  text: `I see ${lovedOneHimHer} in a 3d image`,
                  onClick: onNext,
                },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Depth

Add more and more depth, so you make ${lovedOneName}'s representation as deep and as 3d as you can.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  text: 'Adding depth induces stronger good feelings',
                  onClick: onNext,
                },
                {
                  text: `Adding depth increases ${lovedOneName}'s "liveness"`,
                  onClick: onNext,
                },
                letsContinue,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Depth

Now start decreasing it until it's a flat image, and start adding more and more depth again.

(yes, you guessed it, find the sweetspot of good emotions. Aren't you intuitive? ;) )
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[letsContinue]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Focus and clarity

Great.

Now make the image clearer and more focused, as much as you can.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  text: 'I made it clearer, feels even better now',
                  onClick: onNext,
                },
                {
                  text: 'Making it more focused induces more good feelings',
                  onClick: onNext,
                },
                letsContinue,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Focus and clarity

Beautiful.

Now start defocusing and blurrying it until you can barely recognize it's ${lovedOneName}, then increase the focus and clarity again to the max.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                { text: 'Found the focus sweetspot!', onClick: onNext },
                { text: "I've made it even clearer now", onClick: onNext },
                letsContinue,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Still image or a movie

Is ${lovedOneName} moving as you look at ${lovedOneHimHer} now, or is it a still picture?

If it's not yet a movie, "press play" so you see ${lovedOneHimHer} moving, and notice if and how much you feel good even more.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                { text: 'It was already a movie', onClick: onNext },
                {
                  text: 'Making it a movie increased the good feelings',
                  onClick: onNext,
                },
                letsContinue,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Sound

Now that it's a movie, do you hear ${lovedOneName} talking to you yet?

Hear what ${lovedOneHeShe}'s saying and more importantly HOW ${lovedOneHeShe}'s saying it, the tone of ${lovedOneHisHer} voice and the way ${lovedOneHeShe} talks to you.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  text: `Hearing ${lovedOneName} Makes the feeling stronger`,
                  onClick: onNext,
                },
                {
                  text: "It's the same with or without sound",
                  onClick: onNext,
                },
                {
                  text: `I was already hearing ${lovedOneName} when we started`,
                  onClick: onNext,
                },
                letsContinue,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Sound

Now try this ...

As ${lovedOneHeShe} speaks, hear ${lovedOneHimHer} as if the sound would come from all around you, like a sorround effect in a cinema, if there were high quality speakers from all around.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                { text: "that's so cool!", onClick: onNext },
                { text: 'that is interesting ...', onClick: onNext },
                letsContinue,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Sound

Now play with the volume of the experience. Make everything louder, until it's too much, then lower until you can barely hear ${lovedOneName}'s voice, then louder again.

(sweetspot anyone?)
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  text: 'Making it louder intensified the good feelings',
                  onClick: onNext,
                },
                {
                  text: 'Making it lower intensified the good feelings',
                  onClick: onNext,
                },
                { text: 'that is interesting ...', onClick: onNext },
                letsContinue,
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
## Smell

As you see and hear ${lovedOneName}, what smell might go on with this experience?

Do you like that smell?
If there's no smell already, add it in and notice if you feel good in a better way with the smell.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  text: 'I was already noticed the smell before',
                  onClick: onNext,
                },
                {
                  text: 'Adding a smell intensifies the good feelings',
                  onClick: onNext,
                },
                { text: 'that is interesting ...', onClick: onNext },
                letsContinue,
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
## Summup

Now notice how you experience ${lovedOneName} now, compared to a few minutes ago when we just started.

Pretty cool right?
(but not as cool as [share](FB_SHARE) it with others! including ${lovedOneName} of course :) )

And it only "cost" you a few minutes of brain exploration.

If this is your first time doing this, I suggest you do it with a few more people until you feel you get the hang of it.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  text: "I'm ready to do it on the next person!",
                  onClick: this.anotherPerson,
                },
                <FbShareLink>
                  This is cool and I want more to experince this
                </FbShareLink>,
              ]}
            />
            <Markdown
              className="tool-source"
              source={`
Source: I've adapted this [tool](/tools/) from Bandler's processes, see [Using Your Brain](http://amzn.to/2yLMhXz) for more info.
                `}
            />
          </div>,
        ].map(renderStep)}
      </div>
    )
  }
}

export default LovedOnesAmplifier
