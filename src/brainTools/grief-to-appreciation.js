// @flow
/* eslint max-len: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react';
import Link from '../components/Link';

import FbShareLink from '../components/FbShareLink';
import Markdown from '../components/Markdown';

import Answers from '../routes/brainTool/components/Answers';
import HowItsGoingToWorkStep from '../routes/brainTool/components/HowItsGoingToWorkStep';
import type { Props } from '../routes/brainTool/components/toolPageProps';

export const stepCount = 7;
export const title = 'Grief To Appreciation';
export const nick = "don't cry because it's over, smile because it happened";
export const description =
  'Turn feelings of loss, miss, and grief into appreciation, presence and warmth';

class GriefToAppreciation extends React.Component {
  state = {
    goodMemoryPersonName: '',
    goodMemoryPersonHimher: '',
    goodMemoryPersonHeshe: '',
    goodMemoryPersonGender: '',
    lossPersonName: '',
    lossPersonGender: '',
    lossPersonHimher: '',
  };

  props: Props;

  lossPersonNameChange = (evt: Object) =>
    this.setState({ lossPersonName: evt.target.value });
  lossPersonGenderChange = (evt: Object) =>
    this.setState({
      lossPersonHimher: evt.target.value === 'male' ? 'him' : 'her',
      lossPersonGender: evt.target.value,
    });

  goodMemoryPersonNameChange = (evt: Object) =>
    this.setState({ goodMemoryPersonName: evt.target.value });
  goodMemoryPersonGenderChange = (evt: Object) =>
    this.setState({
      goodMemoryPersonHimher: evt.target.value === 'male' ? 'him' : 'her',
      goodMemoryPersonHeshe: evt.target.value === 'male' ? 'he' : 'she',
      goodMemoryPersonGender: evt.target.value,
    });

  render() {
    const {
      renderStep,
      onRestart,
      onFeelTheSame,
      onAgeChange,
      age,
      onUserInputSubmit,
      onNext,
      back,
      dontUnderstand,
    } = this.props;

    const {
      goodMemoryPersonName,
      goodMemoryPersonHimher,
      goodMemoryPersonHeshe,
      goodMemoryPersonGender,
      lossPersonName,
      lossPersonHimher,
      lossPersonGender,
    } = this.state;
    return (
      <div>
        {[
          <div>
            <Markdown
              className="tool-text"
              source={`
u have someone you used to have in your life,
that as you think of him or her,
u don&apos;t feel yet the warmth gratitude,
appreciation, and good times you shared,
but still feel the old feelings of loss,
and before we turn this around you might wonder ...
              `}
            />
            <Answers
              answers={[
                { text: 'How is this going to work?', onClick: onNext },
                dontUnderstand,
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
I want you to quickly share with me the following:
                `}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                className="input"
                onChange={onAgeChange}
                value={age}
                max="99"
                min="0"
                placeholder="What is your age?"
                type="number"
              />
              <input
                className="input"
                onChange={this.lossPersonNameChange}
                value={lossPersonName}
                placeholder="how do you call that person in question?"
              />
              <select
                className="select"
                value={lossPersonGender}
                onChange={this.lossPersonGenderChange}
                required
              >
                <option value="">He or She?</option>
                <option value="male">He&apos;s a he</option>
                <option value="female">She&apos;s a she</option>
              </select>
              <button className="button">Let&apos;s continue</button>
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Good,
now,
in your ${age} years on this odd planet, you have met many people,

and some of them shared good memories with you, and were meaningful to you,

now,

as you think about some of them,
think of a person that is no longer in your life,

maybe he/she is dead, maybe not,
but that person is no longer in your life,

but when you remember him or her,
u have a good feeling,
appreciate the time you had together,

maybe it's a friend you used to have which makes you laugh,
maybe it's a meaningful teacher,
or a loved family member,

now,

as you think of that person, share the following:
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                className="input"
                onChange={this.goodMemoryPersonNameChange}
                value={goodMemoryPersonName}
                placeholder="What's her / his name?"
              />
              <div className="select-container">
                <select
                  className="select"
                  onChange={this.goodMemoryPersonGenderChange}
                  value={goodMemoryPersonGender}
                  required
                >
                  <option value="">He or She?</option>
                  <option value="male">He&apos;s a he</option>
                  <option value="female">She&apos;s a she</option>
                </select>
              </div>
              <button className="button">Let&apos;s continue</button>
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
                
good, 
now,

as you think of ${goodMemoryPersonName} now, and see all the good times you shared together,

feel the gratitude and appreciation for having ${goodMemoryPersonHimher} in your life,
and all you learned and carry with you now and forever,

notice you can not only notice where in your body you feel the good feeling first,
as you can also notice where in your body u
feel the good feeling flowing and spreading next,
and you can begin to notice where in your body you feel the good feeling where you feel good absolutely the best,

and as you do so,
and you are looking at ${goodMemoryPersonHimher}
notice what is ${goodMemoryPersonHeshe} doing?

where do you see ${goodMemoryPersonHimher}

is ${goodMemoryPersonHeshe} looking at you?

is ${goodMemoryPersonHeshe} smiling at you?

do you hear ${goodMemoryPersonHimher} talking to you?

and as you do so, you might notice if
the good feeling is cool or you prefer to feel it warmer,
and the more you feel that good feeling now,
the more it can fill you,
as you begin to realize you can learn to learn new ways,
to feel good,
now,
and appreciation,
and describe this good feeling vivdly in as much detail as humanly possible,

(u are human, are you not?)
`}
            />
            <textarea
              className="textarea"
              placeholder="the more you share the better you will feel"
              style={{ marginBottom: 40 }}
            />
            <Answers
              answers={[
                { text: "Good indeed, let's continue.", onClick: onNext },
                {
                  text: "I like this good feeling, let's continue",
                  onClick: onNext,
                },
                {
                  text: 'I like to learn to feel even better',
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
Good,
now,
keep making the good feeling,

and as you do so,

in that same way you think of ${goodMemoryPersonName},
I want you to think of ${lossPersonName},

so you see ${lossPersonHimher} in the same place, colors, and angle as ${goodMemoryPersonName},

hear ${lossPersonName} in the same way and from the same direction as ${goodMemoryPersonName},

the way that makes you feel the appreciation,

and keep making the good feeling,

and notice you might notice the good feeling spreads even more,
and you might notice you can notice the good feeling intensifies,

and how good do you feel now as you see ${lossPersonName} in this way?
`}
            />
            <Answers
              answers={[
                { text: "Good indeed, let's continue.", onClick: onNext },
                {
                  text: `I love ${lossPersonName} and I love this feeling`,
                  onClick: onNext,
                },
                {
                  onClick: onFeelTheSame,
                  text: "It's exactly the same as before",
                },
                { text: 'This is so much better ...', onClick: onNext },
                dontUnderstand,
                back,
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Good,
now,
isn't it interesting,
to learn,
u can learn to learn new ways to feel good,
now,
and then,
in such a short time,
with little to no effort,
by playing with pictures and sounds in your mind?

did you expect to feel all those good feelings a few minutes ago?

And I guess I can also not help but wonder,
if you can wander around good feelings,
as you wonder how much more wonderful feelings you haven't experienced yet,
u will be surprised,
as you begin to realize you can feel good
in more ways than you have ever wondered before,
as you wander more and more around good feelings, and if you are not careful,
u might end up stuck in good feelings only,
for the rest of your life (and then some ...)
`}
            />
            <Answers
              answers={[
                { text: "Good indeed, let's continue.", onClick: onNext },
                {
                  onClick: onNext,
                  text: 'Lost in good feelings? oh no, anything but that!',
                },
                <FbShareLink>
                  This is great, I want more to experience this gratitude and
                  peace
                </FbShareLink>,
                {
                  onClick: onNext,
                  text: "I'm curious how much I can feel good more and more",
                },
                <Link to="/i-dont-charge-i-accept/">
                  This is wonderful, I wish to give back
                </Link>,
                dontUnderstand,
                back,
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
This page will always be here for you so that,
u can easily enjoy it more if you bookmark it,
always available for you and your loved ones,
and everyone else you wish to [share](FB_SHARE) this good feeling now with.
continue to enjoy what you have learned and [give back](/i-dont-charge-i-accept/) just as much as you wish,
and take the next action to further improve your life!
`}
            />
            <Answers
              answers={[
                {
                  onClick: onRestart,
                  text: 'I want to do it again with the same loved one',
                },
                {
                  onClick: onRestart,
                  text: 'I want to do it again with a different loved one',
                },
                <Link to="/i-dont-charge-i-accept/">
                  I&apos;ve never thought this is possible, how can I give back?
                </Link>,
                <FbShareLink>
                  This is great, I want more to experience this gratitude and
                  peace
                </FbShareLink>,
                back,
              ]}
            />
            <Markdown
              className="tool-source"
              source={`
Source: I've adapted this [tool](/tools/) from Bandler's mapping across process, see [this article](http://www.steveandreas.com/Articles/grief02.html) for more info.
                `}
            />
          </div>,
        ].map(renderStep)}
      </div>
    );
  }
}

export default GriefToAppreciation;
