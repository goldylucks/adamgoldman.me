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

export const TYPEFORM_ID_SAVORING_INTRO = 'VHYYNS'
export const TYPEFORM_ID_SAVORING_INTRO_TEST = 'AV33h6'
export const TYPEFORM_ID_SAVORING_PEACEFUL_ENDING = 'Rwa8iu'
export const TYPEFORM_ID_SAVORING_PEACEFUL_ENDING_TEST = 'FYg9Da'
export const TYPEFORM_ID_SAVORING_REENGAGING_THE_FUTURE = 'A3Pjm8'
export const TYPEFORM_ID_SAVORING_RELATIONSHIP_CONSOLIDATION = 'lDT9YI'
export const TYPEFORM_ID_SAVORING_REUNION = 'hcBBCM'
export const TYPEFORM_ID_SAVORING_SAVORING_THE_FUTURE = 'UGn1TQ'
export const TYPEFORM_ID_SAVORING_SPECIAL_DAYS = 'kERZFQ'
export const TYPEFORM_ID_SAVORING_REVIEW_TEST = 'ubvp4J'

/* eslint-disable prefer-destructuring */ // crashes if destructuring
export const BASE_URL = process.env.BASE_URL
export const FB_APP_ID = process.env.FB_APP_ID
/* eslint-enable prefer-destructuring */
