/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import Markdown from '../../components/Markdown';

const BlogPost = ({ title, pathname, tags, body, html, ps }) => (
  <Layout>
    <div className="main-layout post-page">
      <h1 className="main-title">{title}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p className="post-tags">{tags.join(', ')}</p>
      </div>
      <Markdown pathname={pathname} className="post-text" source={body} />
      {html && (
        // eslint-disable-next-line react/no-danger
        <div dangerouslySetInnerHTML={{ __html: html }} />
      )}
      <hr />
      {ps && (
        <Markdown
          className="post-text"
          containerProps={{
            style: { marginTop: 40 },
          }}
          source={ps}
        />
      )}
    </div>
  </Layout>
);

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BlogPost;
