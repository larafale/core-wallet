require('../bootstrap.test')

var assert = require('chai').assert

describe('wallet', function() {

  it('wallet created with amount should be set to 0€', function(done) {

    Wallet.create({ user: 1, client: 1, amount: 1, token: 'token' }, function(err, res){
      assert.equal(res.amount, 0)
      done(err)
    })

  })

})

