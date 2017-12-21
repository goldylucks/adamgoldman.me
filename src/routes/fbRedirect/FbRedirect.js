import React from 'react'

console.log('FbRedirect')

class FbRedirect extends React.Component {
  componentDidMount() {
    console.log('componentDidMount')
    setTimeout(() => {
      window.location = 'fb://profile/100001987180099'
    }, 1500)
  }

  render() {
    return (
      <h1>Redirecting to ...</h1>
    )
  }
}

export default FbRedirect
