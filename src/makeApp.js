const express = require('express')
const SwaggerParser = require('swagger-parser')
const connector = require('./index')
const api = require('../api')

const makeApp = async () => {
  const parser = new SwaggerParser()
  const apiDescription = await parser.validate('my_api.yml')
  const connect = connector(api, apiDescription)

  const app = express()
  // do any other app stuff, such as wire in passport, use cors etc
  // then attach the routes
  connect(app)
  // add any error handlers last
  return app
}

module.exports = makeApp
