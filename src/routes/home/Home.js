import React from 'react';
import Link from '../../components/Link';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <Link to="/blog/coffee">coffee</Link>
      </div>
    );
  }
}

export default Home;
