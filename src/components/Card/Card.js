// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import cx from 'classnames'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'

import Tags from '../Tags'
import Link from '../Link'

import s from './Card.css'

type Props = {
  url: string,
  title: string,
  imgSrc?: string,
  description: string,
  createdAt: string,
  tags?: [],
  isDone?: boolean,
}

const Card = ({
  url, title, imgSrc, description, createdAt, tags, isDone,
}: Props) => (
  <article className="card">
    {imgSrc && (
      <Link to={url}>
        <img className="card-img-top" src={imgSrc} alt={title} />
      </Link>
    )}
    <div className={cx('card-body', { [s.selectedCardBorder]: isDone })}>
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
              {isDone
                ? <FontAwesomeIcon icon={faCheck} style={{ fontSize: '25px', color: '#00C5FF' }} />
                : <svg className="svgIcon-use" width="25" height="25" viewBox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fillRule="evenodd" /></svg>
              }
            </Link>
          </span>
        </div>
      </div>
    </div>
  </article>
)

Card.defaultProps = {
  imgSrc: '',
  tags: [],
  isDone: false,
}

export default withStyles(s)(Card)
