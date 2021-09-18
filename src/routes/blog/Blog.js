// @flow

import React from 'react'

import posts from './postsData'

import Ending from '../../components/Ending'
import Card from '../../components/Card'
import { filterDrafts } from '../../utils'

const Blog = () => (
  <div>
    <div className='container'>
      <div className='mainheading'>
        <h1 className='sitetitle'>My Humble Blog</h1>
        <p className='lead'>With my humble thoughts and diabolical schemes</p>
      </div>
      <section className='recent-posts'>
        <div className='section-title'>
          <h2>
            <span>All Posts</span>
          </h2>
        </div>
        <div className='card-columns listrecent'>
          {posts.filter(filterDrafts).map(t => (
            <Card {...t} url={`/blog/${t.url}/`} key={t.url} />
          ))}
        </div>
      </section>
      <hr />
      <Ending nick='non blogger' />
    </div>
  </div>
)

export default Blog
