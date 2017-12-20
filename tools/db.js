import path from 'path'

import shell from 'shelljs' // eslint-disable-line import/no-extraneous-dependencies

require('dotenv').config() // eslint-disable-line import/no-extraneous-dependencies

const baseDir = path.resolve(__dirname, '..', 'db-backups')
const action = process.argv[2]
const collection = process.argv[3]

const dbAddressProd = process.env.DB_ADDRESS_PROD
const dbNameProd = process.env.DB_NAME_PROD
const dbUserProd = process.env.DB_USER_PROD
const dbPassProd = process.env.DB_PASSWORD_PROD

const dbNameLocal = 'adamgoldman'
const dbAddressLocal = '127.0.0.1:27017'

if (!collection.match(/tools|posts/)) {
  console.log(`collection ${collection} doesn't exist`)
  process.exit(1)
}

console.log('db operation started!', action) // eslint-disable-line no-console

if (action === 'backupProd') {
  downloadProd()
}

if (action === 'importProdToLocal') {
  downloadProd()
  dropLocal()
  importDownloadedProdToLocal()
}

if (action === 'exportLocalToProd') {
  downloadLocal()
  dropProd()
  exportLocalToProd()
}

function downloadProd() {
  shell.exec(`mongodump -h ${dbAddressProd} -d ${dbNameProd} -c ${collection} -u ${dbUserProd} -p ${dbPassProd} -o ${getDir()}`)
}

function importDownloadedProdToLocal() {
  shell.exec(`mongorestore -d ${dbNameLocal} -c ${collection} ${getDir()}/${dbNameProd}/${collection}.bson`)
}

function downloadLocal() {
  shell.exec(`mongodump -h ${dbAddressLocal} -d ${dbNameLocal} -c ${collection} -o ${getDir()}`)
}

function exportLocalToProd() {
  shell.exec(`mongorestore -h ${dbAddressProd} -d ${dbNameProd} -c ${collection} -u ${dbUserProd} -p ${dbPassProd} ${getDir()}/${dbNameLocal}/${collection}.bson`)
}

function dropProd() {
  shell.exec(`mongo -u ${dbUserProd} -p ${dbPassProd} --eval 'db.${collection}.drop()' ${dbAddressProd}/${dbNameProd}`)
}

function dropLocal() {
  shell.exec(`mongo --eval 'db.${collection}.drop()' ${dbAddressLocal}/${dbNameLocal}`)
}

function getDir() {
  return `${baseDir}/${getDate()}/`
}

function getDate() {
  const today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1 // January is 0!

  const yyyy = today.getFullYear()
  if (dd < 10) {
    dd = `0${dd}`
  }
  if (mm < 10) {
    mm = `0${mm}`
  }
  return `${yyyy}-${mm}-${dd}`
}
