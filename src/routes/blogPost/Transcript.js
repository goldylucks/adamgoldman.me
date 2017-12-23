// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import axios from 'axios'

import Link from '../../components/Link'
import Markdown from '../../components/Markdown'
import FbPageBox from '../../components/FbPageBox'
import Ending from '../../components/Ending'
import FbShareButton from '../../components/FbShareButton'
import BreadCrumbs from '../../components/BreadCrumbs'
import FbComments from '../../components/FbComments'
import Tags from '../../components/Tags'
import StopWarning from '../../components/StopWarning'
import FbReview from '../../components/FbReview'

import s from './Transcript.css'

type Props = {
  title: string,
  url: string,
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
    isAdmin: false,
    messageEditableIdx: '',
    messageEditableValue: '',
    transcript: [],
  }

  componentWillMount() {
    this.setState({ transcript: this.props.transcript })
  }

  componentDidMount() {
    if (localStorage.isAdmin) {
      this.setState({ isAdmin: true }) // eslint-disable-line react/no-did-mount-set-state
      document.addEventListener('keydown', this.commentHotkey)
    }
  }

  componentWillUnmount() {
    if (this.isAdmin) {
      document.addEventListener('keydown', this.commentHotkey)
    }
  }

  props: Props

  render() {
    const {
      title,
      tags,
      isBodyRtl,
      fbReview,
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

          {this.renderTOC()}
          {this.renderDetails()}
          {this.renderIntro()}
          {this.renderLegend()}
          {this.renderTranscript()}
          {this.renderAdminSave()}

          <hr />
          <p style={{ fontSize: 25 }}>Liked this post? <Link to="/stay-ahead">Click here to stay updated!</Link></p>
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
  /* eslint-disable react/jsx-curly-brace-presence */
  /* eslint-disable class-methods-use-this */
  renderTOC() {
    return (
      <Markdown
        className="post-text no-margin-bottom"
        source={`
# TOC
- Details
- Intro
- Legend
- Verbatim Transcript + Notes

---
`}
      />
    )
  }

  renderDetails() {
    const {
      date, fbProfile, name, age, diagnosis,
    } = this.props
    return (
      <Markdown
        className="post-text no-margin-bottom"
        source={`
# Details

${!date ? '' : `- Date of session: ${date}  `}
${!fbProfile ? `- Name: ${name}` : `- Name: [${name}](https://www.fb.com/${fbProfile})  `}
${!age ? '' : `- Age: ${age}  `}
${!diagnosis ? '' : `- Diagnosis: ${diagnosis}  `}
- Medium of communication: Facebook chat

---
`}
      />
    )
  }

  renderIntro() {
    return (
      <Markdown
        className="post-text no-margin-bottom"
        source={`
# Intro

${this.props.intro}

---
`}
      />
    )
  }

  renderLegend() {
    return (
      <article>
        <h1>Legend</h1>

        <div className={`chat-message-container clearfix other ${this.props.isBodyRtl ? 'rtl' : ''}`}>
          <div className="chat-message">
        This is an example of {this.props.name} message from our conversation
          </div>
        </div>

        <div className={`chat-message-container clearfix adam ${this.props.isBodyRtl ? 'rtl' : ''}`}>
          <div className="chat-message">
        This is an example of my messages from our conversation
          </div>
        </div>

        <Markdown className={s.transcriptComment} source="This is an example of my comment ABOUT the conversation" />

        <hr />
      </article>
    )
  }

  renderTranscript() {
    return (
      <article>
        <h1>Verbatim Transcript + Notes</h1>

        {this.renderWarning()}
        {this.state.transcript.map(({
      author, text, md, type, duration, html, style, isRtl, src, alt,
    }, idx) => {
      if (author === 'time') {
        return <div key={idx} className="chat-message-time">{text}</div>
      }

      if (author === 'comment') {
        return (
          <div key={idx} className={`clearfix ${!this.state.isAdmin ? '' : s.chatMessageContainerAdmin}`}>
            {this.renderComment({ idx, md })}
            {this.renderMessageEditable(idx)}
            {this.renderMessageActions(idx)}
          </div>
        )
      }

      return (
        <div key={idx} className={`chat-message-container clearfix ${!this.state.isAdmin ? '' : s.chatMessageContainerAdmin} ${author} ${isRtl ? 'rtl' : ''}`}>
          {this.renderMessage({
            idx, type, duration, html, style, src, alt, text,
          })}
          {this.renderMessageEditable(idx)}
          {this.renderMessageActions(idx)}
        </div>
      )
    })}
      </article>
    )
  }

  renderAdminSave() {
    if (!this.state.isAdmin) {
      return null
    }
    return (
      <div className={s.controls}>
        <a className={s.control} onClick={this.savePost}>Save</a>
      </div>
    )
  }

  renderWarning() {
    return (
      <StopWarning
        id={this.props.title}
        onDismiss={() => this.setState({ showComments: true })}
        dismissText="I read it twice, show me the comments Adam!"
        text={`# Don't rob yourself from a valuable learning experience!

Go through the verbatim transcript first at least twice before toggling on my notes.

**First time - just read it**, as in ... JUST read it. Don't analyze, don't think too much why each of us have said this or that. Please JUST READ it, with no interpretation, and save your brilliance for ...

**The second time - think** about WHY I say what I say, as well as what I do NOT say, which is even more powerful, and imagine explaining it to someone else by yourself.

THEN turn toggle on the notes, match the explanations with your thoughts, and comment below about it all.

You only have ONE chance to learn fully from this session with ${this.props.name}, please explore it thoroughly.

Pretty please?`}
      />
    )
  }

  renderMessage({
    idx, type, duration, html, style, src, alt, text,
  }) {
    if (idx === this.state.messageEditableIdx) {
      return null
    }
    return (
      <div className="chat-message">
        { type === 'voiceMsg' && `Voice msg - Duration: ${duration}` }
        { type === 'sticker' && <div style={style} /> }
        { type.match(/emoticon|image/) && <img alt={alt} src={src} /> }
        { type === 'likeSticker' && '{LIKE}' }
        { type.match(/textWithEmoticon|textWithHtml/) && <div dangerouslySetInnerHTML={{ __html: html }} /> }
        { type === 'text' && <div dangerouslySetInnerHTML={{ __html: text.replace('\n', '<br />') }} /> }
      </div>
    )
  }

  renderMessageEditable(idx) {
    if (!this.state.isAdmin) {
      return null
    }
    if (idx !== this.state.messageEditableIdx) {
      return null
    }
    /* eslint-disable jsx-a11y/no-autofocus */
    return (
      <textarea
        className="input"
        style={{ height: 400 }}
        autoFocus
        value={this.state.messageEditableValue}
        onChange={evt => this.setState({ messageEditableValue: evt.target.value })}
      />
    )
    /* eslint-enable jsx-a11y/no-autofocus */
  }

  renderComment({ idx, md }) {
    if (idx === this.state.messageEditableIdx) {
      return null
    }
    return !this.state.showComments
      ? null
      : <Markdown className={s.transcriptComment} source={md} />
  }

  renderMessageActions(idx) {
    if (!this.state.isAdmin) {
      return null
    }
    const isEdited = this.state.messageEditableIdx === idx
    return (
      <div className={s.chatMessageActions}>
        <a onClick={() => this.deleteMessage(idx)}>Delete</a>
        <a onClick={() => this.addCommentBeforeMessage(idx)}>Comment Before</a>
        <a onClick={() => this.addCommentAfterMessage(idx)}>Comment After</a>
        { !isEdited && <a onClick={() => this.editMessage(idx)}>Edit</a> }
        { isEdited && <a onClick={() => this.uneditMessage()}>UnEdit</a> }
        { isEdited && <a onClick={() => this.saveMessage(idx)}>Save</a> }
      </div>
    )
  }

  deleteMessage(idx) {
    const nextTranscript = [...this.state.transcript]
    nextTranscript.splice(idx, 1)
    this.setState({
      transcript: nextTranscript,
      messageEditableIdx: '',
      messageEditableValue: '',
    })
  }

  editMessage(idx) {
    const { type, author } = this.state.transcript[idx]
    let messageEditableValue
    if (type === 'text') {
      messageEditableValue = this.state.transcript[idx].text
    } else if (author === 'comment') {
      messageEditableValue = this.state.transcript[idx].md
    } else {
      messageEditableValue = this.state.transcript[idx].html
    }
    this.setState({
      messageEditableIdx: idx,
      messageEditableValue,
    })
  }

  uneditMessage() {
    if (this.state.messageEditableValue === '') {
      const nextTranscript = [...this.state.transcript]
      nextTranscript.splice(this.state.messageEditableIdx, 1)
      this.setState({ transcript: nextTranscript })
    }
    this.setState({
      messageEditableIdx: '',
      messageEditableValue: '',
    })
  }

  saveMessage(idx) {
    const nextTranscript = [...this.state.transcript]
    if (nextTranscript[idx].type === 'text') {
      nextTranscript[idx].text = this.state.messageEditableValue
    } else if (nextTranscript[idx].author === 'comment') {
      nextTranscript[idx].md = this.state.messageEditableValue
    } else {
      nextTranscript[idx].html = this.state.messageEditableValue
    }
    this.setState({
      messageEditableIdx: '',
      messageEditableValue: '',
      transcript: nextTranscript,
    })
  }

  addCommentBeforeMessage(idx) {
    const nextTranscript = [...this.state.transcript]
    if (idx === 0) {
      nextTranscript.unshift(comment())
    } else {
      nextTranscript.splice(idx, 0, comment())
    }
    this.setState({
      transcript: nextTranscript,
      messageEditableIdx: idx,
    })
  }

  addCommentAfterMessage(idx) {
    const nextTranscript = [...this.state.transcript]
    nextTranscript.splice(idx + 1, 0, comment())
    this.setState({
      transcript: nextTranscript,
      messageEditableIdx: idx + 1,
    })
  }

  savePost = () => {
    axios.put(`/api/posts/${this.props.url}/transcript`, this.state.transcript)
      .then(res => console.log('saved!', res.data)) // eslint-disable-line no-console
      .catch(err => console.error(err)) // eslint-disable-line no-console
  }

  commentHotkey = (evt) => {
    if (this.state.messageEditableIdx) {
      if (evt.key === 'Enter' && evt.ctrlKey) {
        this.saveMessage(this.state.messageEditableIdx)
      }
      if (evt.key === 'Escape') {
        this.uneditMessage()
      }
    }
  }
}

export default withStyles(s)(Transcript)

function comment() {
  return { author: 'comment', md: '' }
}
