var sails = require('sails');

before(function(done) {

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(5000);

  sails.load({
    models: {
      connection: 'localDiskDb',
      migrate: 'drop'
    }
    // configuration for testing purposes
  }, function(err, server) {
    if (err) return done(err);
    // here you can load fixtures, etc.
    sails.Sinon = require('sinon')
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});