import axios from 'axios'

// import { typeFormId } from '../../../config'

export default {
  get, userForm,
}

function userForm(req, res) {
  res.send(`test ${req.params.name}`)
}

async function get(req, res, next) {
  // variable typeFormId is not working ${typeFormId} :/
  // please supply the type form api key below
  try {
    axios.get(`https://api.typeform.com/v1/form/${req.params.formId}?key=&completed=true`)
      .then(response => res.json(response.data))
      .catch(next)
  } catch (error) {
    global.console.log('Something went wrong...', error)
  }
}
