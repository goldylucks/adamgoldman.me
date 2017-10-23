// @flow

import React from 'react';

import Layout from '../../components/Layout';
import Markdown from '../../components/Markdown';
import FbPageBox from '../../components/FbPageBox';
import Ending from '../../components/Ending';
import FbShareButton from '../../components/FbShareButton';

const Home = () => (
  <Layout>
    <div className="main-layout post-page">
      <h1 className="main-title">Welcome to my home!</h1>
      <Markdown
        className="post-text"
        source="
Until I sort out my homepage, try one of the [brain hacking tools](/tools/), read some [reviews](/reviews), be my [friend](FB_PROFILE) and [lets talk!](/lets-talk/)
"
      />
      <FbPageBox style={{ display: 'block', textAlign: 'center' }} />
      <hr />
      <div style={{ marginBottom: 20 }}>
        <FbShareButton />
      </div>
      <Ending nick="me case tu casa" />
    </div>
  </Layout>
);

export default Home;
