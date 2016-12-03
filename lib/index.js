'use strict'

const qs = require('querystring')
const from = require('from2').obj
const get = require('simple-get')

const url = 'https://wrapapi.com/use/kikobeats/forocoches/general/latest'

function req (query, cb) {
  const reqOptions = {
    method: 'GET',
    json: true,
    url: `${url}?${qs.stringify(query)}`
  }

  return get.concat(reqOptions, cb)
}

function createStream (opts) {
  const query = {
    wrapAPIKey: opts.key,
    page: 1
  }

  function hasFetch () {
    return query.page <= opts.pages
  }

  return from(function (size, next) {
    if (!hasFetch()) next(null, null)

    req(query, (err, res, body) => {
      if (err) return next(err)
      if (!body.success) return next(body.messages)

      var topics = body.data
      var lastTopic = body.data.pop()

      topics.forEach(this.push.bind(this))

      ++query.page
      next(null, lastTopic)
    })
  })
}

module.exports = createStream
