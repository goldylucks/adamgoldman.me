import deasync from 'deasync'

// models
import Tools from '../api/tools/toolsModel'
import Users from '../api/users/usersModel'
import { signToken } from '../auth'

// data
import seedDbResolvingFeelingsToolData from './seedDbResolvingFeelingsToolData'
import toolHasWithReview from './seedDbToolHasReviewData'
import users from './seedDbUsersData'

const tools = [seedDbResolvingFeelingsToolData, toolHasWithReview]
const Models = [Tools, Users]

// init
global.console.log('Seeding DB ...')

export default run()

function run() {
  let ready // eslint-disable-line no-unmodified-loop-condition
  cleanDB()
    .then(seedUsers)
    .then(seedTools)
    .then(onSeedSuccess)
    .catch(onSeedError)
    .then(() => { ready = true })

  // make seed sync so test won't run before it is completed
  while (ready === undefined) { // eslint-disable-line no-unmodified-loop-condition
    deasync.sleep(100)
  }
}

function cleanDB() {
  global.console.log('Cleaning the DB ...')
  const promises = Models.map(model => model.remove().exec())
  return Promise.all(promises)
}

function seedUsers() {
  global.console.log('Seeding users ...')
  const promises = users.map(p => Users.create(p))
  return Promise.all(promises)
    .then(attachTokenToUsers)
}

function seedTools() {
  global.console.log('Seeding tools ...')
  const promises = tools.map(p => Tools.create(p))
  return Promise.all(promises)
}

function onSeedSuccess() {
  global.console.log('Seeded DB!')
}

function onSeedError(err) {
  global.console.error('error seeding DB:', err)
}

function attachTokenToUsers() {
  users.map((u) => {
    u.token = signToken(u._id)
    return u
  })
}
