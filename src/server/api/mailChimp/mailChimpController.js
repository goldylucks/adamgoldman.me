import Mailchimp from 'mailchimp-api-v3'

import config from '../../../config'

const mailchimp = !__DEV__ // eslint-disable-line no-undef
  ? new Mailchimp(config.mailChimpApiKy)
  : { request: (req, res) => res.send('dev dummy response') }

export default {
  subscribe,
}

function subscribe(req, res, next) {
  mailchimp.request({
    method: 'post',
    path: `lists/${req.params.listId}/members/`,
    body: req.body,
  })
    .then(resp => res.json(resp))
    .catch(next)
}
