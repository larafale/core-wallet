var Sails = require('sails')
var Barrels = require('barrels')
var port = 8012

// Global before hook
before(function (done) {
  this.timeout(5000)
  // Lift Sails with test database
  Sails.load({
    port: port,
    globals: {
      sails: true
    },
    log: {
      level: 'error'
    },
    models: {
      connection: 'localDiskDb',
      migrate: 'drop'
    }
  }, function(err, sails) {
    if (err)
      return done(err)
    
    // Load fixtures
    var barrels = new Barrels()

    // Save original objects in `fixtures` variable
    Fixtures = barrels.data
    Sinon = require('sinon')

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



