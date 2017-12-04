// @flow
/* eslint max-len: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react'

import Markdown from '../components/Markdown'
import AnswersV2 from '../routes/brainTool/components/Answers-v2'
import ToolsIntro from '../routes/brainTool/components/ToolsIntro'
import type { Props } from '../routes/brainTool/components/toolPageProps'

export const stepCount = 4
export const title = 'Loved Ones Amplifier (Generalizer)'
// eslint-disable-next-line prettier/prettier
export const description = 'Leverage what you\'ve learned in the loved one amplifier'
export const nick = 'generalizer'

export const IS_DRAFT = true

// eslint-disable-next-line react/prefer-stateless-function
class LovedOneAmplifierGeneralizer extends React.Component {
  props: Props;

  render() {
    const { onNext, renderStep } = this.props
    return (
      <div>
        {[
          <div>
            <Markdown
              className="tool-text"
              source={`
Welcome back!

I am about to show you how to generalize what you've experienced in the [loved ones amplifier](/tools/loved-ones-amplifier/), so if you haven't done it on at least 2 people, [do that first](/tools/loved-ones-amplifier/) and only then come back here.
`}
            />
            <AnswersV2
              noBack
              onNext={onNext}
              answers={[
                {
                  text:
                    "I've done the amplifier on more than one person, let's continue",
                  onClick: onNext,
                },
                {
                  text:
                    "I've done the amplifier on more than one person, let's generalize the good feelings!",
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
Looks like you are faster than me ...

I'm still working on this tool, come back in a few days when I'm done!

In the meantime, try one of the other [brain hacking tools](/tools/), read some [reviews](/reviews), be my [friend](FB_PROFILE) and [lets talk!](/lets-talk/)
`}
            />
          </div>,
        ].map(renderStep)}
      </div>
    )
  }
}

export default LovedOneAmplifierGeneralizer
