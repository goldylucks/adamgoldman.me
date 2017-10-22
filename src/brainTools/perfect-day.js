// @flow
/* eslint max-len: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react';
import Link from '../components/Link';

import FbShareLink from '../components/FbShareLink';
import Markdown from '../components/Markdown';

import Answers from '../routes/brainTool/components/Answers';
import type { Props } from '../routes/brainTool/components/toolPageProps';

export const stepCount = 4;
export const title = 'I bet you never designed your perfect day';
export const nick = 'such a perfect day';
// eslint-disable-next-line prettier/prettier
export const description = `Design your future`;

class PerfectDay extends React.Component {
  state = {
    firstDescription: '',
    secondDescription: '',
  };

  props: Props;

  firstDescriptionChange = (evt: Object) =>
    this.setState({ firstDescription: evt.target.value });
  secondDescriptionChange = (evt: Object) =>
    this.setState({ secondDescription: evt.target.value });

  render() {
    const {
      renderStep,
      onUserInputSubmit,
      onNext,
      back,
      dontUnderstand,
    } = this.props;

    const { firstDescription, secondDescription } = this.state;
    return (
      <div>
        {[
          <div>
            <Markdown
              className="tool-text"
              source={`
It's extremely rare I meet someone who'll take me up on that bet.

It's crazy most people will live and die without once entertaining this thought. We all wish for a better life but no one stops to design it, and surprisingly enough it doesn't happen.

I find that when you don't plan for feeling fantastic, you don't!

It's that simple.

Some people tell me it completely shattered what they thought they wanted.
For some it was an inspiration to press forward with current events to achieve it (but I'm sure you never procrascinate ...)

Now think about your perfect day.
Not what you think is possible, or realistic, but your IDEAL routine day and ...

Be specific!

Gut out the details, like me:

*"I wake up by the sun caressing my face and make love to the person next to me. Pet the dog that came into the hut.*

*Step outside, greet some new comers, say hello to some who live around, and run but naked to the freezing beach.*

*After I dry I practice some new skills, some on my own and mostly with others.*

*Then I teach something to a crowd of 20-50 people."*

u get the idea yes?

Don't gimmie none of that "I'm a ceo of a big company with 2 kids in a nice house" crap.

Half assing in this case is worse than not doing it at all.

If you gonna do something, DO IT, or don't bother.

Now let's begin.
`}
            />
            <Answers
              answers={[
                { text: "Let's do this!", onClick: onNext },
                {
                  text: 'hmmm I never thought about this ...',
                  onClick: onNext,
                },
                { text: "so what's the first step Adam?", onClick: onNext },
                dontUnderstand,
              ]}
            />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
First "puke" on the screen EVERYTHING that comes to mind, in no specific order, regardless for how senseless it is.

PLEASE LISTEN TO ME HERE!

Brainstorming and organizing information are two different processes that occur in two differnet places in that grey blub between your ears.

DO NOT DO THEM AT THE SAME TIME.

Kapish?
Comprende?

Good.

Now that we are still friends, start spilling!
`}
            />
            <form onSubmit={onUserInputSubmit} style={{ marginBottom: 40 }}>
              <textarea
                className="textarea italic"
                placeholder="In my perfect day I ..."
                onChange={this.firstDescriptionChange}
                value={firstDescription}
                required
              />
              <button className="button italic">
                I&apos;m done puking on the screen
              </button>
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,
          <div>
            <div className="tool-text">
              <Markdown
                source={`
Good.

Now read what u've written, and notice if anything else comes to your mind ...
`}
              />
              <p>
                <i>{firstDescription}</i>
              </p>
              <Markdown
                source={`
... and consider the following to juice up your thinking and add more details:

- where you live (geographically, enviornment, the house itself)
- which people/animals are around
- what do you eat and when
- climate
- what do you learn
- what do you do      
`}
              />
            </div>
            <form onSubmit={onUserInputSubmit} style={{ marginBottom: 40 }}>
              <textarea
                required
                className="textarea italic"
                value={secondDescription}
                onChange={this.secondDescriptionChange}
                placeholder="In my ideal day I also ..."
              />
              <button className="button italic">
                Done adding to my perfect day
              </button>
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Now read everything that you have written, and construct your ideal day, chronologically, from the moment you wake up, until you fall asleep.

*${firstDescription}*

*${secondDescription}*
`}
            />
            <form onSubmit={onUserInputSubmit} style={{ marginBottom: 40 }}>
              <textarea
                placeholder="I wake up by ..."
                className="textarea"
                required
              />
              <button className="button italic">
                Done describing chronologically
              </button>
            </form>
            <Answers answers={[dontUnderstand, back]} />
          </div>,
          <div>
            <Markdown
              className="tool-text"
              source={`
Glad u've made it up to here :)

Now here's the most important part ...

This is not your PERFECT day.
Not your IDEAL day.
Not your UTOPIAN day.

These are illusions.

There's no "perfect" anything, only the best we can do up to now.

Everything is evolving and the only constant is change.

Each time I run through this, I change it up a bit.
I will never live my "perfect" day because the faster I evolve, that faster I can make it better in my mind, so it will always be a few steps ahead of us.

Makes sense?

That's a GOOD THING!

Many like to utter clishaes like "it's not about the destination, it's about the journey", but few bring it down to practical ACTIONABLE meanings.

Each time you will do this it will murph a bit. Your life is an ever growing EMERGING process.

Just like I keep updating the [tools](/tools/) and [methods](/successes/) I share, so should you keep improving every little thing your life, as well as the big things.
`}
            />
            <Answers
              answers={[
                <FbShareLink>
                  This is cool I want more to experience this!
                </FbShareLink>,
                <Link to="/i-dont-charge-i-accept/">
                  I enjoyed this and want to give back
                </Link>,
                <Link to="/tools/">
                  So what kind of other do you have Adam?
                </Link>,
              ]}
            />
          </div>,
        ].map(renderStep)}
      </div>
    );
  }
}

export default PerfectDay;
