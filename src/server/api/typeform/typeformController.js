import axios from 'axios'

import { typeFormApiKey } from '../../../config'

export default {
  get, userForm,
}

function userForm(req, res) {
  res.send(`test ${req.params.name}`)
}

function get(req, res, next) {
  // variable typeFormApiKey is not working ${typeFormApiKey} :/
  // please supply the type form api key below, i removed it
  axios.get(`https://api.typeform.com/v1/form/${req.params.formId}?key=${typeFormApiKey}&completed=true&limit=20`)
    .then(response => res.json(response.data))
    .catch(next)
}
