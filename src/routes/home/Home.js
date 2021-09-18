// @flow

import React from 'react'

import Link from '../../components/Link'
import Markdown from '../../components/Markdown'
import Ending from '../../components/Ending'

type Props = {}

class Home extends React.Component<Props> {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='mainheading'>
            <h1 className='sitetitle'>Relax, it&apos;s just life ...</h1>
            <p className='lead'>
              Hack your mind, body, and personality. Transform your life.
            </p>
            <div className='text-center'>
              <Link href='/book-session' className='btn btn-primary cta-button'>
                BOOK A SESSION
              </Link>
            </div>
            <Markdown
              source='
Join Influencers, trainers, coaches and countless others who are experiencing radical results in extremely short time.

You can also get to know [me](/about) first.
'
            />
          </div>
          <hr />
          <Ending nick='mi casa, su casa' />
        </div>
      </div>
    )
  }
}

export default Home
