import axios from 'axios'

import { typeFormId } from '../../../config'

export default {
  get, userForm,
}

function userForm(req, res) {
  res.send(`test ${req.params.name}`)
}

function get(req, res, next) {
  // variable typeFormId is not working ${typeFormId} :/
  // please supply the type form api key below, i removed it
  axios.get(`https://api.typeform.com/v1/form/${req.params.formId}?key=${typeFormId}&completed=true&limit=20`)
    .then(response => res.json(response.data))
    .catch(next)
}
