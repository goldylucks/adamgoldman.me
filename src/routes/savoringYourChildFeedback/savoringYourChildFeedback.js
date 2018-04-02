// @flow

import React from 'react'
import FacebookProvider, { Comments } from 'react-facebook'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { DOMAIN, FB_APP_ID } from '../../constants'
import MessageMe from '../../components/MessageMe'

import s from './SavoringYourChildFeedback.css'

const SavoringYourChildFeedback = () => (
  <FacebookProvider appId={FB_APP_ID}>
    <div className="container">
      <div className="mainheading">
        <h1 className="sitetitle">Collaborative feedback</h1>
      </div>
      <section>
        <h1 className="text-center">Annual parents conference</h1>
        {RenderComments([
          { path: 'attend', headline: 'Attend', description: 'You think I (Adam) should attend or give a talk at the conference?' },
        ])}
      </section>
      <section>
        <h1 className="text-center">About the site</h1>
        {RenderComments([
          { path: 'name', headline: 'Name', description: 'How would you call the site?' },
          { path: 'attention', headline: 'Get attention', description: 'What are the top 3 things that we should communicate to a new parent seeing the site ASAP, to get their attention?' },
          { path: 'images', headline: 'Images', description: 'What images would resonate with parents?' },
          { path: 'intro-vid', headline: 'Intro video', description: 'What would you like to see in the intro video about the program?' },
          { path: 'my-vid', headline: 'My video', description: 'What would you like to see in the video about me?' },
        ])}
      </section>
      <hr style={{ margin: 40 }} />
      <section>
        <h1 className="text-center">Before starting the process with me</h1>
        {RenderComments([
          { path: 'non-useful-programs', headline: 'Other programs - non useful', description: 'Other things / methods / programs you tried that didn\'t work for you?' },
          { path: 'useful-programs', headline: 'Other programs - useful', description: 'Other things / methods / programs you tried and recommend?' },
          { path: 'concerns', headline: 'Concerns', description: 'Which worries or concerns did you have?' },
          { path: 'starting', headline: 'Starting', description: 'What made you start?' },
          { path: 'ah-ha', headline: '"Ah-ha!" moments', description: 'Can you remember specific things I\'ve said or done that "clicked" for you? Made you go "ah-ha! there\'s something interesting here ..."' },
        ])}
      </section>
      <section>
        <h1 className="text-center">About the process with me</h1>
        {RenderComments([
          { path: 'difference', headline: 'Difference', description: 'How was this different than other programs?' },
          { path: 'favorite-parts', headline: 'Favorite parts', description: 'Any parts you enjoyed more than others?' },
          { path: 'benefits-self', headline: 'Benefits - self', description: 'Main benefits you experienced?' },
          { path: 'benefits-others', headline: 'Benefits - others', description: 'Main benefits and changes your loved ones noticed about you since you started?' },
          { path: 'improvement', headline: 'Improvement', description: 'Any suggestions how we can improve any of the processes?' },
          { path: 'suggestions', headline: 'Suggestions', description: 'Any suggestions for future modules / processes?' },
          { path: 'something-missing', headline: 'Something missing?', description: 'Any parts of the grief we didn\'t cover or explore, that you wish we had?' },
          { path: 'future-parents', headline: 'Future parents', description: 'Any message or recommendation for future parents?' },
        ])}
      </section>
      <hr />
      <section>
        <h1 className="text-center">Affiliations</h1>
        {RenderComments([
          { path: 'groups', headline: 'Groups', description: 'Which online groups are you a member of? Are you an admin/mod of the group, or you know the admins?' },
        ])}
      </section>
      <MessageMe />
    </div>
  </FacebookProvider>
)

export default withStyles(s)(SavoringYourChildFeedback)

function RenderComments(questions) {
  return questions.map(({ path, headline, description }) => (
    <div>
      <h3>{headline}</h3>
      {description && <p>{description}</p>}
      <Comments
        className={s.fbComments}
        width="1100"
        href={`${DOMAIN}/savoring-your-child/feedback/feedback-${path}/`}
      />
      <hr />
    </div>
  ))
}
