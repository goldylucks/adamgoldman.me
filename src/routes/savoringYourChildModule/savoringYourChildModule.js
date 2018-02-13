// @flow

import React from 'react'

import Typeform from '../../components/Typeform'
import MessageMe from '../../components/MessageMe'
import Testimonial from '../../components/Testimonial'
import Share from '../../components/Share'
import FAQ from '../../components/FAQ'

type Props = {
  title?: string,
  path?: string,
  typeform?: string,
  faq?: [],
  testimonials?: [],
  user?: Object,
  typeformUserId?: '',
};

class savoringYourChildSectionForm extends React.Component {
  static defaultProps = {
    title: '',
    path: '',
    typeform: '',
    faq: '',
    testimonials: '',
    user: '',
    typeformUserId: '',
  }

  state = {
    urlPaths: [
      '/savoring-your-child/peaceful-ending',
      '/savoring-your-child/savoring-the-future',
      '/savoring-your-child/reunion',
      '/savoring-your-child/reengaging-the-future',
      '/savoring-your-child/special-days',
      '/savoring-your-child/relationship-consolidation',
    ],
  }

  moduleRedirect = () => {
    const toRemove = this.props.path
    const index = this.state.urlPaths.indexOf(toRemove)
    this.state.urlPaths.splice(index, 1)
    const toUrl = this.state.urlPaths[Math.floor(Math.random() * 4)]
    window.location.href = toUrl
  }

  props: Props

  render() {
    const {
      title,
      path,
      typeform,
      faq,
      testimonials,
      user,
      typeformUserId,
    } = this.props
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-xs-12">
              <Share path={path} title={title} />
            </div>
            <div className="col-md-8 col-xs-12">
              <div className="mainheading">
                <h1 className="posttitle">{title}</h1>
              </div>
              <div>
                <div>User typeform ID: {typeformUserId},</div>
                <div>User ID {user._id},</div>
              </div>
              {user._id
                ? (
                  <Typeform
                    data-url={typeform}
                    style={{ width: '100%', height: 800 }}
                    onSubmit={this.moduleRedirect}
                  />
                ) :
                  <div>Please login</div>
              }
              <hr />
              {!testimonials.length
                ? null
                : (
                  <section>
                    <h4>Parents Share</h4>
                    <Testimonial testimonials={testimonials} />
                    <hr />
                  </section>
                )}
              {!faq.length
                ? null
                : (
                  <section>
                    <h4>Frequently Asked Questions</h4>
                    <FAQ faq={faq} />
                    <hr />
                  </section>
                )}
              <MessageMe />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default savoringYourChildSectionForm
