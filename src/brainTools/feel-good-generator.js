// @flow
/* eslint max-len: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react';
import Link from '../components/Link';

import FbShareLink from '../components/FbShareLink';
import Markdown from '../components/Markdown';

import Answers from '../routes/brainTool/components/Answers';
import type { Props } from '../routes/brainTool/components/toolPageProps';

export const stepCount = 5;
export const title = 'Feel Good Generator';
export const nick = 'how much pleasure can you stand?';
// eslint-disable-next-line prettier/prettier
export const description = `Intensify good feelings on command. How much pleasure can you stand?`;

class FeelGoodGenerator extends React.Component {
  state = {
    resource: '',
    memoryAge: '',
    memoryLocation: '',
    memoryDescription: '',
  };

  resourceChange = (evt: Object) =>
    this.setState({ resource: evt.target.value });
  memoryAgeChange = (evt: Object) =>
    this.setState({ memoryAge: evt.target.value });
  memoryLocationChange = (evt: Object) =>
    this.setState({ memoryLocation: evt.target.value });
  memoryDescriptionChange = (evt: Object) =>
    this.setState({ memoryDescription: evt.target.value });

  props: Props;

  render() {
    const {
      renderStep,
      age,
      onUserInputSubmit,
      onAgeChange,
      onRestart,
      onNext,
      back,
      dontUnderstand,
    } = this.props;
    const {
      resource,
      memoryAge,
      memoryLocation,
      memoryDescription,
    } = this.state;
    return (
      <div>
        {[
          <div>
            <Markdown
              className="tool-text"
              source={`
Think of a feeling or a resource you'd like to
have more available for you now (and then),
and you'd like to experience it more as you progress through life.
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={resource}
                onChange={this.resourceChange}
                className="input"
                placeholder="I want to experience more ..."
                required
              />
              <button className="button">Let&apos; continue</button>
            </form>
            <Answers answers={[dontUnderstand]} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
And how many times has the earth revolved around the sun since your inception on this planet?
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={age}
                onChange={onAgeChange}
                className="input"
                placeholder="I am XX years of age"
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
Now, in all your ${age} years on this planet,
u had many experiences and events, in which
u experienced ${resource} in a variety of ways and degrees,
in which some are stronger than others,

and as you think of some of them now,
there's a few in particular,
or one, that REALLY comes to mind,
so go back to that experience and describe it here:              
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <input
                value={memoryAge}
                onChange={this.memoryAgeChange}
                className="input"
                placeholder="In this memory I am XX years of age"
                required
              />
              <input
                value={memoryLocation}
                onChange={this.memoryLocationChange}
                className="input"
                placeholder="In this memory I am in / at ..."
                required
              />
              <textarea
                value={memoryDescription}
                onChange={this.memoryDescriptionChange}
                placeholder="In this memory I am looking at ... Hearing the ... Feeling the touch of ..."
                className="textarea"
              />
              <button className="button">Let&apos; continue</button>
            </form>
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Go through that ${resource} experience out loud again, so that as

*"${memoryDescription}"*

and notice the special moments,

Like in the movies, as you think of a good movie which induces within you a response, the movie itself could be "great", but there are those tiny magical moments in which there's such a build up,
and so many feelings come together inside, that is almost indescribable.

Go through your experience of ${resource} again,
and notice in which moments you feel ${resource} the most,
and fill in more details about it,
so you add on to what u've done already:           
`}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <textarea
                value={memoryDescription}
                onChange={this.memoryDescriptionChange}
                placeholder="In this memory I am looking at ... Hearing the ... Feeling the touch of ..."
                className="textarea"
              />
              <button className="button">feels even better now</button>
              <button className="button">
                This is cool, let&apos;s continue!
              </button>
            </form>
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
And as you think about that memory that induces ${resource},
and you think of that special moment,
I want you now to step inside that memory,
so you see what you saw at the time,
hear what you heard,
feel what you felt,
and make the image brighter,
bigger,
add depth,
make it sharper,
so as you feel it more,
begin to notice you can notice more of the sounds,
the smells,
and as you do so notice where it is in your body that you can feel,
and a growing sensation of more than ${resource},
I wonder if you begin to wonder,
as you wander around how much more you can feel good as
you notice where in your body you feel this feeling first,
and where does a feeling go to as it starts to move and spread, now,
as you keep the feeling spinning faster and faster ...

Keep intensifying the good feeling and ${resource}, and as you read what you wrote again, notice how much more you can feel about that same exeprience of ${resource} now 

*"${memoryDescription}"*

And as you experience more and more,
and it becomes more a part of you,
I'm curious if you get curious about what color could that feeling have,
as you feel it in more ways,
and I wonder if you like the adventure to
think of what sound could this feeling make,
and what color does a good feeling have,
when it feels as good deep inside,
and you can hear with me new sensations,
and when your ready to get even more advanced ...              
`}
            />
            <Answers
              answers={[
                <FbShareLink>
                  This is great, I want more to experience this too!
                </FbShareLink>,
                {
                  text: "I'm ready to feel the advanced level!",
                  onClick: onNext,
                },
                <Link to="/i-dont-charge-i-accept">
                  This is great, I want to give back!
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
think about a situation not too far from today,
maybe in a few hours or a few days (and daze),
in which you used to not have enough ${resource} in the past,
and notice now as you keep spinning this feeling,
you are learning you can begin to realize how fast you can
learn to respond in new ways to old limitations which used
to have bothered you before, yet you will be surprised as each
time you do this, you can feel the ${resource} fill you even more,
and isn't it odd to feel as good about something you did not
think about just a few moments ago?

And as you wander more and more around what it is you do not
know yet, as more than just air fills your lounges and you succumb
to good feelings, and it feels so right to be lost sometimes, and what's still left in you that you don't want anymore can get curious as you think about the most important question of them all, and "how much pleasure can I stand", even if you sit or lay down in an odd place, deeper than before, as you surface back, only at the rate and speed as you feel more and more ${resource} fill bigger parts of your life, now and then, the more you do this now ... 
`}
            />
            <Answers
              answers={[
                {
                  text: "I feel better, let's do it again!",
                  onClick: onRestart,
                },
                <FbShareLink>
                  This is great, I want more to experience this too!
                </FbShareLink>,
                <Link to="/i-dont-charge-i-accept">
                  This is great, I want to give back!
                </Link>,
                dontUnderstand,
                back,
              ]}
            />
          </div>,
        ].map(renderStep)}
      </div>
    );
  }
}

export default FeelGoodGenerator;
