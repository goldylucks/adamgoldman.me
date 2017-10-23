/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import Markdown from '../../components/Markdown';
import FbPageBox from '../../components/FbPageBox';
import Ending from '../../components/Ending';
import FbShareButton from '../../components/FbShareButton';
import BreadCrumbs from '../../components/BreadCrumbs';

const BlogPost = ({ title, pathname, tags, body, html, nick, ps }) => (
  <Layout>
    <div className="main-layout post-page">
      <BreadCrumbs
        crumbs={[{ text: 'Blog', path: '/blog' }, { text: title }]}
      />
      <h1 className="main-title">{title}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p className="post-tags">{tags.join(', ')}</p>
      </div>
      <Markdown pathname={pathname} className="post-text" source={body} />
      {html && (
        // eslint-disable-next-line react/no-danger
        <div dangerouslySetInnerHTML={{ __html: html }} />
      )}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <FbPageBox style={{ display: 'block', textAlign: 'center' }} />
      <hr />
      <div style={{ marginBottom: 20 }}>
        <FbShareButton />
      </div>
      <Ending nick={nick} />
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
