// @flow

import React from 'react'

import Link from '../../components/Link'
import Share from '../../components/Share'
import Ending from '../../components/Ending'
import BreadCrumbs from '../../components/BreadCrumbs'

type Props = {
  title: string,
  html: string,
  path: string,
}

const LossSection = ({ title, html, path }: Props) => (
  <div>
    <div className='container'>
      <BreadCrumbs
        crumbs={[
          { text: 'Loss', path: '/loss' },
          { text: title, path },
        ]}
      />
      <div className='mainheading'>
        <h1 className='sitetitle'>Resourceful Response To Loss</h1>
        <p className='lead'>
          Proven <Link to='/loss/protocol'>protocol</Link> to experience a more
          peacful,{' '}
          <Link to='/loss/resourceful-response'>resource response</Link> to loss
        </p>
      </div>
      <div className='row'>
        <div className='col-md-2 col-xs-12'>
          <Share path={path} title={title} />
        </div>
        <div className='col-md-8 col-xs-12'>
          <div className='mainheading'>
            <h1 className='posttitle'>{title}</h1>
          </div>
          <div className='article-post'>{html}</div>
          <hr />
          <Ending />
        </div>
      </div>
    </div>
  </div>
)

export default LossSection
