/* eslint-disable  no-var,prefer-destructuring */
import 'babel-polyfill' // eslint-disable-line import/no-extraneous-dependencies

var expect = require('chai').expect
var request = require('supertest-as-promised')

var server = require('../../../server.js')
var seededHistoryItem = require('../../../server/seedDb/seedDbSessionIntroHistoryData.json')
var seededUsers = require('../../../server/seedDb/seedDbUsersData.json')

var seededHistoryItemUser = seededUsers.find(user => user._id === seededHistoryItem.user)

var app = request(server)

describe('[ToolHistory]', () => {
  const BASE_URL = '/api/toolHistory'

  describe('[get]', () => {
    it('should get a toolHistory item', (done) => {
      app
        .get(`${BASE_URL}/${seededHistoryItem._id}`)
        .then((resp) => {
          expect(resp.status).to.equal(200)
          const historyItemResp = resp.body
          expect(historyItemResp._id).to.equal(seededHistoryItem._id)
          expect(historyItemResp.toolId).to.equal(seededHistoryItem.toolId)
          expect(historyItemResp.user._id).to.equal(seededHistoryItemUser._id)
          expect(historyItemResp.user.name).to.equal(seededHistoryItemUser.name)
          expect(historyItemResp.hiddenFields).to.eql(seededHistoryItem.hiddenFields)
          expect(historyItemResp.steps).to.eql(seededHistoryItem.steps)
          done()
        })
    })

    // it('should throw validation error when posting without an address', (done) => {
    //   app
    //     .post(BASE_URL)
    //     .then((resp) => {
    //       expect(resp.error).to.not.be.false
    //       done()
    //     })
    // })
  })

  // describe('[GET BY ID]', () => {
  //   it('should get a building', (done) => {
  //     app
  //       .get(`${BASE_URL}/${seedBuildings[0]._id}`)
  //       .then((resp) => {
  //         expect(resp.status).to.equal(200)
  //         var building = resp.body
  //         expect(building.address).to.equal(seedBuildings[0].address)
  //         expect(building.price).to.equal(seedBuildings[0].price)
  //         expect(building.adminId).to.equal(seedBuildings[0].adminId)
  //         expect(building.location).to.eql(seedBuildings[0].location)
  //         expect(building.password).to.be.undefined
  //         done()
  //       })
  //   })
  //
  //   it('should return 404 when requesting a building with id that doesn\'t exist', (done) => {
  //     var randomId = '56ebebfe3129dc6d5d0a72fd'
  //     app
  //       .get(`${BASE_URL}/${randomId}`)
  //       .then((resp) => {
  //         expect(resp.status).to.equal(404)
  //         expect(resp.body).to.be.empty
  //         done()
  //       })
  //   })
  // })
  //
  // describe('[GET]', () => {
  //   it('should get buildings', (done) => {
  //     app
  //       .get(BASE_URL)
  //       .then((resp) => {
  //         var buildings = resp.body
  //         expect(buildings).to.be.an('array')
  //         expect(buildings).to.not.be.empty
  //         expect(buildings[0].password).to.be.undefined
  //         done()
  //       })
  //   })
  // })
  //
  // describe('[PUT]', () => {
  //   it('should allow admin to update an existing building', (done) => {
  //     var building = seedBuildings[1]
  //     var updatedPrice = 10
  //     app
  //       .put(`${BASE_URL}/${building._id}`)
  //       .set('Authorization', `Bearer ${seedUsers[7].token}`)
  //       .send({ price: updatedPrice })
  //       .then((resp) => {
  //         expect(resp.body.ok).to.equal(1)
  //         return app
  //           .get(`${BASE_URL}/${building._id}`)
  //       })
  //       .then((resp) => {
  //         expect(resp.body.price).to.equal(updatedPrice)
  //         done()
  //       })
  //   })
  //
  //   it('should NOT allow non-admin to update an existing building', (done) => {
  //     var building = seedBuildings[2]
  //     app
  //       .put(`${BASE_URL}/${building._id}`)
  //       .set('Authorization', `Bearer ${seedUsers[8].token}`)
  //       .send({ price: 50 })
  //       .then((resp) => {
  //         expect(resp.status).to.equal(401)
  //         return app
  //           .get(`${BASE_URL}/${building._id}`)
  //       })
  //       .then((resp) => {
  //         expect(resp.body.price).to.equal(building.price)
  //         done()
  //       })
  //   })
  // })
})
