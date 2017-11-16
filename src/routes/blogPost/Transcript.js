// @flow

import React from 'react'

import Markdown from '../../components/Markdown'
import FbPageBox from '../../components/FbPageBox'
import Ending from '../../components/Ending'
import FbShareButton from '../../components/FbShareButton'
import BreadCrumbs from '../../components/BreadCrumbs'
import FbComments from '../../components/FbComments'
import Tags from '../../components/Tags'
import StopWarning from '../../components/StopWarning'
import FbReview from '../../components/FbReview'

type Props = {
  title: string,
  age?: string,
  date: string,
  intro: string,
  name: string,
  fbProfile?: string,
  diagnosis?: string,
  fbReview?: string,
  tags: Array<string>,
  transcript: Array<Object>,
  nick: string,
  isBodyRtl?: boolean,
  ps?: string,
};

class Transcript extends React.Component {
  static defaultProps = {
    age: '',
    fbReview: '',
    diagnosis: '',
    fbProfile: '',
    isBodyRtl: false,
    ps: '',
  }

  state = {
    showComments: false,
  }

  props: Props

  render() {
    const {
      title,
      tags,
      date,
      isBodyRtl,
      name,
      fbReview,
      age,
      transcript,
      intro,
      fbProfile,
      diagnosis,
      nick,
      ps,
    } = this.props
    return (
      <div>
        <div className="main-layout post-page">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <BreadCrumbs
              crumbs={[{ text: 'Blog', path: '/blog' }, { text: title }]}
            />
            <FbShareButton />
          </div>
          <h1
            className="main-title"
            style={{ direction: isBodyRtl ? 'rtl' : 'ltr' }}
          >
            {title}
          </h1>
          <Tags tags={tags} />

          {fbReview && <FbReview review={fbReview} />}

          <Markdown
            className="post-text"
            source={`
# TOC
- Details
- Intro
- Legend
- Verbatim Transcript + Notes

---

# Details

${!date ? '' : `- Date of session: ${date}  `}
${!fbProfile ? `- Name: ${name}` : `- Name: [${name}](${fbProfile})  `}
${!age ? '' : `- Age: ${age}  `}
${!diagnosis ? '' : `- Diagnosis: ${diagnosis}  `}
- Medium of communication: Facebook chat

---

# Intro

${intro}

---

`}
          />

          <article>
            <h1>Legend</h1>

            <div className={`chat-message-container clearfix other ${isBodyRtl ? 'rtl' : ''}`}>
              <div className="chat-message">
            This is an example of {name} message from our conversation
              </div>
            </div>

            <div className={`chat-message-container clearfix adam ${isBodyRtl ? 'rtl' : ''}`}>
              <div className="chat-message">
            This is an example of my messages from our conversation
              </div>
            </div>

            <Markdown className="transcript-comment" source="This is an example of my comment ABOUT the conversation" />
          </article>

          <hr />

          <article>
            <h1>Verbatim Transcript + Notes</h1>

            <StopWarning
              id={title}
              onDismiss={() => this.setState({ showComments: true })}
              dismissText="I read it twice, show me the comments Adam!"
              text={`# Don't rob yourself from a valuable learning experience!

Go through the verbatim transcript first at least twice before toggling on my notes.

**First time - just read it**, as in ... JUST read it. Don't analyze, don't think too much why each of us have said this or that. Please JUST READ it, with no interpretation, and save your brilliance for ...

**The second time - think** about WHY I say what I say, as well as what I do NOT say, which is even more powerful, and imagine explaining it to someone else by yourself.

THEN turn toggle on the notes, match the explanations with your thoughts, and comment below about it all.

You only have ONE chance to learn fully from this session with ${name}, please explore it thoroughly.

Pretty please?`}
            />

            {transcript.map(({
          author, text, md, type, duration, html, style, isRtl, src, alt,
        }, idx) => {
          if (author === 'time') {
            return <div key={idx} className="chat-message-time">{text}</div>
          }

          if (author === 'comment') {
            return !this.state.showComments ? null : <Markdown key={idx} className="transcript-comment" source={md} />
          }
          return (
            <div key={idx} className={`chat-message-container clearfix ${author} ${isRtl ? 'rtl' : ''}`}>
              <div className="chat-message">
                { type === 'voiceMsg' && `Voice msg - Duration: ${duration}` }
                { type === 'sticker' && <div style={style} /> }
                { type.match(/emoticon|image/) && <img alt={alt} src={src} /> }
                { type === 'likeSticker' && '{LIKE}' }
                { type.match(/textWithEmoticon|textWithHtml/) && <div dangerouslySetInnerHTML={{ __html: html }} /> }
                { type === 'text' && <div dangerouslySetInnerHTML={{ __html: text.replace('\n', '<br />') }} /> }
              </div>
            </div>
          )
        })}
          </article>

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
          <FbComments style={{ marginTop: 10 }} />
        </div>
      </div>
    )
  }
}

export default Transcript
