// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Card from '../../components/Card'
import Link from '../../components/Link'

import s from './Loss.css'

type Props = {
  sections: [],
  title: string,
}

const Loss = ({ sections, title }: Props) => (
  <div>
    <div className="container">
      <div className="mainheading">
        <h1 className="sitetitle">{title}</h1>
        <p className="lead">Proven <Link to="/loss/protocol">protocol</Link> to experience a more peacful, <Link to="/loss/resourceful-response">resourceful response</Link> to loss</p>
      </div>
      <section>
        <div className="card-columns card-columns-three listrecent">
          {sections
            .map(section => (
              <Card {...section} url={`/loss/${section.url}`} key={section.url} />
            ))}
        </div>
      </section>
    </div>
  </div>
)

export default withStyles(s)(Loss)
