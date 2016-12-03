'use strict'

require('should')
var forocoches = require('..')

describe('forocoches-api', function () {
  it('get two page', function (done) {
    var stream = forocoches({
      key: process.env.API_KEY,
      pages: 2
    })

    var buffer = []

    stream.on('data', buffer.push.bind(buffer))

    stream.on('end', function () {
      buffer.length.should.be.equal(80)
      console.log(buffer)
      done()
    })

    stream.on('error', done)
  })
})
