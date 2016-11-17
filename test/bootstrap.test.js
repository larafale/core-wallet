var Sails = require('sails')
var Barrels = require('barrels')
var port = 8012

// Global before hook
before(function (done) {
  this.timeout(5000)
  // Lift Sails with test database
  Sails.load({
    port: port,
    globals: { sails: true },
    log: { level: 'error' },
    models: { connection: 'memory', migrate: 'drop' }
  }, function(err, sails) {
    if (err)
      return done(err)
    
    // Load fixtures
    var barrels = new Barrels()

    global.Fixtures = barrels.data
    global.Sinon = require('sinon')
    global.assert = require('chai').assert

    // Populate the DB
    barrels.populate(function(err) {
      done(err, sails)
    })
  })
})

// Global after hook
after(function (done) {
  sails.log.verbose() // Skip a line before displaying Sails lowering logs
  sails.lower(done)
})



