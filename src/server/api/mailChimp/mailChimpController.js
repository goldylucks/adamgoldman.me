import Mailchimp from 'mailchimp-api-v3'

import config from '../../../config'

const mailchimp = new Mailchimp(config.mailChimpApiKy)


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
