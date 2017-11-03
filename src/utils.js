import cloudinary from 'cloudinary-core'

/* eslint-disable */
String.prototype.capitalize = function () {
  return this[0].toUpperCase() + this.substr(1).toLowerCase();
}

Array.prototype.last = function () {
  return this[this.length - 1];
}
/* eslint-enable */

const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'goldylucks' })

export const cloudImg = imgName => cloudinaryCore.url(imgName)

export const isProd = process.env.NODE_ENV === 'production'

export const scrollToElem = (element, to, duration) => {
  if (duration <= 0) return
  const difference = to - element.scrollTop
  const perTick = difference / duration * 10

  setTimeout(() => {
    // eslint-disable-next-line no-param-reassign, operator-assignment
    element.scrollTop = element.scrollTop + perTick
    if (element.scrollTop === to) return
    scrollToElem(element, to, duration - 10)
  }, 10)
}

export const filterDrafts = item => !item.IS_DRAFT

export const titleToSlug = title => title.toLowerCase().replace(/ /g, '-')

export const getSlug = (item) => {
  if (item.type === 'pages') {
    return `/${item.url}`
  }
  if (item.type === 'tags') {
    return `/tags/${titleToSlug(item.title)}`
  }
  return `/${item.type}/${item.url}`
}

const parseFbMsg = ({
  type, html, alt, src, style, duration,
}) => {
  if (type === 'voiceMsg') {
    return `Voice msg - Duration: ${duration}`
  }

  if (type === 'sticker') {
    return `<div style="${style}"></div>`
  }

  if (type === 'emoticon' || type === 'image') {
    return `<img alt=${alt} src=${src} />`
  }

  if (type === 'likeSticker') {
    return '{LIKE}'
  }

  if (type === 'textWithHtml') {
    return html
  }

  if (type === 'textWithEmoticon') {
    return html
  }

  if (type === 'text') {
    return html
  }
  console.error('Caught message with no type, that should not happen!') // eslint-disable-line no-console
  return ''
}

export const parseFbConversation = arrOfMsgs =>
  arrOfMsgs
    .map(({ author, content }) => {
      if (author === 'time') {
        return `<div class="chat-message-time">${content}</div>`
      }
      return content
        .map(msg =>
          `<div class="chat-message-container clearfix ${author} ${msg.isRtl
            ? 'rtl'
            : ''}"><div class="chat-message">${parseFbMsg(msg)}</div></div>`)
        .join('')
    })
    .join('')
