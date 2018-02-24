// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import FA from 'react-fontawesome'

import Tags from '../Tags'
import Link from '../Link'

import s from './SelectedCard.css'

type Props = {
  url: string,
  title: string,
  imgSrc?: string,
  description: string,
  createdAt: string,
  tags?: [],
}

const SelectedCard = ({
  url, title, imgSrc, description, createdAt, tags,
}: Props) => (
  <article className="card">
    {imgSrc && (
      <Link to={url}>
        <img className="card-img-top" src={imgSrc} alt={title} />
      </Link>
    )}
    <div className={`card-body ${s.selectedCardBorder}`}>
      <h2 className="card-title"><Link to={url}>{title}</Link></h2>
      <h4 className="card-text">{description}</h4>
      <Tags tags={tags} />
      <div className="metafooter">
        <div className="wrapfooter">
          <span className="author-meta">
            <span className="post-date">{createdAt}</span>
          </span>
          <span className="post-read-more">
            <Link to={url} title="Read Story">
              <FA name="check" style={{ fontSize: '25px', color: '#00C5FF' }} />
            </Link>
          </span>
        </div>
      </div>
    </div>
  </article>
)

SelectedCard.defaultProps = {
  imgSrc: '',
  tags: [],
}

export default withStyles(s)(SelectedCard)
