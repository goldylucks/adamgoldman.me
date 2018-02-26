// @flow

import { cloudImg } from './utils'

export const APP_NAME = 'Adam Goldman'
export const PROFILE_IMG = cloudImg('adamgoldman.me/profile-smiling')
export const EMAIL = 'goldy@adamgoldman.me'
export const DOMAIN = 'http://www.adamgoldman.me'
export const FB_REVIEWS = 'https://www.facebook.com/adamgoldman.me/reviews/'
export const MESSENGER_LINK = 'https://m.me/adamgoldman.me'
export const MESSENGER_LINK_BOOK_SESSION = `${MESSENGER_LINK}?ref=book-session`
export const MESSENGER_LINK_WELCOME = `${MESSENGER_LINK}?ref=welcome`
export const MESSENGER_LINK_SAVORING_CONTACT = `${MESSENGER_LINK}?ref=savoring-contact-button`
export const TWITTER_HANDLE = 'adamthegoldman'

/* eslint-disable prefer-destructuring */ // crashes if destructuring
export const BASE_URL = process.env.BASE_URL
export const FB_APP_ID = process.env.FB_APP_ID
/* eslint-enable prefer-destructuring */
