// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import axios from 'axios'

import Markdown from '../../components/Markdown'
import Share from '../../components/Share'
import BottomSection from '../../components/BottomSection'
import Ending from '../../components/Ending'
import Tags from '../../components/Tags'
import StopWarning from '../../components/StopWarning'
import FbReview from '../../components/FbReview'

import Legend from './components/Legend'
import TOC from './components/TOC'
import Details from './components/Details'
import './Transcript.css'

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
    transcript: this.props.transcript,
  }

  componentDidMount() {
    if (localStorage.adminPass) {
      this.setState({ isAdmin: true }) // eslint-disable-line react/no-did-mount-set-state
      document.addEventListener('keydown', this.commentHotkey)
    }
  }

  componentWillUnmount() {
    if (this.state.isAdmin) {
      document.addEventListener('keydown', this.commentHotkey)
    }
  }

  props: Props

  render() {
    const {
      title,
      tags,
      fbReview,
      nick,
      ps,
    } = this.props
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-xs-12">
              <Share />
            </div>

            <div className="col-md-8 col-xs-12">
              <div className="mainheading">
                <h1 className="posttitle">{title}</h1>
              </div>
              {fbReview && <FbReview review={fbReview} />}
              <div className="article-post">
                <TOC />
                <hr />
                {this.renderDetails()}
                <hr />
                {this.renderIntro()}
                <hr />
                <Legend name={this.props.name} isBodyRtl={this.props.isBodyRtl} />
                <hr />
                {this.renderTranscript()}
                {this.renderAdminSave()}
              </div>
              <Ending nick={nick} />
              <Tags tags={tags} />
              {ps && <Markdown source={ps} />}
            </div>
          </div>
        </div>
        <BottomSection />
      </div>
    )
  }

  renderDetails() {
    const {
      date, fbProfile, name, age, diagnosis,
    } = this.props
    return (
      <Details date={date} fbProfile={fbProfile} name={name} age={age} diagnosis={diagnosis} />
    )
  }

  renderIntro() {
    return (
      <Markdown
        source={`# Intro

${this.props.intro}
`}
      />
    )
  }

  renderTranscript() {
    return (
      <article>
        <h1>Verbatim Transcript + Notes</h1>

        {this.renderWarning()}
        {this.state.transcript.map(({
      author, source, type, duration, style, isRtl, src, alt,
    }, idx) => {
      if (author === 'time') {
        return <div key={idx} className="chat-message-time">{source}</div>
      }

      if (author === 'comment') {
        if (!this.state.showComments) { return null }
        return (
          <div key={idx} className={`clearfix transcript-comment ${!this.state.isAdmin ? '' : s.chatMessageContainerAdmin}`}>
            {this.renderComment({ idx, source })}
            {this.renderMessageEditable(idx)}
            {this.renderMessageActions(idx)}
          </div>
        )
      }

      if (author === 'headline') {
        return (
          <div key={idx} className={`clearfix ${!this.state.isAdmin ? '' : s.chatMessageContainerAdmin}`}>
            <div className={s.sectionDivider} />
            {this.renderHeadline({ idx, source })}
            {this.renderMessageEditable(idx)}
            {this.renderMessageActions(idx)}
          </div>
        )
      }

      return (
        <div key={idx} className={`chat-message-container clearfix ${!this.state.isAdmin ? '' : s.chatMessageContainerAdmin} ${author} ${isRtl ? 'rtl' : ''}`}>
          {this.renderMessage({
            idx, type, duration, source, style, src, alt,
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
    idx, type, duration, source, style, src, alt,
  }) {
    if (idx === this.state.messageEditableIdx) {
      return null
    }
    /* eslint-disable react/no-danger */
    return (
      <div className="chat-message">
        { type === 'voiceMsg' && `Voice msg - Duration: ${duration}` }
        { type === 'sticker' && <div style={style} /> }
        { type.match(/emoticon|image/) && <img alt={alt} src={src} /> }
        { type === 'likeSticker' && '{LIKE}' }
        { type.match(/textWithEmoticon|textWithHtml/) && <div dangerouslySetInnerHTML={{ __html: source }} /> }
        { type === 'text' && <div dangerouslySetInnerHTML={{ __html: source.replace('\n', '<br />') }} /> }
      </div>
    )
    /* eslint-enable react/no-danger */
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
        className="form-control"
        style={{ height: 400 }}
        autoFocus
        value={this.state.messageEditableValue}
        onChange={evt => this.setState({ messageEditableValue: evt.target.value })}
      />
    )
    /* eslint-enable jsx-a11y/no-autofocus */
  }

  renderHeadline({ idx, source }) {
    if (idx === this.state.messageEditableIdx) {
      return null
    }
    return <h2 className="transcript-headline">{source}</h2>
  }

  renderComment({ idx, source }) {
    if (idx === this.state.messageEditableIdx) {
      return null
    }
    return !this.state.showComments
      ? null
      : <Markdown className={s.transcriptComment} source={source} />
  }

  renderMessageActions(idx) {
    if (!this.state.isAdmin) {
      return null
    }
    const isEdited = this.state.messageEditableIdx === idx
    return (
      <div className={s.chatMessageActions}>
        <a onClick={() => this.deleteMessage(idx)}>Delete</a>
        <a onClick={() => this.addHeadlineBeforeMessage(idx)}>Headline</a>
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
    this.setState({
      messageEditableIdx: idx,
      messageEditableValue: this.state.transcript[idx].source,
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
    nextTranscript[idx].source = this.state.messageEditableValue
    this.setState({
      messageEditableIdx: '',
      messageEditableValue: '',
      transcript: nextTranscript,
    })
  }

  addHeadlineBeforeMessage(idx) {
    const nextTranscript = [...this.state.transcript]
    if (idx === 0) {
      nextTranscript.unshift(headline())
    } else {
      nextTranscript.splice(idx, 0, headline())
    }
    this.setState({
      transcript: nextTranscript,
      messageEditableIdx: idx,
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
      .then((res) => {
        global.console.log('saved!', res.data)
        global.alert('saved!')
      })
      .catch((err) => {
        global.console.error(err)
        global.alert(err.message)
      })
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
  return { author: 'comment', source: '' }
}
function headline() {
  return { author: 'headline', source: '' }
}
