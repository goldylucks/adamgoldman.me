// @flow

import React from 'react'
import axios from 'axios'

import Benefits from '../../components/Benefits'
import MessageMe from '../../components/MessageMe'
import Testimonials from '../../components/Testimonials'
import FAQ from '../../components/FAQ'
import FbGateKeeper from '../../components/FbGateKeeper'
import Steps from '../../routes/tool/Steps'

type Props = {
  title: string,
  slug: string,
  path: string,
  faq: [],
  testimonials: [],
  benefits: Array<String>,
  user: Object,
  onLogin: Function,
  // onSubmitModule: Function,
};

class savoringYourChildSectionModule extends React.Component {
  state = {
    tool: null,
  }

  componentWillMount() {
    this.fetchTool()
  }

  props: Props

  render() {
    const {
      title, faq, benefits, testimonials, user, onLogin, path,
    } = this.props
    return (
      <div>
        <div className="container">
          <div className="mainheading">
            <h1 className="posttitle">{title}</h1>
          </div>
          <div style={{ position: 'relative' }}>
            { this.state.tool && <Steps {...this.state.tool} path={path} /> }
            {!user._id &&
            <FbGateKeeper onLogin={onLogin} user={user} />
            }
          </div>
          <hr />
          {!testimonials.length
            ? null
            : (
              <section>
                <h1 className="text-center">Parents Share</h1>
                <Testimonials testimonials={testimonials} />
                <hr />
              </section>
            )}
          {!benefits.length
            ? null
            : (
              <section>
                <h1 className="text-center">What will I learn?</h1>
                <div className="row justify-content-md-center">
                  <div className="col col-lg-10">
                    <Benefits benefits={benefits} />
                  </div>
                </div>
                <hr />
              </section>
            )}
          {!faq.length
            ? null
            : (
              <section>
                <h1 className="text-center">F.A.Q.</h1>
                <FAQ faq={faq} />
                <hr />
              </section>
            )}
          {!faq.length
            ? null
            : (
              <section>
                <h1 className="text-center">F.A.Q.</h1>
                <FAQ faq={faq} />
                <hr />
              </section>
            )}
          <MessageMe />
        </div>
      </div>
    )
  }

  fetchTool() {
    axios.get(`/api/tools/${this.props.slug}/`)
      .then(({ data }) => {
        this.setState({
          tool: data,
        })
      })
      .catch((err) => {
        global.alert('there was an error')
        global.console.error(err)
      })
  }
}

export default savoringYourChildSectionModule
